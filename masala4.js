function afterNYears(obj, n){
    // retrieve an array of the enumerable property names of an object. It returns an array containing the keys of the object.
    for(const user of Object.keys(obj)){
        // used to access values by keys
        obj[user]+= n
    }
    console.log(obj);
     
}
afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }, 1);

  afterNYears({
    "Baby" : 2,
    "Child" : 8,
    "Teenager" : 15,
    "Adult" : 25,
    "Elderly" : 71
  }, 19);
  afterNYears({
    "Genie" : 1000,
    "Joe" : 40
  }, 5)
