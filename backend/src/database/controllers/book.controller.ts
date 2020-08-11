
import Book, { IBook } from '../models/book.model';

interface ICreateBookInput {
    title: IBook['title'];
    author: IBook['author'];
}

async function CreateBook({ title, author }: ICreateBookInput): Promise<IBook> {
    return await Book.create({
        title,
        author
    })
        .then((data: IBook) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
}

async function ReadBooks(): Promise<IBook[]> {
    return Book.find({});
}

export {
    CreateBook,
    ReadBooks,
};