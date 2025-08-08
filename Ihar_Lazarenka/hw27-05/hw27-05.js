// Задача 1

// Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц


function Book(author, bookName, pageAmount) {
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
}

const books = [
    new Book(`Chekhov`, `The Fat and the Thin`, 120),
    new Book(`Dostoevky`, `Crime and Punishment`, 432),
    new Book(`Tolstoy`, `War and Peace`, 945),
    new Book("Pushkin", "Eugene Onegin", 200),
    new Book(`Bulgakov`, `The Master and Margarita`, 480),
    new Book("Lermontov", "Borodino", 270),
    new Book("Набоков", "Лолита", 336),
    new Book("Gogol", "Dead Souls", 333),

];

function getBiggerBook(books) {
    if (books.length === 0) return null;

    let biggestBook = books[0];
    for (let i = 1; i < books.length; i++) {
        if (books[i].pageAmount > biggestBook.pageAmount) {
            biggestBook = books[i];
        }
    }
    return biggestBook;
}
const biggest = getBiggerBook(books);
console.log(`The book with the most pages:`, `${biggest.bookName} (${biggest.pageAmount} page.) — author: ${biggest.author}`);



// Задача 2

// Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

class Programmer {


    constructor(name, stack) {
        this.name = name;
        this.stack = stack;
    }

    code() {
        this.stack.forEach(tech => {
            console.log(`${this.name} is coding on ${tech}`);
        });
    }

    
    toString() {
        return `Hello my name is ${this.name}`;
    }
}


const programmer1 = new Programmer("Oleg", ["Python", "PHP", "Java"]);


programmer1.code();


console.log(programmer1.toString());
