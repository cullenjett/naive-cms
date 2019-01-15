import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ContentPage } from '../../../../interfaces/ContentPage';

export const QUERY = gql`
  query findPage($id: ID!) {
    page(id: $id) {
      id
      url
      content
    }
  }
`;

interface ContentPageResponse {
  page: ContentPage;
}

interface Variables {
  id: string;
}

export class ContentPageQuery extends Query<ContentPageResponse, Variables> {}
