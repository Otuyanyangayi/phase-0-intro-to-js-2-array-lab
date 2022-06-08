// Write your solution here!
const cats = ["Milo", "Otis", "Garfield" ];
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;  
}
function appendCat(name){
    const newArray5 = [...cats, name]
    return newArray5;
}

function prependCat(name){
    const newArray2 = [name,...cats ]
    return newArray2;
}
function removeLastCat(){
    const newArray3 = cats.slice(0,cats.length-1)
    return newArray3;
}
function removeFirstCat(){
    const newArray4 = cats.slice(1);
    return newArray4;
}

