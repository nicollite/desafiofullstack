export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  questions?: Maybe<Array<Maybe<Questions>>>;
};


export type QueryQuestionsArgs = {
  tags: Scalars['String'];
  score?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['String']>;
};

export enum Sort {
  Activity = 'activity',
  Votes = 'votes',
  Creation = 'creation',
  Hot = 'hot',
  Week = 'week',
  Month = 'month'
}

export type Questions = {
  __typename?: 'Questions';
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  owner?: Maybe<Owner>;
  is_answered?: Maybe<Scalars['Boolean']>;
  view_count?: Maybe<Scalars['Int']>;
  answer_count?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  last_activity_date?: Maybe<Scalars['Int']>;
  creation_date?: Maybe<Scalars['Int']>;
  question_id?: Maybe<Scalars['Int']>;
  content_license?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Owner = {
  __typename?: 'Owner';
  reputation?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user_type?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};
