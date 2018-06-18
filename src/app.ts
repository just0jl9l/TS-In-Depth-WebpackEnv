import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import RefBook from './encyclopedia';
import { purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './lib/utility-functions';
import Shelf from './shelf';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}



// ============================



// ======================
// Task 01
// const allBooks = getAllBooks();
// logFirstAvailable(allBooks);

//Task 02
// const titles = getBookTitlesByCategory(Category.Javascript);
// logBookTitles(titles);


//Task 03
// titles.forEach((title, index) => console.log(title));
// console.log(getBookByID(1));

//Task 04
// let myID: string;
// myID = createCustomerID('Ann', 10);
// console.log(myID);

// let IdGenerator: (name:string, id: number) => string;
// IdGenerator = (name:string, id: number) => `${name}${id}`;
// myID = IdGenerator('Boris', 20);
// console.log(myID);

// Task 05
// createCustomer('Ann');
// createCustomer('Ann', 25);
// createCustomer('Ann', 25, 'Minsk');
// getBookTitlesByCategory();
// logFirstAvailable();

// let myBooks = сheckoutBooks('Ann', 1, 2, 4);
// myBooks.forEach(bookTitle => console.log(bookTitle));

//Task 06
// console.log(getTitles(false));
// console.log(getTitles('Lea Verou'));

// Task 07
// let myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// PrintBook(myBook);
// myBook.markDamaged('missing back cover');

//Task 08
// let logDamage: Logger;
// logDamage = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

//Task 09
// let favoriteAuthor: Author = {
//   email: 'a@a.com',
//   name: 'Ann',
//   numBooksPublished: 100
// };
// let favoriteLibrarian: Librarian = {
//   email: 'a@a.com',
//   name: 'Ann',
//   department: 'Classical',
//   assistCustomer: (name: string) => console.log(`Assist ${name}`)
// }

//Task 10, 20
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('Boris');

//Task 11
// let ref: ReferenceItem = new ReferenceItem('Colors, Backgrounds, and Gradients', 2015);
// ref.printItem();
// ref.publisher = 'Eric A. Meyer';
// console.log(ref.publisher);

//Task 12, 13
// let refBook = new RefBook('RefBook', 2012, 3);
// refBook.printItem();
// refBook.printCitation();

//Task 17, 18
// let inventory: Book[] = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const purgedBooks = purge<Book>(inventory);
// console.log(purgedBooks);
//
// const purgedNumbers: Array<number> = purge([1, 2, 3, 4]);
// console.log(purgedNumbers);

//Task 18
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook.title);

// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// const firstMagazines: Magazine = magazineShelf.getFirst();
// console.log(firstMagazines);

//Task 19
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Programming Language Monthly'));

//Task 21
// let favoriteLibrarian: UniversityLibrarian = new UniversityLibrarian();
// favoriteLibrarian.assistFaculty();
// favoriteLibrarian.assistFaculty = () => console.log('Changed');
// favoriteLibrarian.teachCommunity();
// favoriteLibrarian.teachCommunity = () => console.log('Changed');

//Task 22
// console.log('Begin...');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End.');

//Task 23
// console.log('Begin...');
// getBooksByCategoryPromise(Category.JavaScript)
//   .then(titles => {
//     console.log(titles);
//     return titles.length;
//   })
//   .then(numOfBooks => console.log(numOfBooks))
//   .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//   .then(titles => {
//     console.log(titles);
//     return titles.length;
//   })
//   .then(numOfBooks => console.log(numOfBooks))
//   .catch(err => console.log(err));
// console.log('End.');

//Task 24
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));

logSearchResults(Category.Software)
    .catch(reason => console.log(reason));
console.log('Search submitted...');
