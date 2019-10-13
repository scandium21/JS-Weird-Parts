var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);
// ----------------------------------------

console.log(3<2<1);
console.log(false<1);
console.log(0<1);
console.log(true);

//--------------------------------------
Boolean(undefined);
Boolean(null);
Boolean("");

var aa;

// goes to internet and looks for a value
if (aa || aa === 0) {
    console.log('Something is there');
}

// ----------------------------------

function greet(name) {
    console.log(name);
    console.log('Hello ' + name);
}

greet();
