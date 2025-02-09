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
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67a653bd003d70584da7");
export const account = new Account(appwriteClient);
export const databases = new Databases(appwriteClient);

export class AppwriteService {
  //create a record of user in appwrite
  //
  //login, session details and logout
  async login({ email, password }: LoginUserAccount) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      const user = await this.getCurrentUser();

      if (user) {
        try {
          console.log("login ke bad user hai");
          const doc = await this.createUserDocument(user.$id);
          // Try to get the user document
          // const doc = await databases.getDocument(
          //   "67a6547e002ec90db397",
          //   "67a65496000682e8cce3",
          //   user.$id,
          // );
          console.log("created document after login: ", doc);
        } catch (error) {
          // If document doesn't exist, create it
          console.log("chud gaye");
          if (
            error instanceof Error &&
            error.message.includes("could not be found")
          ) {
            await this.createUserDocument(user.$id);
          }
        }
      }

      return session;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      console.log(error);
      return false; // Ensure it returns false on error
    }
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("getCurrentUser error", error);
      return null; // Ensure it returns null on error
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
        "67a6547e002ec90db397",
        "67a65496000682e8cce3",
        userId,
      );

      const questionStatus: Record<string, boolean> = JSON.parse(
        userDocument.questionStatus,
      ) as Record<string, boolean>;

      questionStatus[questionId] = true;

      const currentPoints = userDocument.points || 0;
      const newPoints = currentPoints + points;

      await databases.updateDocument<UserDocument>(
        "67a6547e002ec90db397",
        "67a65496000682e8cce3",
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

  async createUserDocument(userId: string) {
    try {
      const initialData = {
        name: "",
        questionStatus: JSON.stringify({
          q1: false,
          q2: false,
          q3: false,
          q4: false,
          q5: false,
          q6: false,
        }),
        points: 0,
        $id: userId,
      };

      return await databases.createDocument(
        "67a6547e002ec90db397",
        "67a65496000682e8cce3",
        userId,
        initialData,
      );
    } catch (error) {
      console.error("Error creating user document:", error);
      throw error;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
