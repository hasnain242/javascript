// alert('hello world')
// alert('again')
// console.log('hello world')
document.write('hello world')
var nationality = 'pakistani';
alert(nationality)
var age =10+4;
alert(age)
var boolean =true;
alert(boolean)
var undefine = null;
var age = 34;
var name =" hasnain";
console.log(typeof age)
console.log(typeof  name)
var a = 6;var b = 5;var result =a+b;
alert(result)
// legal 
var age=14;
// illegal
// var #age 1=29;
// Comment
// jlksnknxlkndlknlksnkcnsknlk
// XMLDocument;SVGMPathElement;lcmlm
// s'mc/ma/lmc/lml/mlm;m;em;jd;je;pje
//reserved keywords
// var for = 39;
//case sensitive
var rose =23;
// console.log(Rose)//it will give error
//camel case 
var firstName=23;
//arithmetic operators
var a=3;
var b=5;
var c=a+b;
//increment and decrement operator
var a=34;//35//34
var b=43;//42
var c=++a - --b + --a;
console.log(a)

console.log(b)

console.log(c)
//parse int
var a=6;
var b="5";
var c=a+parseInt(b);
console.log(c)
//parsefloat
var a=6;
var b="5.5";
var c=a+parseFloat(b);
console.log(c)
//number
var a=6;
var b="5.5";
var c=a+Number(b);
console.log(c)
//and
alert(true&&false);
var a=5;
var b=6;
var c=a<b&&b<10
console.log(c)
//or
var a=5;

var c=a<10|| a>20
console.log(c)
//not
var a=60;
var b= !(a<50)
alert(b);

var c=80;
var d=!(c>50);
alert(d)
//if-else
var age=50;
if(age>60){
    console.log("in if age"+age)
}else{
    console.log("in else age"+age)
}
//ifelseif
var score=60;
if (score>80){
    console.log('grade a')
}else if(score>70){
    console.log("grade b")
}else{
    console.log("failed")
}
//nested-if
var score=60
if (score>70){
    console.log("grade a")
    if (score<65){
      console.log("failed")
    }
}
//for loop
for(i=0;i<=3;i++){
    console.log(i)
}
for(var i=10;i>0;i--){
    document.write('helo')
}
var num=prompt("enter num");
for(var i=1;i<=10;i++){
    console.log(num+"x"+i+"="+(num*i))
}
//break
for(var i=0;i<5;i++){
    if(i==3){
        continue;
    }
    console.log(i)
}
//arrays
var foods=["pizza",'burger']
alert(foods[0])
var food=[]
foods[0]="burgger"
console.log(foods.length)