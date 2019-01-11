import React from 'react';
import { Link } from 'react-router-dom';

import { ContentPage } from '../../../interfaces/ContentPage';
import { contentPageAPI } from '../../../api/contentPageAPI';
import { pagePaths } from './ContentPageRoutes';
import { previewPaths } from '../preview/PreviewRoutes';

interface State {
  contentPages: ContentPage[];
}

export class ContentPageIndex extends React.Component<{}, State> {
  state: State = {
    contentPages: [],
  };

  componentDidMount() {
    contentPageAPI.all().then((contentPages) => {
      this.setState({
        contentPages,
      });
    });
  }

  render() {
    const { contentPages } = this.state;

    return (
      <section>
        <h1>
          Pages (<Link to={pagePaths.NEW}>Create new page</Link>)
        </h1>

        <ul>
          {contentPages.map((page) => (
            <li key={page.url}>
              {page.url} <Link to={pagePaths.EDIT(page.id)}>(Edit)</Link>{' '}
              <Link to={previewPaths.VIEW(page.id)}>(Preview)</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
