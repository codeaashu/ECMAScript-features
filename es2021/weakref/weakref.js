const myObject = new WeakRef({
    name: 'aashuu',
    age: 34
});
console.log(myObject.deref()); // output: {name: "aashuu", age: 34}
console.log(myObject.deref().name); // output: aashuu