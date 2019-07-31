import React from 'react';
import { IProject } from '../Types/Models'

export default class Project extends React.Component<any, any> {

    public constructor(prop: any) {
        super(prop);
        this.state = {
            description: [],
            error: null,
            id: this.props.id,
            isLoaded: false,
            links: [],
            names: [],
        }
    }

    public async componentDidMount() {
        fetch('https://api.github.com/users/codacy20/repos')
            .then(res => res.json())
            .then((result) => {
                if (result.length > 0) {
                    result.forEach((element: IProject) => {
                        const names = this.state.names.concat(element.name);
                        const joined2 = this.state.links.concat(element.html_url);
                        this.setState({
                            isLoaded: true,
                            links: joined2,
                            names,
                        });
                    });
                }
            }, (error) => {
                this.setState({
                    error,
                    isLoaded: true
                });
            })
    }

    public render() {
        const { error, id, isLoaded, links, names } = this.state;
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
            const elemets = names.map((el: any, index: any) => {
                return (
                    <tr key={index}>
                        <td>{el}</td>
                        <td>{links[index]}</td>
                    </tr>
                )
            })

            return (
                <article id={id}>
                    <h2 className="major">{id}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elemets}
                        </tbody>
                    </table>
                </article >
            );
        }
    }
}