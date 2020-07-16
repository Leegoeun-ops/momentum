const toDoForm = document.querySelector(".js-toDo-form"),
    toDoInput = toDoForm.querySelector(".toDo-input"),
    toDolist = document.querySelector(".js-toDo-list");

const TODO_LS = "toDoList"; 

function listSubmitHandler(event){
    event.prenentDefalut;
    const toDoValue = toDoInput.value; 
    printTodoList(toDoValue);
    toDoInput.value="";

}

function onclickDelete(event){
    

}

function saveList(currentTodoValue){//text
    localStorage.setItem(TODO_LS,JSON.stringify(currentTodoValue));
}

function printTodoList(text){
    const toDoListItem = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    toDolist.appendChild(toDoListItem);
    toDoListItem.appendChild(button);
    toDoListItem.appendChild(span);
    button.innerText("❌");
    span.innerText(text);
    button.addEventListener("click",onclickDelete);
    const pushArray = [];
    const listObj = {
        text:text,
        id:toDolist.length + 1
    };
    //console로 id출력해보기
    currentTodoValue= pushArray.push(listObj);
    saveList(currentTodoValue);
    
}
const TODO_LS = "content";

function loadList(){//지운id를 찾아서 length의 id부터 지우기
    content = localStorage.getItem(TODO_LS);
    toDoForm.addEventListener("submit",listSubmitHandler);
    if(TODO_LS !== null){
        printTodoList(content)
    }
}

function init(){
    loadList();
}
    
init();