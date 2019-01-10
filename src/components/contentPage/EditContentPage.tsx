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
    const { history, match } = this.props;
    const id = +match.params.id;

    contentPageAPI
      .edit(id, {
        ...formValues,
        id,
      })
      .then(() => history.push('/pages'));
  };

  deleteContentPage = () => {
    const { history, match } = this.props;
    const id = +match.params.id;

    contentPageAPI.delete(id).then(() => history.push('/pages'));
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

        <button
          type="button"
          onClick={this.deleteContentPage}
          style={{ background: '#f5222d' }}
        >
          Delete this page
        </button>

        <ContentPageForm
          initialValues={{ ...contentPage }}
          onSubmit={this.submitEditContentPageForm}
        />
      </section>
    );
  }
}
