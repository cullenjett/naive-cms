import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ContentPage } from '../../../../interfaces/ContentPage';

export const QUERY = gql`
  query AllPages {
    pages {
      id
      url
      content
    }
  }
`;

export interface Response {
  pages: ContentPage[];
}

export class AllContentPagesQuery extends Query<Response, {}> {}
