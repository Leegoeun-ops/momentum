const toDoForm = document.querySelector(".js-toDo-form"),
    toDoInput = toDoForm.querySelector(".toDo-input"),
    toDolist = document.querySelector(".js-toDo-list");

const TODO_LS = "toDos"; 

function listSubmitHandler(event){
    event.prenentDefalut;
    const toDoValue = toDoInput.value; 
    printTodoList(toDoValue);
    //toDoInput.value="";
}

function DeleteHandler(event){
    //toDoListItem.parent    

}

function saveList(text){//text
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

function loadList(){//지운id를 찾아서 length의 id부터 지우기
    const toDos = localStorage.getItem(TODO_LS);
    
    if(TODO_LS !== null){ 
        const loadcontent = JSON.parse(toDos);
        loadcontent.foreach(function(toDO){
        printTodoList(toDo.text);        
        });
    }
}

function init(){
    loadList();
    toDoForm.addEventListener("submit",listSubmitHandler);
}
    
init();