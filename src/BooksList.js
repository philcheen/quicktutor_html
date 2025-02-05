import React from 'react';
import BooksListItem from './BooksListItem';

const initialBooks = [
    {
        id: 1,
        title: 'JavaScript - The Comprehensive Guide',
        author: 'Phil Chen',
        isbn: '978-3836286299',
        rating: 5,
    },
    {
        id: 2,
        title: 'React.JS Guide',
        author: 'Eric Hong',
        isbn: '978-3836286299',
        rating: 15,
    }
];

class BooksList extends React.Component {

    state = {
        books: initialBooks,
    };

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {this.state.books.map((book) => (
                    <BooksListItem book={book} key={book.id}/>
                ))}
                </tbody>
            </table>
        );
    }
}

export default BooksList;