const reverse = string => string.split('').reverse().join('');
const string = 'foo';
function receivesAFunction(callback) {
    return callback(string);
}

function returnsANamedFunction() {
    const funk = function () {
        console.log('We want the funk!');
    }
    return funk;
}

function returnsAnAnonymousFunction() {
    return () => console.log('I\'m an anonymous function!')
}