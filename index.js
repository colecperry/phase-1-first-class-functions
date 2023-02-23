function receivesAFunction (cb) {
    console.log (cb());
}

function returnsANamedFunction () {
    return function name (){
};
}

function returnsAnAnonymousFunction () {
    return function (){}
};
