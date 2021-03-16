import React, { useState } from "react";
import {
  Container,
  Input,
  InputsWrapper,
  Label,
  Main,
  SearchButton,
  Subtitle,
  Title,
} from "./styles";

export interface QueryBoxPorps {
  handleSearch: (variables: QueryBoxHandleSearchOptions) => any;
}

export interface QueryBoxHandleSearchOptions {
  tags: string;
  limit: string;
  score: string;
  sort: string;
}

function QueryBox(props: QueryBoxPorps) {
  const { handleSearch } = props;

  const [tags, _setTags] = useState("Javascript");
  function setTags(tags: string) {
    _setTags(`Javascript;${tags}`);
  }
  const [limit, setLimit] = useState("10");
  const [score, setScore] = useState("10");
  const [sort, setSort] = useState("activity");
  const sortValues = ["activity", "votes", "creation", "hot", "week", "month"];

  // Validate values
  function isAllValid() {
    if (Number.isNaN(limit) || Number.isNaN(score)) return false;
    if (!sortValues.includes(sort)) return false;
    return true;
  }

  function handleClick() {
    if (isAllValid()) handleSearch({ tags, limit, score, sort });
  }

  return (
    <Main className="flex column align-flex-start">
      <Title>StackOverflow</Title>
      <Container className="flex column align-flex-start">
        <Subtitle>Buscar na API</Subtitle>
        <InputsWrapper className="flex">
          <div>
            <Label htmlFor="tag">Tag</Label>
            <Input id="tag" onChange={e => setTags(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="limit">Limit</Label>
            <Input id="limit" onChange={e => setLimit(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="score">Score</Label>
            <Input id="score" onChange={e => setScore(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="sort">Sort</Label>
            <Input id="sort" onChange={e => setSort(e.target.value)} />
          </div>
        </InputsWrapper>
        <SearchButton onClick={handleClick}>Buscar</SearchButton>
      </Container>
    </Main>
  );
}

export default QueryBox;
