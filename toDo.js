const toDoForm = document.querySelector(".js-toDo-form"),

    toDoInput = document.querySelector(".js-toDo-input"),

    toDolist = document.querySelector(".js-toDo-list");

    const pushArray = [];

function listSubmitHandler(event){
    event.preventDefault();
    const toDoValue = toDoInput.value; 
    console.log(toDoValue);
    printTodoList(toDoValue);
    toDoInput.value="";


}



function onclickDelete(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDolist.removeChild(li);
    const replace = pushArray.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    pushArray = replace;
    saveList();
}



function saveList(pushArray){//text
    localStorage.setItem(TODO_LS,JSON.stringify(pushArray));
}



function printTodoList(text){

    const toDoListItem = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    span.innerText =text;
    button.innerText ="❌";
    toDolist.appendChild(toDoListItem);
    toDoListItem.appendChild(button);
    toDoListItem.appendChild(span);
    button.addEventListener("click",onclickDelete);
    const num = pushArray.length + 1;
    let listObj = {
        text:text,

        id:num

    };

    //console로 id출력해보기

    currentTodoValue= pushArray.push(listObj);
    saveList(pushArray);

    

}

const TODO_LS = "content";



function loadList(){

    const content = localStorage.getItem(TODO_LS);

    toDoForm.addEventListener("submit",listSubmitHandler);

    if(TODO_LS !== null){
        const parsedToDos = JSON.parse(content);
        parsedToDos.forEach(function(toDo) {
            printTodoList(toDo.text);
        });
    }; 
}



function init(){

    loadList();

}

    

init();