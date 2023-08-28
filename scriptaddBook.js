let form;

function init(){
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        addBook();
        event.preventDefault();
    })
}
window.onload = init;

async function addBook(){
    let author = form.elements.author.value;
    let title = form.elements.title.value;

    json = {
        "author" : author, 
        "title" : title
        
    };


    let status = await postBookFetch(json);
    console.log(status);
    console.log(json);
}

async function postBookFetch(json) {
    let path = "https://localhost:7243/Book";
    const response = await fetch(path,{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(json)
    });
    return response.status; 
    console.log(response.status);
}
    
