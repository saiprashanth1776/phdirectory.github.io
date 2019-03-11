var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var input1 = document.getElementById("userinput1");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByTagName("i");
var clearButton = document.getElementById("clear");
var body = document.getElementById("body");
var css = document.querySelector("h3");

var sec = document.getElementById("sec");
sec.style.display="none";

var ip1 = document.querySelector(".aa");
var ip2 = document.querySelector(".bb");

function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        var createDiv = document.getElementsByClassName("div");
        console.log(createDiv);
        createDeleteButton.classList.add("fa", "fa-trash");
        createDiv[ind].appendChild(createDeleteButton);
    }
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("i");
    for (var ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.parentNode.remove();
    }
}

function inputLength() {
    return input.value.length;
}

// function input1Length() {
//     return input1.value.length;
// }

function createListElement() {

    body.style.background = ip1.value + " " + ip2.value;
    console.log(body.style.background);
    css.textContent = body.style.background;

    var divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");

    var ulist = document.createElement("ul");

    var list = document.createElement("li");
    var list1 = document.createElement("li");
    var createDiv = document.createElement("div");

    var name = document.createTextNode(input.value);
    var ph = document.createTextNode(input1.value);

    list.appendChild(name);
    list1.appendChild(ph);

    ulist.appendChild(list);
    ulist.appendChild(list1);

    divClassWrapper.appendChild(ulist);
    divClassWrapper.appendChild(createDiv);
    ul.appendChild(divClassWrapper);

    input.value = "";
    input1.value = "";
    createDiv.classList.add("div");
    var createDeleteButton = document.createElement("i");
    createDeleteButton.classList.add("fa", "fa-trash");
    createDiv.appendChild(createDeleteButton);
    deleteParentNodeOnClick();
}

function addListAfterClick() {
    if ((inputLength() > 0)) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if ((inputLength() > 0) && event.keyCode === 13) {
        createListElement();
    }
}

function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();

function press(){
    sec.style.display="block";
}