import React from 'react';

interface Props {
  onSubmit: (formValues: ContentPageFormValues) => void;
}

interface State {
  url: string;
  content: string;
}

export interface ContentPageFormValues extends State {}

export class ContentPageForm extends React.Component<Props, State> {
  state = {
    url: '',
    content: '',
  };

  onFieldChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    } as any);
  };

  onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const { url, content }: ContentPageFormValues = this.state;

    this.props.onSubmit({
      url,
      content,
    });

    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="url">URL</label>
          <input
            id="url"
            name="url"
            type="text"
            value={this.state.url}
            onChange={this.onFieldChange}
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            rows={10}
            value={this.state.content}
            onChange={this.onFieldChange}
          />
        </div>

        <div>
          <button type="submit">Create new page</button>
        </div>
      </form>
    );
  }
}
