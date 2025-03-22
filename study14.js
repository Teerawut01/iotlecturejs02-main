// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter
function work05(x,y=55,z=99,){   //จะให้ default ต้องเรื่มมีตั้งแต่ท้าย
    console.log(x+y+z)
}

work05(10,20,30)
work05(10)


// function for return mulitple value
// return array value
function work06(){
    return [10,'Hello',true,555]
}
console.log('---------------------------------')
let data1=work06()
console.log(data1[0])
console.log(data1[1])
console.log(data1[2])
console.log(data1[3])
console.log('---------------------------------')

let [a,b,c,d]=work06()
console.log(a)
console.log(b)
console.log(c)
console.log(d)


// return object value
function work07(){
    return {
        aa:'Somsak',
        age:30,
        city:'Bangkok'
    }
}
console.log('---------------------------------')
let data2=work07()
console.log(data2.aa)
console.log(data2.age)
console.log(data2.city)
console.log('---------------------------------')



// use destruction to get value from object and array

let{aa,age,city}=work07()
console.log(aa)
console.log(age)
console.log(city)