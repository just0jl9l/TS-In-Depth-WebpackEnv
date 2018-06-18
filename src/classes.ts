import * as Interfaces from "./interfaces";
import { sealed, logger, writable } from "./decorators";

@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
  department: string;
  name: string;
  email: string;

  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log('Assisting faculty.');
  }

  @writable(false)
  teachCommunity() {
    console.log('Teaching community.');
  }
}

abstract class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating a new ReferenceItem...');
  //   this.title = newTitle;
  //   this.year = newYear;
  // }

  private _publisher: string;
  get publisher(): string {
    return this._publisher.toLocaleUpperCase();
  }
  set publisher(publisher: string) {
    this._publisher = publisher;
  }

  static department: string = 'Department 1';

  constructor(public title: string, protected year: number) { }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  abstract printCitation(): void;
}

export {UniversityLibrarian, ReferenceItem};