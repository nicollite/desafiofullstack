import axios from "axios";
import { Questions } from "src/graphql-types";

export const stackExchangeApi = axios.create({ baseURL: "https://api.stackexchange.com/2.2" });

export interface ApiQuestionsGet {
  items: Questions[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
