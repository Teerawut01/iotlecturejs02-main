// type conversion การแปลงชนิดข้อมูล
// คือ การเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง
//------------------------------
// string conversion
let aa="10"
let bb="20.555555"
console.log(aa+bb) //มาต่อกัน
console.log(Number(aa)+Number(bb))  //เปลี่ยนเป็น number บวกกันได้
console.log(parseInt(aa)+parseFloat(bb)) //เปลี่ยนเป็น number บวกกันได้
console.log(Boolean(aa))


// number conversion
let cc=44.66666
console.log(String(cc))  //แปลงเป็น string
console.log((String(cc))+999)  //มาต่อกัน
console.log(cc.toString())
console.log(cc.toFixed(2))
console.log(cc.toFixed(4))
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(cc))


// boolean conversion
let dd=true
let ee=false
console.log(String(dd))
console.log(String(ee))
console.log(dd.toString())
console.log(ee.toString())
console.log(Number(dd))
console.log(Number(ee))


let gg = [10,20,30,40,50]
console.log(Boolean(gg))
let hh = {data1:"hello",data2:"world"}
console.log(Boolean(hh))
let ii=[]
let jj={}
let kk
let ll=null
let mm=undefined
let nn="Hello World"/200

console.log(Boolean(ii))
console.log(Boolean(jj))
console.log(Boolean(kk))
console.log(Boolean(ll))
console.log(Boolean(mm))
console.log(Boolean(nn))
console.log(nn)

