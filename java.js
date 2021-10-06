/*let operator='+'
let i=20,j=10

switch(operator){
    case '+' :{
        console.log(i+j)
        break
    }
    case '-' :{
        console.log(j-i)
        break
    }
    default : {
        console.log('athul')
    }
}

let array=["mango","orange","orange"]
if(array[1]==array[2]){
document.write("na")
}
else{
    document.write("oo")
}*/

//loops

/*for(let i=2;i<20;i+=2){
    console.log(i)

}*/

/*for(let i=0;i<=20;i++)
{
    if(i%2==0){
        console.log(i)
        if(i==18){
            break;
        }
    }
    
}
console.log('outside the loop')*/

/*for(let i=0;i<3;i++){
    for(let j=0;j<4;j++){
        if(j==2){
            continue
        }
        console.log(j)
    }
    console.log('ki')
}*/

//while loop

/*let count=0
while(count<5){
    console.log(count)
    count++;

}*/

//do while(exit control loop)
let k=10

/*do{
    console.log('hello world')
    k--;

}while(k>10)*/

 /*let athul =function greetings(msg){
    console.log(`hello ${msg}`)

}
athul()*/

/*function clicks(){
    let value=prompt('enter the name')
    alert('hey' +value)
    
}


function add(){
    //string to number-parseInt ,parsefloat
    let value1=parseFloat(prompt('enter the first number'))
    let value2=parseFloat(prompt('enter the second number'))
    alert(value1+value2)
    
}

function sub(a,b){
    let sum=a+b
    return sum;
}

let result=add(1,3)
console.log(result)*/

/*/*function average(a,b,c=3){
    let ave=(a+b+c)/3
    return ave;
}

let final=average(1,4,7)
console.log(final)


function percentage(a,b){
    let percent=(a*100)/b
    return percent
}

let fine=percentage(23,100)
console.log(fine)



let names='athul'
//console.log(names[2])*/

//LET IS A BLOCK SCOPED BUT VAR IS NOT

//hoisting-let variables does not hoist but var variables hoist to top of the page

//let greetings=function() -anonymous function

/*function getname(){
    let myname=document.getElementById('name').value
     alert(myname)
}

function plus(){
    let ans1=parseFloat(document.getElementById('name1').value)
    let ans2=parseFloat(document.getElementById('name2').value)
    let sum=ans1+ans2
    document.getElementById('result').value=sum

}

function changestyle(){
    document.getElementById('mypara').style.color='green'
    document.getElementById('mypara').style.fontSize='30px'
}

function leave(){
    document.getElementById('mypara').style.textAlign='center'
    document.getElementById('mypara').style.fontFamily='Courier New', Courier, monospace
    document.getElementById('mypara').style.fontSize='50px'
    
}*/

//arrow function

var demo=()=>{
    console.log('hi')
}

demo()










