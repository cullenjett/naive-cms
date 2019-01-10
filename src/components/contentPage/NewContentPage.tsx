import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ContentPage } from '../../interfaces/ContentPage';
import { ContentPageForm, ContentPageFormValues } from './ContentPageForm';
import { contentPageAPI } from '../../api/contentPageAPI';
import { pagePaths } from './ContentPageRoutes';

export const NewContentPage: React.FC<RouteComponentProps> = ({ history }) => {
  const submitNewContentPageForm = (formValues: ContentPageFormValues) => {
    const newContentPage: ContentPage = {
      ...formValues,
      id: Date.now(),
    };

    return contentPageAPI.save(newContentPage).then(() => {
      history.push(pagePaths.INDEX);
    });
  };

  return (
    <section className="new-page">
      <h1>New Page</h1>

      <ContentPageForm onSubmit={submitNewContentPageForm} />
    </section>
  );
};
