import React from 'react';
class BooksListItem extends React.Component {

    render() {
        const { book } = this.props;
        return (
            <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.rating}</td>
            </tr>
        );
    }
}
export default BooksListItem;