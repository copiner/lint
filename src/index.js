function addOne(i) {
    //isNaN(i) false
    
    if (!isNaN(i)) {
        return i++;
    }
    return 0;
    
}

function addTwo(i){
    return i;
}
var one = addOne(3);
var two = addTwo(9);
console.log(one);
console.log(two);
