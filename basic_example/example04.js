let testobj = {
    test : "test"
};

const array = ["test", 14, testobj, 12.23123];
console.log(array);

for(element of array){
    console.log(element);
}

array.map((element) => {
    console.log(element);
});