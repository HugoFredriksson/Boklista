//let myJson = '{"author": "Gud", "title","Bibeln":}';
//let myObject = JSON.parse(myJson); 
let books;
let title; 
//let author1;
//let title2; 

let Books={book:[
    {"author":"Gud", "title":"Bibel"},
    {"author":"Allah", "title":"Koran"}
]}

function init(){
    books = document.getElementById("books");
    for(element of Books.book){
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


/*title = document.getElementById("title")

author1 = document.getElementById("author1");
title1 = document.getElementById("title1");

author.innerHTML = book.book[0].author;
title.innerHTML = books.book[0].title,

author1.innerHTML = book.book[1].author1;
title1.innerHTML = books.book[1].title1,

console.log(author);*/