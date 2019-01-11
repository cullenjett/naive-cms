import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { ContentPage } from '../../../interfaces/ContentPage';
import { contentPageAPI } from '../../../api/contentPageAPI';
import { ContentPageForm, ContentPageFormValues } from './ContentPageForm';
import { pagePaths } from './ContentPageRoutes';
import { previewPaths } from '../preview/PreviewRoutes';

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
      .then(() => history.push(pagePaths.INDEX));
  };

  deleteContentPage = () => {
    const { history, match } = this.props;
    const id = +match.params.id;

    contentPageAPI.delete(id).then(() => history.push(pagePaths.INDEX));
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

        <Link to={previewPaths.VIEW(contentPage.id)} style={{ float: 'right' }}>
          Preview this page
        </Link>

        <ContentPageForm
          initialValues={{ ...contentPage }}
          onSubmit={this.submitEditContentPageForm}
        />
      </section>
    );
  }
}
