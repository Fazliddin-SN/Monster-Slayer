function names(users){
    let newUsers =[];
    for(const user of users){
        newUsers.push(user.name)
    }
    console.log(newUsers);
}
let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
  ]
  names(users)
