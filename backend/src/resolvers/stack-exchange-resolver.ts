import { QueryQuestionsArgs } from "src/graphql";
import { ApiQuestionsGet, stackExchangeApi } from "../services/stack-exchange-api";

export const stackExchangeResolver = {
  questions: getQuestions,
};

export async function getQuestions(args: QueryQuestionsArgs) {
  const { score, sort, limit = 10, tags } = args;
  const params = { score, sort, limit, tagged: tags, site: "stackoverflow" };
  console.log(args);

  return stackExchangeApi
    .get<ApiQuestionsGet>("/questions", { params })
    .then(res => {
      console.log(res.data);
      return res.data.items;
    })
    .catch(err => {
      console.error("Error occurred getting questions");
      console.error(err.response.data);
      throw err;
    });
}
