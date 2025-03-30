import {Member} from './members'
import {Book} from './books'

export interface Borrowing {
    id: number;
    memberId: number;
    member: Member;
    book: Book;
    bookId: number;
    dueDate: Date;
    returnDate: Date;
    createdAt: Date;
    updatedAt: Date;
  }