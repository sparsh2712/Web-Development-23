function addFavouriteBook(bookName){
  if (!bookName.includes('great')){
    favouriteBook.push(bookName);
  }
}
function printFavouriteBooks(){
  console.log(`Favourite Books: ${favouriteBook.length}`);
  for (let books of favouriteBook){
    console.log(books);
  }
}
var favouriteBook = [];

addFavouriteBook("A song of Ice and Fire");
addFavouriteBook("The great gatsby");
addFavouriteBook("crime and punishment");
addFavouriteBook("great expectation");
addFavouriteBook("you dont know JS");

printFavouriteBooks()
//console.log(favouriteBook);


