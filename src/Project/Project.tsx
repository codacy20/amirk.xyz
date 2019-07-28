import React from 'react';
import IProject from '../Types/Post'

export default class Project extends React.Component<any, any> {

    public constructor(prop: any) {
        super(prop);
        this.state = {
            description: [],
            error: null,
            id: this.props.id,
            isLoaded: false,
            links: [],
            titles: [],
        }
    }

    public async componentDidMount() {
        fetch('https://amirkxyz-cms.herokuapp.com/projects')
            .then(res => res.json())
            .then((result) => {
                if (result.length > 0) {
                    result.forEach((element: IProject) => {
                        const titles = this.state.titles.concat(element.title);
                        const joined2 = this.state.links.concat(element.link);
                        this.setState({
                            isLoaded: true,
                            links: joined2,
                            titles,
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
        const { error, id, isLoaded, description, links, titles } = this.state;
        return (
            <React.Fragment>
                mounted the Component
            </React.Fragment>
        )
    }
}