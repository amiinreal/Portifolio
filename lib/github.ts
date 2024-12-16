import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  language: string;
}

export async function getRepositories(username: string): Promise<Repository[]> {
  try {
    const response = await octokit.rest.repos.listForUser({
      username,
      sort: "updated",
      per_page: 6,
      type: "owner",
    });

    return response.data as Repository[];
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}