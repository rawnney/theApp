// @flow
import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation CreateUserMutation($userName: String!) {
    createUser(userName: $userName) {
      userName
    }
  }
`
