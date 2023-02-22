"use strict";
// promise
function job1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved ok!");
        }, 2000);
    });
}
job1().then((data) => {
    console.log('data', data);
});
