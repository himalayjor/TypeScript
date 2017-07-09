/**
 * Created by himalayj on 7/8/17.
 */

function resolveAfter2Sec(x) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(x), 2000);
    });
}

async function add(x) {
    return x + await resolveAfter2Sec(10) + await resolveAfter2Sec(20);
}

add(10).then(value => console.log(value));

async function rejectAsync() {
    try {
        return await Promise.reject(20);
    }catch (err) {
        console.log(err);
    }

}

rejectAsync();
