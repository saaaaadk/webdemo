let getData = new Promise(resolve => {
    setTimeout(() => {
        let data = 'shanxi'
        resolve(data)
    })
}).then(res => {
    console.log('first  ' + res)
    return new Promise(resolve => {
        setTimeout(() => {
            let data2 = 'jizhou'
            resolve(res + data2)
        })
    })
}).then(res => {
    console.log(res)
    return new Promise(resolve2 => {
        let data3 = 'gao'
        resolve2(res+data3)
    })
})
getData.then(data=>{
    console.log(data)
})
