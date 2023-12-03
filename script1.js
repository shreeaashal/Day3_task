let obj1 = {"name":"Person 1",
             "age":"5"};
let obj2 = {"age":"5",
            "name":"Person 1"};
if (obj1.name===obj2.name && obj1.age===obj2.age){
    console.log("The given two JSON have same properties in different order");
}
else{
    console.log("The given two JSON doesn't have same properties in different order")
}
