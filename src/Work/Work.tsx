import * as _ from "lodash";
import React from 'react';
import { IWork } from '../Types/Models';
import Loader from "react-loader-spinner";

export default class Work extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            companies: [],
            error: null,
            id: this.props.id,
            isLoaded: false,
            titles: [],
        };
    }

    public async componentDidMount() {
        fetch(`https://amirkxyz-cms.herokuapp.com/works`)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.length > 0) {
                        result = _.orderBy(result, ['id'], ['desc'])
                        result.forEach((element: IWork) => {
                            const titles = this.state.titles.concat(element.title);
                            const joined2 = this.state.companies.concat(element.company);
                            this.setState({
                                companies: joined2,
                                isLoaded: true,
                                titles,
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
        const { isLoaded, error, titles, id, companies } = this.state;
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
            const elements = titles.map((el: any, index: any) => {
                return (
                    <tr key={index}>
                        <td>{el}</td>
                        <td>{companies[index]}</td>
                    </tr>
                )
            })

            return (
                <article id={id}>
                    <h2 className="major">{id}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elements}
                        </tbody>
                    </table>
                </article >
            );
        }
    }
}