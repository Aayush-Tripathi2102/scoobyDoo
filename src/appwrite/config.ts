import config from "@/config/appwriteConfig";
import { Client, Account, Databases } from "appwrite";


type LoginUserAccount = {
  email: string;
  password: string;
};

interface UserDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $collectionId: string;
  $databaseId: string;
  questionStatus: string;
  points: number;
}

interface UpdateProgressResult {
  success: boolean;
  points: number;
  questionStatus: Record<string, boolean>;
}
const appwriteClient = new Client()
  .setEndpoint(config.appwriteUrl)
  .setProject(config.appwriteProjectId)
export const account = new Account(appwriteClient);
export const databases = new Databases(appwriteClient);

export class AppwriteService {
  //create a record of user in appwrite
  //
  //login, session details and logout
  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
      return null;  // Ensure failure is handled
    }
  }
  

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      console.log(error);
      return false;  // Ensure it returns false on error
    }
  }
  
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("getCurrentUser error", error);
      return null;  // Ensure it returns null on error
    }
  }
  

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }
  }

  async updateUserProgress(
    userId: string,
    questionId: string,
    points: number,
  ): Promise<UpdateProgressResult> {
    try {
      // get current user document
      const userDocument = await databases.getDocument<UserDocument>(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        userId,
      );

      const questionStatus: Record<string, boolean> = JSON.parse(
        userDocument.questionStatus,
      ) as Record<string, boolean>;

      questionStatus[questionId] = true;

      const currentPoints = userDocument.points || 0;
      const newPoints = currentPoints + points;

      await databases.updateDocument<UserDocument>(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        userId,
        {
          questionStatus: JSON.stringify(questionStatus),
          points: newPoints,
        },
      );

      return {
        success: true,
        points: newPoints,
        questionStatus,
      };
    } catch (error) {
      console.error("Error updating user progress:", error);
      throw error;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
