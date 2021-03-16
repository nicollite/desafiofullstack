import React from "react";
import { Questions } from "../../graphql-types";
import { getPortuguesTextNumber, timeAgo } from "../../utils/utils";
import {
  Divider,
  Question,
  QuestionsWrapper,
  QuestionTime,
  QuestionTitle,
  Stats,
  StatsContainer,
  Summary,
  Tag,
  TagsWrapper,
} from "./styles";

export interface QuestionListProps {
  questions: Questions[];
}

function QuestionList(props: QuestionListProps) {
  const { questions } = props;

  function getTagLink(tag: string) {
    return `https://stackoverflow.com/questions/tagged/${tag}`;
  }

  function getTimeString(question: Questions) {
    const hasAwswer = question.answer_count > 0;
    const prefix = hasAwswer ? "Respondia" : "Perguntada";
    // Make time in milliseconds
    const time = (hasAwswer ? question.last_activity_date : question.creation_date) * 1000;

    return `${prefix} ${timeAgo(time)}`;
  }

  return (
    <QuestionsWrapper className="flex column">
      <Divider className="top-divider" />
      {questions.map(question => (
        <Question key={question.question_id} className="flex column align-center">
          <div className="flex gaps">
            <StatsContainer className="flex align-center">
              <Stats>
                <span className="number-count">{question.score}</span>
                <span>votos</span>
              </Stats>

              <Stats>
                <span className="number-count">{question.answer_count}</span>
                <span>respostas</span>
              </Stats>

              <Stats>
                <span className="number-count">{getPortuguesTextNumber(question.view_count)}</span>
                <span>visitas</span>
              </Stats>
            </StatsContainer>

            <Summary className="flex column">
              <QuestionTitle>
                <a href={question.link} target="_blank">
                  {question.title}
                </a>
              </QuestionTitle>
              <TagsWrapper className="flex gaps">
                {question.tags.map((tag, index) => (
                  <Tag key={index} href={getTagLink(tag)} target="_blank">
                    {tag}
                  </Tag>
                ))}
              </TagsWrapper>
              <QuestionTime className="flex justify-flex-end gaps">
                <span>{getTimeString(question)}</span>
                <a href={question.owner.link}>{question.owner.display_name}</a>
                <span>{question.owner.reputation}</span>
              </QuestionTime>
            </Summary>
          </div>
          <Divider />
        </Question>
      ))}
    </QuestionsWrapper>
  );
}

export default QuestionList;
