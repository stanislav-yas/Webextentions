let foo = (function(){
    let obj = {greeting1: "hello", greeting2: "bye"};
    return {
        display: function(){
            console.log(obj.greeting1);
        },
        out: function () {
            console.log(obj.greeting2);
        }
    }
})();

function getFactorial(n){
    if (n === 1 || n === 0){
        return 1;
    }
    else{

        return n * getFactorial(n - 1);
    }
}

function getFibonachi(n)
{
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}

function change(user){
    // полная переустановка объекта
    user.name = 'Tom';
}

var bob ={
    name: "Bob"
};
console.log("before change:", bob.name);    // Bob
change(bob);
console.log("after change:", bob.name);     // Bob