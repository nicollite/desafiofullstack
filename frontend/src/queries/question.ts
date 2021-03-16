import { gql } from "@apollo/client";

export const GET_QUESTIONS = gql`
  query Questions($tags: String!, $score: String, $sort: String, $limit: String) {
    questions(tags: $tags, score: $score, sort: $sort, limit: $limit) {
      tags
      owner {
        reputation
        user_id
        user_type
        profile_image
        display_name
        link
      }
      is_answered
      view_count
      answer_count
      score
      last_activity_date
      creation_date
      question_id
      content_license
      link
      title
    }
  }
`;
