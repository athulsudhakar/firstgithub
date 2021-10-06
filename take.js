
//function closure-example:nested functions

//returning function

/*function one(){
    console.log('goo')
    return function(){
        console.log('hoo')

    }
}

let f=one()
console.log(f())*/

//callback function

/*function change(){
   // document.getElementById('par1').innerText='hgxddararsd'
   document.getElementById('par1').innerHTML='<span style=''>jan</span>'
    document.getElementById('par2').style.display='none'
}*/

//defining by function
//let a=number(12)
//let b=String('athul')
//toString

/*let str=new String('hello')
console.log(str)
console.log(typeof str)

let num=new Number(23)
console.log(num,typeof num)*/

/*let star=new String('hello world')
console.log(star.valueOf())
console.log(star.substr(1,4))
console.log(star.substring(1,4))
console.log(star.indexOf('l'))
console.log(star.lastIndexOf('l'))
console.log(star.indexOf('o',5))
console.log(star.startsWith('h'))

let data='hi how, are you'
console.log(data.split(' '))
console.log(data.split(','))*/

//javascript array is dynamic

/*let fruits=new Array('apple','orange','grapes') //function constructor
console.log(fruits) 
console.log(typeof fruits)
console.log(fruits[2])
fruits[2]='carrot'
console.log(fruits) //array is muttable
for(let name of fruits){
    console.log(name)
} //for each loop

for(let index in fruits){
    console.log(index)
    console.log(fruits[index])
}*/

//functions of array

/*let cars=new Array('maruthi','benz','audi','hyundai'
)

console.log(cars.push('tata'))
console.log(cars)
cars.pop()
console.log(cars)
console.log(cars.unshift('ferrari'),cars)
cars.splice(2,1)
console.log(cars)*/

/*let names=new Array('rini','athul','amal','rahul','kishan')

console.log(names.indexOf('rini'))
console.log(names.slice(3))
console.log(names.slice(1,4))

names.forEach((name)=>{
    console.log(name)
})*/

/*let num=new Array(2,3,4,5,6,7)

let sq=num.map(x=>{
    return x**2
})
console.log(sq)

let even=num.filter(x=>{
    if(x%2==0){
        return x
    }
})

console.log(even)*/

//reduce-here returns a single value

let num=new Array(11,23,23,12,6)

let sum=num.reduce((x,y)=>{
    return x+y
})

console.log(sum)

//reduceright

let product_list=[]

function addproduct(item){
    product_list.push(item)
    return product_list
}
console.log(product_list)

function removeproduct(item2){
    let index1=product_list.indexOf(item2)
   product_list.splice(index1,1)
}
console.log(product_list)

addproduct('pen')
addproduct('book')
addproduct('cat')

function update(names,newname){
    let go=product_list.indexOf(names)
    product_list.splice(go,1,newname)
    return product_list

}
update('book','room')
console.log(product_list)
let arr=[]

function get(){
    
    arr.push(document.getElementById('data1').value)
    return arr
}
console.log(arr)

function create(){
   let para= document.createElement('p')
   para.innerText='this is a dynamically added paragraph'
   para.id='hi'
   document.getElementById('mydiv').appendChild(para)
}
























