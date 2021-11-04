eruda.init();

let data = {
    color: "blue"
}
          
let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': "application/json"
    }
}
fetch("/api", options);