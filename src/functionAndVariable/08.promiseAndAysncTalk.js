
/*
    Promise 本身是一個建構函式，函式也是屬於物件的一種，因此可以附加其它屬性方法在上，
    透過 console 的結果可以看到 Promise 可以直接使用 all、race、resolve、reject 的方法，
    寫法如下（後面再介紹運用方式）：

    Promise.all
    Promise.race
    Promise.resolve
    Promise.reject
*/

const doSomethingAsync = (num) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`I did something ${num}`), 1000)
    })
}

let a = doSomethingAsync(1)
    .then(success => {
        console.log(success);
        return doSomethingAsync(2);
    })
    .then(success => {
        console.log(success);
        return doSomethingAsync(0); // 這個階段會進入 catch
    })
    .catch(fail => {
        console.log(fail);
    })

a.then(success => {
    console.log(success);
})


/*
    async function(ES2017 Async and Await)

*/

/*
const normalFunc = () => {
    let a = doSomethingAsync(1)
    let b = doSomethingAsync(2)
    let c = doSomethingAsync(3)
    console.log(a)
    console.log(b)
    console.log(c)
}

normalFunc()

const asyncFunc = async () => {
    let a = await doSomethingAsync(1)
    let b = await doSomethingAsync(2)
    let c = await doSomethingAsync(3)
    console.log(a)
    console.log(b)
    console.log(c)
}

asyncFunc()
*/