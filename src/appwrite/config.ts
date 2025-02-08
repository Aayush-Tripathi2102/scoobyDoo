import config from "@/config/appwriteConfig";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  teamName: string;
  email: string;
  password: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient
  .setEndpoint(config.appwriteUrl)
  .setProject(config.appwriteProjectId);
export const account = new Account(appwriteClient);

export class AppwriteService {
  //create a record of user in appwrite
  async createUserAccount({ teamName, email, password }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        teamName,
      );
      if (userAccount) {
        await this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }
  //login, session details and logout
  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      console.log(error);
    }
    return false;
  }
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("getCurrentUser error", error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log(error);
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
