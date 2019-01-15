import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import marked from 'marked';

import {
  ContentPageQuery,
  QUERY,
} from '../contentPage/queries/ContentPageQuery';

interface RouteParams {
  id: string;
}

export const PreviewPage: React.FC<RouteComponentProps<RouteParams>> = ({
  match,
}) => {
  const { id } = match.params;

  return (
    <ContentPageQuery query={QUERY} variables={{ id }}>
      {({ data }) => {
        if (!data || !data.page) {
          return <p>Loading...</p>;
        }

        const contentPage = data.page;

        return (
          <div
            dangerouslySetInnerHTML={{
              __html: marked(contentPage.content),
            }}
          />
        );
      }}
    </ContentPageQuery>
  );
};
