//match function-array of matching values
//test function
//regular expression

//replace function
/*function changecontent(){
    let s=document.getElementById('p1').innerText
    let regex=/python/g
    let snew=s.replace(regex,'java')
    document.getElementById('p1').innerText=snew
}*/

/*function change(){
let word=document.getElementById('word').value
let regex=new RegExp(word,'g')
let v=document.getElementById('content').value
let g=v.replace(regex,`<span style="background-color:yellow">${word}</span`)
document.getElementById('para1').innerHTML=g


}*/

function validate()
{
    let empty=document.getElementById('uname')
    if(empty.value===""){
        alert('enter the username')
        uname.focus()
        return false
        
    }
    let num=document.getElementById('mobile')
    if(isNaN(num.value) || num.value.length!=10){
        alert('yooo')
        mobile.focus()
        return false
    }

    let regex=/\+91\s\d{10}/
    if(!(regex.test(num.value))){
        alert('plz input a valid mobile number')
        mobile.focus()
        return false
    }


    
}

//object or instance
/*let obj={

}

console.log(obj,typeof obj)

let student={
    name:'athul',
    place:'calicut',
    roll_no:12,
    marks:[50,34,56],
    sum:function(){
       let result= this.marks.reduce((x,y)=>{
            return x+y
        })
        console.log(result)

    }
}
console.log(student)
console.log(student.name)
student.sum()
student.batch='b1'
console.log(student)*/

let employee={empid:101,name:'raj',salary:10000,incsalary:function(amount){
    this.salary+=amount
    console.log(`total salary=${this.salary}`)

}}

employee.incsalary(2000)
let array=[]
function product(){
    let obj={
        productid:document.getElementById('pid').value,
        product_name:document.getElementById('name').value,
        product_price:document.getElementById('price').value
    }

    array.push(obj)
    document.getElementById('pid').value=''
    document.getElementById('name').value=''
    document.getElementById('price').value=''
    let s=JSON.stringify(obj)
console.log(s,typeof s)
let p=JSON.parse(s)
console.log(p,typeof p)
    
}
console.log(array)

function print(){
    let content=''
    for(let x of array){
        content+=`<h4>${x.product_name},${x.product_price}</h4>`
        

    }
    document.getElementById('plist').innerHTML=content

}




    


