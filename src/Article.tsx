import React from 'react';

class Article extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            id: this.props.id,
            isLoaded: false,
            items: []
        };
    }

    public componentDidMount() {
        fetch(`https://amirkxyz-cms.herokuapp.com/posts?title=${this.state.id}`)
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
            return <div>Loading...</div>;
        }
        else {
            return (
                // <ul>
                //     {items.map(item => (
                //         <li key={item.name}>
                //             {item.name} {item.price}
                //         </li>
                //     ))}
                // </ul>
                <article id={id}>
                    <h2 className="major">{id}</h2>
                    <span className="image main"><img src="images/pic01.jpg" alt="" /></span>
                    <p>{items}</p>
                </article >
            );
        }
    }
}

export default Article;