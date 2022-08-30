import { gql } from '@apollo/client'
// ADD PROFILE
export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
      token
    }
  }
`

// LOGIN
export const LOGIN = gql`
mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        username
        email
      }
      token
    }
  }
`
// UPDATE USER INFO

// DELETE USER

// ADD STOCK

// UPDATE STOCK

// DELETE STOCK