// @flow
import gql from 'graphql-tag'

export const GET_USERS = gql`
  query User {
    allUsers {
      id
      createdAt
      updatedAt
      userName
    }
  }
`
