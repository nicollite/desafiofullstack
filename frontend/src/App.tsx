import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import QueryBox, { QueryBoxHandleSearchOptions } from "./components/QueryBox";
import Spinner from "./components/Spinner";
import QuestionList from "./components/QuestionList";
import { GET_QUESTIONS } from "./queries/question";
import { Query } from "./graphql-types";
import styled from "styled-components";

const App = () => {
  const [getQuestions, { loading, error, data, refetch }] = useLazyQuery<Query>(GET_QUESTIONS);
  let [showLoading, setShowLoading] = useState(false);

  async function handleSearch(variables: QueryBoxHandleSearchOptions) {
    setShowLoading(true);
    if (!data) getQuestions({ variables });
    else if (refetch) await refetch(variables);

    setShowLoading(false);
  }

  return (
    <div className="flex column align-center">
      <QueryBox handleSearch={handleSearch} />

      {loading || showLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorContainer>
          <span>Ocorreu um erro ao buscar os dados, por favor tente mais tarde</span>
        </ErrorContainer>
      ) : data ? (
        <QuestionList questions={data.questions} />
      ) : null}
    </div>
  );
};

export default App;

const ErrorContainer = styled.div`
  padding: 15px 30px;
  background-color: #ffd0cd;
  color: #f00;
`;
