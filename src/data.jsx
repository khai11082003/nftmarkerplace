fetch("./data.json")
    .then(response => response.json())
    .then(data => 
        handle(data)    
    )
function handle(data) {
    return data;
}
export const init = handle();
console.log(init);