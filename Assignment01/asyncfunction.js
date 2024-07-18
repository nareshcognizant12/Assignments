let url = 'https://reqres.in/api/users?page=2';
function fetchData(url, callback) {
    const error = Math.random() > 0.5;
    setTimeout(() => {
        if (error) {
            data('error', url);
 
        } else {
            data('success', url);
        }
 
    }, 2000)
 
}
function data(message, url) {
    if (message === 'error') {
        console.log(`error occured  : ${message} and ${url}`);
    }
    else {
        console.log(`response is successfull : ${message} and ${url}`);
    }
 
}
fetchData(url, data);










