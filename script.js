//let myJson = '{"author": "Gud", "title","Bibeln":}';
//let myObject = JSON.parse(myJson); 
//let books;
let title; 
//let author1;
//let title2; 
//
//let Books={book:[
  //  {"author":"Gud", "title":"Bibel"},
   // {"author":"Allah", "title":"Koran"}
//]}

async function init(){
    books = document.getElementById("books");
    let Books =  await getBooksFetch();
    console.log(Books);
    for(element of Books){
        console.log(element);
        createTableRow(element);
    }
}
window.onload = init;

function createTableRow(el){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = el.author;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = el.title;
    tr.appendChild(td);    

    books.appendChild(tr)
    console.log(tr);
}

async function getBooksFetch(){
    const patch = "https://localhost:7243/Book";

    let response = await fetch(patch);
    console.log(response)

    let json = response.json();
    return json;
}


/*title = document.getElementById("title")

author1 = document.getElementById("author1");
title1 = document.getElementById("title1");

author.innerHTML = book.book[0].author;
title.innerHTML = books.book[0].title,

author1.innerHTML = book.book[1].author1;
title1.innerHTML = books.book[1].title1,

console.log(author);*/