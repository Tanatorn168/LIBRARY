import { authors, type Author } from '../models/authers'

export function getAllAuthors(): Promise<Author[]> {
    return Promise.resolve(authors)
}
