function objectToArray(obj){
    //this method used to retrieve an array of an object’s enumerable property [key, value] pairs
    console.log(Object.entries(obj));
}
objectToArray({
    D: 1,
    B: 2,
    C: 3
  });
  
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  });
