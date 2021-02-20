if (!("a" in window)) {
    var a = 1;             // ?
}
alert(a);


var b = function a(x) {
    x && a(--x);            // a is not defined
};
alert(a);


function a(x) {
    return x * 2;
}                           // x is not defined
var a;
alert(a);


function b(x, y, a) {
    arguments[2] = 10;     // 10 => arguments[2] = a. a is called within the function, b isn't called.
    alert(a);
}
b(1, 2, 3);


function a() {
    alert(this);           // "this" is referring to window
}
a.call(null);