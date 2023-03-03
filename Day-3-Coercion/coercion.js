// The Subtraction Operator(-)
console.log(1-"1");

console.log(10 - {"x": 10, valueOf(){return {};}});


console.log(undefined - {"a": "b", toString(){return "1"}});
console.log(20 - {"name": "Jatin", Valueof(){return{}}, toString(){return "123"}});

var obj = {"English": 90, "Maths": 80, valueOf(){return "12";}, toString(){return {}}};
console.log(100 - obj);

let obj2 = {"Social Science": 80, "Science": 95, valueOf(){return {"a":10};}, /*valueOf(){return "123e";**/ /*valueOf(){return 12}**/  toString(){return null;}, toString(){return "12"}};

console.log(obj - obj2);
console.log(undefined - null);
console.log("STR" - null);

// console.log(Symbol("Hello") - "HI!");
let Munjal = 100;
console.log({"fName": "Jatin", toString(){return  Munjal;}} - {"lName": "Munjal", valueOf(){return {"lName": Munjal}}, toString(){return "4875"}});

// The Addition Operator(+)
console.log("1"+ 1 + 1);

console.log("Jatin" + 15);
let object = {"fName": "Jatin", toString(){return " Jatin"}};
console.log("Hello" + object);
console.log(object.toString());
console.log(object.valueOf());

let obj5 = {"sub1": 10, "sub": 20, "sub3": 30, "sub4": 40, valueOf(){return obj5.sub3}};
console.log("10" + obj5);

obj5 = {"sub1": 90, "sub": 100, "sub3": 23, toString(){return obj5.sub1}, valueOf(){return "World!"}};
console.log(obj5.sub1);
console.log(false + obj5);

console.log("Hello");

let student = {Name: "Jatin", Major: "Computer Science", Roll_no: "102", lName: "Munjal", valueOf(){return {};}, toString(){return {"a": 200};}};
console.log(student.toString());
console.log(student.Name);

// console.log(obj5 - student);

// console.log("0xaf" + student);
// console.log("0xfd" + student);

console.log([undefined] - obj5.sub)
console.log("" - obj5.sub1);

let nobj = {"val" : 100, valueOf(){return 20;}};
console.log(10 + nobj);

console.log("Jatin" + [[], [], []]);
console.log(nobj + [1,2,3,[],[]]);

console.log({x:"10"}.toString());
console.log({x:"10"}.valueOf());