// alert("Hello World");
// console.log("Hello World");
// document.write("Hello World")

// var a = 5;
// var b = 10;
// var c = a+b;
// alert(c);

// var a = "5";
// var b = 10;
// var c = a+b;
// alert(c);

// var a = "5";
// var b = 10;
// var c = a*b;
// alert(c);

// var a = 5;
// var b = a++;
// alert(b);

// var a = 5;
// var b = a++ + --a - a + ++a + --a + a++ + a - ++a;
// alert(b);

// var a = parseInt(prompt("Enter Value","Your value is"));
// var b = 10;
// var c = a+b;
// alert(c)

// var x = "10";
// if(x === 10){
//     alert("Yes")
// }
// else if(x > 10){
//     alert("No");
// }
// else{
//     alert("Pata nahi");
// }

// var perc = +prompt("Enter your percentage");
// if(perc >= 80 && perc<100){
//     alert("A+");
// }
// else if(perc >= 70 && perc < 80){
//     alert("A");
// }
// else if(perc >= 60 && perc < 70){
//     alert("B");
// }
// else if(perc >= 50 && perc < 60){
//     alert("C");
// }
// else if(perc < 0 || perc > 100){
//     alert("Invalid Percent");
// }
// else{
//     alert("Fail")
// }

//Array

// var a = ["ali",1,true,2.50];
// var b = new Array("")

// var a = 5;
// var b = typeof(a);
// alert(b);

// var arr = ["lion","cat","dog","wolf"];
// undefined
// arr
// (4) ['lion', 'cat', 'dog', 'wolf']0: "lion"1: "cat"2: "dog"3: "wolf"length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
// typeof(null)
// 'object'
// null
// null
// arr.push("tiger")
// 5
// arr
// (5) ['lion', 'cat', 'dog', 'wolf', 'tiger']
// arr.pop();
// 'tiger'
// arr
// (4) ['lion', 'cat', 'dog', 'wolf']
// arr.unshift("tiger")
// 5
// arr
// (5) ['tiger', 'lion', 'cat', 'dog', 'wolf']
// arr.shift();
// 'tiger'
// arr.splice(2,1,"bear","parrot")
// ['dog']
// arr
// (5) ['lion', 'cat', 'bear', 'parrot', 'wolf']
// var arr1 = arr.slice(1,4);

// undefined
// arr1

// (3) ['cat', 'bear', 'parrot']
// var arr2 = arr.slice(2);

// undefined
// arr2
// (3) ['bear', 'parrot', 'wolf']

// var aliMughal

// a++;
// a=a+1;
// a=+1
// var b = 5;
// var b = 10;
// alert(b);
//Loop

// Forloop
// While Loop
// Dowhile Loop
// var a;
// for(a=1;a<10;a++){
//     console.log(a)
// }
// var a = prompt("Enter your city");
// var city = ["Karachi","Lahore","Multan","Islamabad"]
// for(var i = 0; i < city.length; i++){
//     if(a.toUpperCase() === city[i].toUpperCase()){
//         document.write("It is a cleanest city")
//     }
//     else{
//         document.write("It is dirty");
//     }
//     break;
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }
// }

// var a = 5.4586245
// var b = Math.round(a)
// alert(b);

// var a = 55;
// var b = a.toString();
// var c = b;
// var d = typeof(c);
// alert(d);


// function greet(a){
//     alert(a);
// }

// greet("Hello");

// function add(a,b){
//     alert(a+b);
// }
// add(2,5)

// function add(a,b){
//     var c = a+b
//     return c;
// }
// var x = add(5,10);
// alert(x);



// var b = 15;
// function check(){
//     var a = 7;;
//     alert(b);
//     alert(a);
// }
// check();
// alert(a);
// alert(b);

// Final