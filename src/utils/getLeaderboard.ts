import { databases } from "@/appwrite/config";
import config from "@/config/appwriteConfig";
import { Query } from "appwrite";

interface LeaderboardUser {
  $id: string;
  $createdAt: string;
  $collectionId: string;
  $databaseId: string;
  $updatedAt: string;
  $permissions: string[];
  points: number;
  name: string;
}

export async function getLeaderboard(): Promise<LeaderboardUser[]> {
  try {
    const response = await databases.listDocuments<LeaderboardUser>(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      [
        Query.orderDesc("points"),
        Query.limit(100), // Adjust limit as needed
      ],
    );

    return response.documents;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
}
