let age: number = 50;
let username: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};
let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number] = ['Max', 21];

person = ['ssd', 21];

enum Page {
  Loading,
  Ready,
}

let union: string | number;

let literal: 'enable' | 'disable';



function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}




type Obj = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Obj = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date ,
    updateAt: new Date(),
  },
};

console.log(page1);

const page2: Obj = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
