let btn=document.querySelector(".addBtn");
let inputText= document.querySelector(".inputTask");
let AddSection=document.querySelector(".AllTasks");
let Number=document.querySelector(".number");
let empty=document.querySelector(".EmptyList");
let DONE= document.querySelector(".done");
let countThem=document.querySelector(".countTasks");
let Counter= 0;
btn.addEventListener("click",function(){
    if(inputText.value!=""){
        countThem.style.display="flex";
        DONE.style.display="flex";
        //add the button and the counter lines 
    let newTask=document.createElement("li");
    newTask.className="newTask";
    let CheckBox= document.createElement("input");
    CheckBox.type="checkbox";
    let parag= document.createElement("p");
    parag.className="textTask";
    CheckBox.className="checkTask";
    parag.innerHTML=inputText.value;
    empty.style.display="none";


  
    newTask.appendChild(parag);
    newTask.appendChild(CheckBox);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML="Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.className="deleteTask";
    deleteBtn.addEventListener("click", ()=>{
        Counter--;
        newTask.remove();
        Number.innerHTML=Counter; 
    } )
      



    AddSection.appendChild(newTask);
    inputText.value="";
    Counter++;
    Number.innerHTML=Counter;
}
});
// press enter in keybord to enter the task.
inputText.addEventListener("keypress", (e)=>{
    if(e.key== "Enter"){
      btn.click();
    }
});
// clear all task function
let ClearBtn=document.querySelector(".clearBtn");
let arrayTasks = document.getElementsByClassName("newTask");
ClearBtn.addEventListener("click", (e)=>{
        
    let tasksArray = Array.from(arrayTasks);
    // Iterate over the array and remove each task
    tasksArray.forEach((task) => {
        task.remove();
    });

        Counter=0; 
        Number.innerHTML=Counter;
        empty.style.display="flex";
        

        //to hide the count and hide the clear buttons
        countThem.style.display="none";
        DONE.style.display="none";
        //Because it returns a node list 
        

});


addEventListener("change", (e)=>{
        // e.target= check;
        //Get the parent element in order to use it after that to get the text from the parent and apply the style to it 
        if(e.target.type == "checkbox"){
       let TaskToEliminate = e.target.parentElement;
       let TextToEliminate = TaskToEliminate.querySelector(".textTask");
       //because the e targett is the check box(called the event with it )
       if(e.target.checked){
          Counter--;
          TextToEliminate.style.textDecoration = "line-through";
         
       }
       //if it is not checked then the number of tasks must increment 
       else{
        Counter++;
        TextToEliminate.style.textDecoration = "none";
       }
       Number.innerHTML=Counter;
    }
});


// window.onload() = function(){
//   inputText.focus();
// }