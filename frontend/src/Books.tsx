import * as React from 'react';
import { useQuery, gql } from '@apollo/client';

const BOOKS = gql`
  query  {
    books{
        title
        author
    }
  }
`;

interface BookQuery {
    books: Book[]
}

interface Book {
    title: string;
    author: string;
}

const Book = (book: Book, id: number) => <div key={id}>
    <h1>{book.title}</h1>
    <h2>By:{book.title}</h2>
</div>

const Books = () => {
    const { loading, error, data } = useQuery<BookQuery>(BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);
    return (
        <>
            {data!.books.map((book, id) => Book(book, id))}
        </>
    );
}

export { Books };