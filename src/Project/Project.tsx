import React from 'react';

export default class Project extends React.Component<any, any> {

    public constructor(prop: any) {
        super(prop);
        this.state = {
            error: null,
            id: this.props.id,
            isLoaded: false,
            items: []
        }
    }

    public render() {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}