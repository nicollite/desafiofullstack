import { QueryQuestionsArgs, Questions } from "src/graphql-types";
import { ApiQuestionsGet, stackExchangeApi } from "../services/stack-exchange-api";

/**
 * Get questions from stack exchange api, and acts as a resolver for questions field
 * @param args Graphql query questions args
 * @returns An array of Questions
 */
export async function getQuestions(args: QueryQuestionsArgs): Promise<Questions[]> {
  // Destruct args and set in the params
  const { score, sort, limit = 10, tags = "" } = args;
  const params = { min: score, sort, pagesize: limit, tagged: tags, site: "stackoverflow" };

  return stackExchangeApi
    .get<ApiQuestionsGet>("/questions", { params })
    .then(res => res.data.items)
    .catch(err => {
      console.error("Error occurred getting questions");
      console.error(err.response.data);
      throw err;
    });
}
