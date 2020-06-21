
function taskdone() {
   var taskList = document.getElementsByClassName("task_list")[0].children[0];
   var tasks = taskList.children;
   for(var i =0; i < tasks.length; i++)
   {
  if(tasks[i].children[0].checked == true)
  {
  tasks[i].style.textDecoration="line-through";
  }
  else {
  tasks[i].style.textDecoration="none";
  }
   }
}
function deleteItem () {
  this.parentElement.remove();
  var ul_list = document.getElementsByClassName("task_list")[0].children[0];
  if(ul_list.childElementCount === 0 ) {
      document.getElementsByClassName("task_list")[0].children[1].textContent="Your task Board is empty!";
    }
}

function handler() {
var inputValue = document.getElementsByClassName('inputfield')[0];
    var newTask = inputValue.value;
    inputValue.value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(newTask);

    // Creating a Checkbox here.

    var checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "check";
    checkBox.onclick = taskdone;

    // Creating a delete button.

    var deletebtn = document.createElement("BUTTON");
    var delimage = document.createElement("IMG");
    delimage.setAttribute("src", "delete.png");
    deletebtn.className="delete";
    deletebtn.appendChild(delimage);
    deletebtn.onclick = deleteItem;

    // Appending the child elements.

    node.appendChild(checkBox);
    node.appendChild(textnode);
    node.appendChild(deletebtn);
   
    var ul_list = document.getElementsByClassName("task_list")[0].children[0];
    document.getElementsByClassName("task_list")[0].children[0].appendChild(node);
    if(ul_list.childElementCount > 0 ) {
    document.getElementsByClassName("task_list")[0].children[1].textContent="";
    }
   
}