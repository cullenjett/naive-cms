import React from 'react';

interface Props {
  onSubmit: (formValues: ContentPageFormValues) => void;
  initialValues?: {
    [T in keyof ContentPageFormValues]: ContentPageFormValues[T]
  };
}

interface State {
  url: string;
  content: string;
}

export interface ContentPageFormValues extends State {
  id?: number;
}

export class ContentPageForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      url: '',
      content: '',
      ...props.initialValues,
    };
  }

  onFieldChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    } as any);
  };

  onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const { id, url, content }: ContentPageFormValues = this.state;

    this.props.onSubmit({
      id,
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
            rows={15}
            value={this.state.content}
            onChange={this.onFieldChange}
          />
        </div>

        <div>
          <button type="submit">Save page</button>
        </div>
      </form>
    );
  }
}
