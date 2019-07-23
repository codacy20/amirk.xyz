import React from 'react';
import IPost from './Types/Post';

export default class Work extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            id: this.props.id,
            isLoaded: false,
            items: []
        };
    }

    public async componentDidMount() {
        fetch(`https://amirkxyz-cms.herokuapp.com/posts?title_contains=${this.state.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.length > 0) {
                        result.forEach((element: IPost) => {
                            const joined = this.state.items.concat(element.body);
                            this.setState({
                                isLoaded: true,
                                items: joined
                            });
                        });
                    }
                },
                (error) => {
                    this.setState({
                        error,
                        isLoaded: true
                    });
                }
            );
    }

    public render() {
        const { isLoaded, error, items, id } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return (
                <article id={id}>
                    <h2 className="major">{id}</h2>
                    <p>{id} is still loading ...</p>
                </article >
            );
        }
        else {
            return (
                <article id={id}>
                    <h2 className="major">{id}</h2>
                    <pre>
                        <p>
                            {items}
                        </p>
                    </pre>
                </article >
            );
        }
    }
}