import React from 'react'
import { parseString } from 'xml2js';
import { IBook } from '../Types/Models';

export default class Shelf extends React.Component<any, any> {

    constructor(props: any) {
        super(props)

        this.state = {
            books: [],
            error: null,
            id: this.props.id,
            isLoaded: false,
        }
    }

    public async componentDidMount() {
        await fetch('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/66046857.xml?shelf=read&key=txiCgPhlzu8oBGReIp3dQ')
            .then(response => response.text())
            .then((response) => {
                parseString(response, (err, result) => {
                    const books: IBook[] = result.GoodreadsResponse.books[0].book;
                    this.setState({
                        books,
                        isLoaded: true,
                    });
                });
            }).catch((error) => {
                this.setState({
                    error,
                    isLoaded: true
                });
            })
    }

    public render() {
        const { isLoaded, error, books, id } = this.state;
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
            const elements = books.map((el: IBook, index: any) => {
                return (
                    <li key={index}>
                        <a href={el.link} target="_blank" rel="noopener noreferrer">{el.title}</a>
                    </li>
                )
            })
            return (
                <article id="shelf">
                    <h2 className="major">Book Shelf</h2>
                    <h3>read</h3>
                    {elements}
                </article>
            )
        }
    }
}
