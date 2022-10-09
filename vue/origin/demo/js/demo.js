let fun1 = function () {
    let num = 10;
    return new Promise(resolve => {
        setTimeout(() => {
            num += 10
            resolve(num)
        }, 1000)
    })
}
let fun2 = async function () {
    let num = await fun1();
    console.log(num)
}
fun2()
// let tem = fun2()
// console.log(tem)