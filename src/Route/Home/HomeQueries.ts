import { gql } from 'apollo-boost';

export const RECENT_STATUS = gql`
  query recentStatus {
    RecentStatus {
      ok
      error
      result {
        confirmation
        release
        dead
        inspection
        date
      }
    }
  }
`;
