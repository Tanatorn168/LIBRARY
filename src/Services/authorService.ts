import type { Author } from "../models/authers"
import * as repo from "../repository/authorsRepository"

export function getAllAuthors(): Promise<Author[]> {
    return repo.getAllAuthors();
}