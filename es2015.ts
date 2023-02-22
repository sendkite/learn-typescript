// promise
function job1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("job1 ok!");
        }, 2000);
    });
}
function job2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("job2 ok!");
        }, 2000);
    });
}
/*
01. nested 방식 Promise
 */
// job1().then((data) => {
//     console.log('data1', data);
//     job2().then((data) => {
//         console.log('data2', data);
//     });
// })

/*
02 chain 방식 Promise
*/
job1()
    .then((data) => {
        console.log('data1', data);
        return job2();
    })
    .then((data) => {
        console.log('data2', data);
    })

/*
03 Promise.all (다 끝내고 후속 작업)과 Promise.race (같은 작업 경쟁시켜서 빨리 끝나는 녀석 후속작업)
*/
