import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query IssuesQuery($input: IssuesFilterInput) {
    issues(input: $input) {
      content
      id
      name
      status
    }
  }
`
