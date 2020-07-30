const { fetchBreedDescription } = require('./breedFetcher');

//take the arguments from the command line without the first two words, and put them into an array 9each word an element)
let breedName = process.argv[2];
//console.log(breedName[0]);



//cal the req function and pass the function itself as call back
fetchBreedDescription(breedName,(error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    return; // exiting the function
  }
  console.log(desc);
});