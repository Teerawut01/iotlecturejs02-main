// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = "Hello World" 


// number
let bb = 10 //integer
let cc = 10.5 //float


// boolean (ตรรกะ)
let dd = true
let ee = false

// array
//value ของ array มี index number กำกับและเริ่มที่ 0 ,1,2 .....
//อยากได้ value ของ array ใช้ index number
let gg=[1,2,3,4,5]
let hh=["apple","banana","orange"]
let ii=[1,"apple",true,{data1:"hi...",data2:"data"}]
console.log(gg)
console.log(gg[0])
console.log(hh[2])
console.log(ii[3])
console.log(ii[3].data2)






// object
let ff = {
    // key: value
    name: "John",
    age: 30,
    geender: "male",
    studentstatus: true,
    address: {
        province: "Bangkok",
        city: "Bangkok"
    },
    food: ["apple", "banana", "orange"],
}
console.log(ff)
console.log(ff.name)
console.log(ff.address.city)
console.log(ff.food)
console.log(ff.food[1])




// undefined ข้อมูล
let jj
console.log(jj)  //undefined ไม่มีข้อมูล ไม่error


// null ข้อมูล
let kk = null
console.log(kk)  //null ไม่มีข้อมูล ค่าเป็น null ไม่error


// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof ff)
console.log(typeof ee)