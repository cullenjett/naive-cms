import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import marked from 'marked';

import { ContentPage } from '../../../interfaces/ContentPage';
import { contentPageAPI } from '../../../api/contentPageAPI';

interface State {
  contentPage?: ContentPage;
}

interface RouteParams {
  id: string;
}

export class PreviewPage extends React.Component<
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

  render() {
    const { contentPage } = this.state;

    if (!contentPage) {
      return <p>Loading...</p>;
    }

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: marked(contentPage.content),
        }}
      />
    );
  }
}
