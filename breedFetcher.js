const request = require('request');



const fetchBreedDescription = (breedName, cb) => {
  //send request to the URL
  //breedName[0] is the breed name typed by user
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {

    //parse the sting from the request in to an object
    const data = JSON.parse(body);
    //console.log(data)
    //console.log(typeof data);

    //if the object is an object but empty generate the error
    //this error happen for exampple if the URL is not a valid one
    if ((data.constructor === Object) && (Object.entries(data).length === 0)) {
      error = "Please check your input";
      //here is the call back function intead a return
      cb(error, null);
    } else {
      //if the object is not empty it will be an array of object from which I want to take only the first element
      let Obj = data.shift();
     
      //but if it's empty return message "breed is not found"
      if ((Obj === undefined) || (Obj === null) || (Obj === [])) {
        error = "breed is not found";
        cb(error, null);
        //else return the object itself
      } else {
        //console.log(typeof data);
        //let Obj = data.shift()
        //console.log(Obj.description);
        cb(null, Obj.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
  
 
