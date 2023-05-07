class Bookshelf{
  constructor(favouriteBooks=[]){
    this.favouriteBooks = favouriteBooks
  }
  addFavouriteBook(bookName){
    if (!bookName.includes('great')){
      this.favouriteBooks.push(bookName);
    }
  }
  printFavouriteBooks(){
    var num_of_books = String(this.favouriteBooks.length);
    console.log("favourite Books: " + num_of_books);
    for (let books of this.favouriteBooks){
      console.log(books);
    }
  }
}
function fakeAjax(url,cb){
  setTimeout(function fakeLoadingDelay(){
    cb([
      "A song of ice and fire",
      "the great gatsby",
      "crime and punishment",
      "great expectations",
      "you dont know js"
    ]);
  },500);
}
//in the fakeAjax function we give two inputs a url and a callback function setTimeout creates a delay of 0.5sec i.e. 500ms before the function fakeLoadingDelay is called which inturn calls the call back function with the array given as an argument 
var BOOK_API = "https://some.url/api";
function loadBooks(theBookshelf){
  fakeAjax(BOOK_API, function onBooks(booknames){
      for (let bookname of booknames) {
        theBookshelf.addFavouriteBook(bookname);
      }
      theBookshelf.printFavouriteBooks();
  });
}
// when the loadBooks function is called we give an object called the bookshelf as argument as the function starts executing it calls the fakeAjax function and we give a dummy url and a function to be used as callback function with the argument booknames,when this line of code is executed there is a delay of 0.5s and then the function onBooks is given the array stated in fake ajax function as argument and then the function onBooks start executing in which it loops through the array adding book to the object theBookshelf ending with printing favourite books 

var newBookshelf = new Bookshelf([]);
loadBooks(newBookshelf)



/*newBookshelf.addFavouriteBook("A song of Ice and Fire");
newBookshelf.addFavouriteBook("The great gatsby");
newBookshelf.addFavouriteBook("crime and punishment");
newBookshelf.addFavouriteBook("great expectation");
newBookshelf.addFavouriteBook("you dont know JS");*/


//console.log(favouriteBook);


