function addtodo(){
    var input = document.getElementById("inputfield");
// console.log(input.value);

var liElement = document.createElement("li");
var liText = document.createTextNode(input.value);
liElement.appendChild(liText);

// ***********************delete btn***********************************
var Deletebtn = document.createElement("button");
var DeleteText = document.createTextNode("delete");
Deletebtn.appendChild(DeleteText);
liElement.appendChild(Deletebtn);
Deletebtn.setAttribute("onclick","delet(this)");
// ***********************edit btn***********************************
var editbtn = document.createElement("button");
var editbtnText = document.createTextNode("Edit");
editbtn.appendChild(editbtnText);
liElement.appendChild(editbtn);
editbtn.setAttribute("onclick","edit(this)");

var list = document.getElementById("list");
list.appendChild(liElement);
console.log(liElement);

input.value = "";
}
function deletAll(){
    var list = document.getElementById("list");
    list.innerHTML = "";
}
function delet(a){
    a.parentNode.remove();
}
function edit(a){
    var input = prompt("enter updated value");
    a.parentNode.firstChild.nodeValue = input;
    console.log(a);
}