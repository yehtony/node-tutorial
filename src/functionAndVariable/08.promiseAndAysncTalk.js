
/*
    Promise 本身是一個建構函式，函式也是屬於物件的一種，因此可以附加其它屬性方法在上，
    透過 console 的結果可以看到 Promise 可以直接使用 all、race、resolve、reject 的方法，
    寫法如下（後面再介紹運用方式）：

    Promise.all
    Promise.race
    Promise.resolve
    Promise.reject
*/

const doSomethingAsync = (num, t) => {
    let time = t ?? 1000
    return new Promise(resolve => {
        setTimeout(() => resolve(`I did something ${num}`), time)
    })
}
/*
let something = doSomethingAsync(1)
    .then(success => {
        console.log(success);
        return doSomethingAsync(2);
    })
    .then(success => {
        console.log(success);
        return doSomethingAsync(3);
    })
    .catch(fail => {
        console.log(fail);
    })

something.then(success => {
    console.log(success);
})
*/

/*
    async function(ES2017 Async and Await)

*/


const normalFunc = () => {
    let a = doSomethingAsync(1)
    console.log(a)
    let b = doSomethingAsync(2)
    console.log(b)
    let c = doSomethingAsync(3)
    console.log(c)
}

//normalFunc()


const asyncSequentialFunc = async () => {
    console.log('==SEQUENTIAL START==')
    let a = await doSomethingAsync(1)
    console.log(a)
    let b = await doSomethingAsync(2)
    console.log(b)
    let c = await doSomethingAsync(3)
    console.log(c)
}

//await asyncSequentialFunc()

const asyncConcurrentFunc = async () => {
    console.log('==CONCURRENT START with await==');
    let a = doSomethingAsync(1, 10000)
    let b = doSomethingAsync(2, 5000)
    console.log(await b)
    console.log(await a)
}
//await asyncConcurrentFunc()

function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==')
    return Promise.all([doSomethingAsync(1, 5000), doSomethingAsync(2, 3000)]).then((messages) => {
        console.log(messages[0]) // slow
        console.log(messages[1]) // fast
    })
}

//await concurrentPromise()

async function parallel() {
    console.log('==PARALLEL with await Promise.all==')

    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await doSomethingAsync(1)))(),
        (async () => console.log(await doSomethingAsync(2)))()
    ])
}

//await parallel()