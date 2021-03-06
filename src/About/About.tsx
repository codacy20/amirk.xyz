import React from 'react';
import { Loader } from 'react-feather';

export default class About extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            id: this.props.id,
            isLoaded: false,
            items: []
        };
    }

    public async componentWillMount() {
        await fetch(`https://amirkxyz-cms.herokuapp.com/posts?title=${this.state.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result[0].body
                    });
                },
                (error) => {
                    this.setState({
                        error,
                        isLoaded: true
                    });
                }
            )
    }

    public render() {
        const { isLoaded, error, items, id } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return (
                <article id={id} className="loader">
                    <Loader
                        type="MutatingDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                    <p>Please be patient</p>
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
