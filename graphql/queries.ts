import { gql } from '@apollo/client'

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      created_at
      id
      topic
    }
  }
`

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      comments {
        created_at
        id
        post_id
        text
        username
      }
      created_at
      id
      image
      subreddit {
        created_at
        id
        topic
      }
      title
      subreddit_id
      username
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      comments {
        created_at
        id
        post_id
        text
        username
      }
      created_at
      id
      image
      subreddit {
        created_at
        id
        topic
      }
      title
      subreddit_id
      username
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`
export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      body
      comments {
        created_at
        id
        post_id
        text
        username
      }
      created_at
      id
      image
      subreddit {
        created_at
        id
        topic
      }
      title
      subreddit_id
      username
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`

// The queries below are for the POH Registry:
export const GET_REGISTRY_COUNTERS = gql`
  query MyQuery {
    pohcounter(id: "1") {
      expired
      challengedRegistration
      challengedRemoval
      id
      pendingRegistration
      pendingRemoval
      registered
      removed
      vouchingPhase
    }
  }
`

export const GET_SUBMISSION_BY_ADDRESS = gql`
  query MyQuery($id: ID = "") {
    pohsubmissions(where: { id: $id }) {
      creationTime
      id
      name
      registered
      submissionTime
      status
      requests {
        evidence {
          URI
        }
      }
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSION_BY_ADDRESS_OR_NAME = gql`
  query MyQuery($id: ID = "", $name_contains_nocase: String) {
    pohsubmissions(
      where: { id: $id, name_contains_nocase: $name_contains_nocase }
    ) {
      creationTime
      id
      name
      registered
      submissionTime
      status
      requests {
        evidence {
          URI
        }
      }
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSION_BY_NAME = gql`
  query MyQuery($name_contains_nocase: String) {
    pohsubmissions(where: { name_contains_nocase: $name_contains_nocase }) {
      creationTime
      id
      name
      registered
      removed
      requests {
        evidence {
          URI
        }
      }
      status
      submissionTime
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSIONS_BY_STATUS = gql`
  query MyQuery($first: Int = 1, $status: pohStatus = PendingRegistration) {
    pohsubmissions(
      first: $first
      orderDirection: desc
      where: { status: $status }
    ) {
      creationTime
      id
      name
      registered
      removed
      requests {
        evidence {
          URI
        }
      }
      status
      submissionTime
      vouchees {
        id
        name
        submissionTime
      }
    }
  }
`

export const GET_SUBMISSIONS_BY_ORDERING = gql`
  query MyQuery($first: Int = 1, $orderBy: pohSubmission_orderBy = registered) {
    pohsubmissions(first: $first, orderBy: $orderBy, orderDirection: desc) {
      creationTime
      id
      name
      registered
      removed
      requests {
        evidence {
          URI
        }
      }
      status
      submissionTime
      vouchees {
        id
        submissionTime
      }
    }
  }
`
