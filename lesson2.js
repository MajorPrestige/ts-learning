var age = 50;
var username = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
var anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person = ['Max', 21];
person = ['ssd', 21];
var Page;
(function (Page) {
    Page[Page["Loading"] = 0] = "Loading";
    Page[Page["Ready"] = 1] = "Ready";
})(Page || (Page = {}));
var union;
var literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date,
        updateAt: new Date()
    }
};
console.log(page1);
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
