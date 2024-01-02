export function getData(url,method){
    var data = fetch(url, method)
    .then(response => response.json())
    .then(result => {
        return result;
    })
    .catch(error => error);
    return data
}

