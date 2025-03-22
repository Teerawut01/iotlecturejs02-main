// funtion Ep.4
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function expression การประกาศฟังก์ชันโดยใช้ตัวแปร
//การประกาศตัวแปรใช้  var let และ const(ไม่สามารถเปลี่ยนค่าได้)
// 1. anonymous function ฟังก์ชันที่ไม่มีชื่อ

let aa = function(){
    console.log('Hello')
}

let bb = function(x,y){
    console.log(x+y)
}

aa()

bb(10,20)
bb(100,200)

aa = 99
console.log(aa)

// bb = 55   จะError