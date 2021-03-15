import axios from "axios";
import { Questions } from "src/graphql";

export const stackExchangeApi = axios.create({ baseURL: "https://api.stackexchange.com/2.2" });

export interface ApiQuestionsGet {
  items: Questions[];
  has_more: true;
  quota_max: 300;
  quota_remaining: 286;
}
