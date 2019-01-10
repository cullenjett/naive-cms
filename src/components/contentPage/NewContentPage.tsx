import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ContentPageForm, ContentPageFormValues } from './ContentPageForm';
import { contentPageAPI } from '../../api/contentPageAPI';

export const NewContentPage: React.FC<RouteComponentProps> = ({ history }) => {
  const submitNewContentPageForm = (contentPage: ContentPageFormValues) => {
    return contentPageAPI.save(contentPage).then(() => {
      history.push('/pages');
    });
  };

  return (
    <section className="new-page">
      <h1>New Page</h1>

      <ContentPageForm onSubmit={submitNewContentPageForm} />
    </section>
  );
};
