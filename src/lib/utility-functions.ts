import { Book } from "../interfaces";
import { Category } from "../enums";

export function purge<T>(inventory: T[]): T[] {
  return inventory.splice(2, inventory.length - 1);
}

export function getAllBooks(): Book[] {
  const books: Array<Book> = [
    {
      id: 1,
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript
    },
    {
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript
    },
    {
      id: 3,
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ];
  return books;
}

export function logFirstAvailable(books: any[] = getAllBooks()): void {
  const numberOfBooks: number = books.length;
  let firstAvailableTitle: string;

  for (const book of books) {
    if (book.available) {
      firstAvailableTitle = book.title;
      break;
    }
  }
  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`First Available Title: ${firstAvailableTitle}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const books: any[] = getAllBooks();
  const titles: Array<string> = [];
  for (const book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }
  return titles;
}

export function logBookTitles(titles: string[]): void {
  for (const title of titles) {
    console.log(title);
  }
}

export function getBookByID(id: number): Book | undefined {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Client name: ${name}`);
  if (age) {
    console.log(`Client age: ${age}`);
  }
  if (city) {
    console.log(`Client city: ${city}`);
  }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  const titles: Array<string> = [];
  let book;
  for (const bookId of bookIDs) {
    book = getBookByID(bookId);
    if (book.available === true) {
      titles.push(book.title);
    }
  }
  console.log(`Client name: ${customer}`);
  return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(data: any): string[] {
  const books = getAllBooks();
  const titles: Array<string> = [];
  if (typeof data === 'string') {
    for (const book of books) {
      if (book.author === data) {
        titles.push(book.title);
      }
    }
  }
  if (typeof data === 'boolean') {
    for (const book of books) {
      if (book.available === data) {
        titles.push(book.title);
      }
    }
  }
  return titles;
}

export function PrintBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

interface LibMgrCallback {
  (err: Error, titles: string[]): void;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
  setTimeout(() => {
    try {
      const titles: string[] = getBookTitlesByCategory(category);
      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error('No books found.');
      }
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if (err) {
    console.log(`Error message: ${err.message}`);
  } else {
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const titles: string[] = getBookTitlesByCategory(category);
      if (titles.length) {
        resolve(titles);
      } else {
        reject('No books found.');
      }
    }, 2000);
  });
  return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}
