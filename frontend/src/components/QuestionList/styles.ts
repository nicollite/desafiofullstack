import styled from "styled-components";

export const QuestionsWrapper = styled.div`
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  margin-bottom: 30px;
`;

export const Question = styled.div`
  margin: 0 5%;
  & > div {
    width: 100%;
    padding: 15px 5px;
    box-sizing: border-box;
  }

  & a {
    color: #0077cc;
    line-height: 1.3;
  }

  & a:hover {
    color: #0095ff;
  }
`;

export const StatsContainer = styled.div``;

export const Stats = styled.div`
  font-size: 12px;
  color: #848d95;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > * {
    width: fit-content;
  }

  & .number-count {
    font-size: 18px;
  }
`;

export const QuestionTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 0.35em;
  line-height: 1.3;
`;

export const Summary = styled.div`
  width: 100%;
`;

export const TagsWrapper = styled.div``;

export const Tag = styled.a`
  color: #39739d;
  background-color: #e1ecf4;
  border-color: #e1ecf4;
  border-radius: 3px;
  font-size: 12px;
  padding: 0.4em 0.5em;
  margin: 2px 2px 2px 0;
  cursor: pointer;

  &:hover {
    background-color: #d1e5f1;
  }
`;

export const QuestionTime = styled.div`
  --flex-gap: 5px;
`;

export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0;
  padding: 0;

  &.top-divider {
    width: 90%;
    align-self: center;
  }
`;
