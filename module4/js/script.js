// var msg = "in global";
// console.log("global message = " + msg);

// var a = function() {
//     var msg = "inside a";
//     console.log("a: msg = " + msg);
//     b();
// }
// function b(){
//     console.log("b: msg = "+ msg);
// }


// a();

// function a() {
//     return; //it will return nothing bcoz of after return keyword there is nothing immediatly.
//     {
//         name: "Jemy"
//     };
// }
// function b() {
//     return {
//         name: "Jemy"
//     };
// }

// console.log(a());
// console.log(b());

// var sum = 0;
// for(var i=0 ;i<10;i++){
//     sum = sum + i;
// }
// console.log("sum of 0 to 9 is:" + sum);

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favcolor = "blue";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("stock price is:" + company[stockPropName]);

// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "stock of company": 110
// };

// console.log(facebook.ceo.firstName);

var names=new Array();
names[0]="Yatri";
names[1]="Jemy";
names[2]="july";
names[3]="parul";
names[4]="frank";
names[5]="larry";
names[6]="pavan";
names[7]="Arav";
names[8]="jekin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}