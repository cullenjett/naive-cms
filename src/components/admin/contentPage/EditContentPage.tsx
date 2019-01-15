import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { contentPageAPI } from '../../../api/contentPageAPI';
import { ContentPageForm, ContentPageFormValues } from './ContentPageForm';
import { pagePaths } from './ContentPageRoutes';
import { previewPaths } from '../preview/PreviewRoutes';

import { ContentPageQuery, QUERY } from './queries/ContentPageQuery';

interface RouteParams {
  id: string;
}

export const EditContentPage: React.FC<RouteComponentProps<RouteParams>> = ({
  history,
  match,
}) => {
  const { id } = match.params;

  const submitEditContentPageForm = (formValues: ContentPageFormValues) => {
    contentPageAPI
      .edit(id, {
        ...formValues,
        id,
      })
      .then(() => history.push(pagePaths.INDEX));
  };

  const deleteContentPage = () => {
    contentPageAPI.delete(id).then(() => history.push(pagePaths.INDEX));
  };

  return (
    <ContentPageQuery query={QUERY} variables={{ id }}>
      {({ data }) => {
        if (!data || !data.page) {
          return <p>Loading...</p>;
        }

        const contentPage = data.page;

        return (
          <section>
            <h1>
              Edit Page: <code>{contentPage.url}</code>
            </h1>

            <button
              type="button"
              onClick={deleteContentPage}
              style={{ background: '#f5222d' }}
            >
              Delete this page
            </button>

            <Link
              to={previewPaths.VIEW(contentPage.id)}
              style={{ float: 'right' }}
            >
              Preview this page
            </Link>

            <ContentPageForm
              initialValues={{ ...contentPage }}
              onSubmit={submitEditContentPageForm}
            />
          </section>
        );
      }}
    </ContentPageQuery>
  );
};
