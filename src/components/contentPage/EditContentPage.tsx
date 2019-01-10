import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ContentPage } from '../../interfaces/ContentPage';
import { contentPageAPI } from '../../api/contentPageAPI';
import { ContentPageForm, ContentPageFormValues } from './ContentPageForm';

interface State {
  contentPage?: ContentPage;
}

interface RouteParams {
  id: string;
}

export class EditContentPage extends React.Component<
  RouteComponentProps<RouteParams>
> {
  state: State = {
    contentPage: undefined,
  };

  componentDidMount() {
    const contentPageID = +this.props.match.params.id;
    contentPageAPI.find(contentPageID).then((contentPage) => {
      this.setState({
        contentPage,
      });
    });
  }

  submitEditContentPageForm = (formValues: ContentPageFormValues) => {
    const { history } = this.props;
    const id = formValues.id || 0;

    contentPageAPI
      .edit(id, {
        ...formValues,
        id,
      })
      .then(() => history.push('/pages'));
  };

  render() {
    const { contentPage } = this.state;

    if (!contentPage) {
      return <p>Loading...</p>;
    }

    return (
      <section>
        <h1>
          Edit Page: <code>{contentPage.url}</code>
        </h1>

        <ContentPageForm
          initialValues={{ ...contentPage }}
          onSubmit={this.submitEditContentPageForm}
        />
      </section>
    );
  }
}
