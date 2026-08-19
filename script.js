let currenttask = 0;

function addtask()
{   
    //catching the standared user input
    var newtask = document.getElementById("stdinTasks").value;
    if (newtask === "" )
    {
        return;
    }
    else{
    currenttask += 1;
    //refrence for debugging
    console.log(currenttask+". "+newtask);
    //creating checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-"+currenttask;
    checkbox.name = "taskCheckbox";
    checkbox.value = "option1";
    const taskText = document.createElement("span");

    taskText.textContent = " ● " + newtask + " "

    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
            taskText.style.fontStyle = "italic"
        } else{
            taskText.style.textDecoration = "none";
            taskText.style.fontStyle = "normal"
        }
    });
    //creating div
    const taskdiv = document.createElement("div");
    taskdiv.id = "Div-"+currenttask;
    //creating deleting button
    const delbtn = document.createElement("button");
    delbtn.type = "button";
    delbtn.id = "delbtn-"+currenttask;
    delbtn.name = "delbtn";
    delbtn.textContent = "⌫";
    delbtn.className = "delbtn";
    //assigning fun to del button
    delbtn.onclick = function() {
        //debugging refrence
        console.log("task number: "+currenttask+" deleted")
        taskdiv.remove();
    }
    //appending items to div
    taskdiv.appendChild(checkbox);
    taskdiv.appendChild(taskText);
    taskdiv.appendChild(delbtn);
    document.getElementById("taskdp").appendChild(taskdiv);
    //reseting standared user input
    document.getElementById("stdinTasks").value = "";
    }
}