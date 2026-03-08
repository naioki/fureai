import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

// Initialize the MicroCMS Client
export const microcmsClient = createClient({
  serviceDomain: "fureai-animal", // As provided by the user
  apiKey: "lm0ReSIoG4aMTCVSRHMiytkUDxTHQLIno8CI", // As provided by the user
});

// Define the shape of our News (お知らせ) item based on standard MicroCMS structure
export type NewsType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

// Define the API Response structure
export type NewsResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: NewsType[];
};

// Function to fetch a list of news
export const getNewsList = async (queries?: MicroCMSQueries) => {
  return await microcmsClient.get<NewsResponse>({
    endpoint: "news",
    queries,
  });
};

// Function to fetch a single news item by ID
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await microcmsClient.getListDetail<NewsType>({
    endpoint: "news",
    contentId,
    queries,
  });
};
