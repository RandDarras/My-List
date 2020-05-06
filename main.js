
// var button = document.createElement("BUTTON");
// button.innerHTML="Remove"

// var btn=document.createElement("BUTTON");
// btn.innerHTML="remove";
//  var x = document.getElementsByClassName("input-container");
//   x[0].appendChild(btn);
// btn.setAttribute("id", "remove-task");


  function addTask() {

    var inputVal = document.getElementById("myTodo").value
    var li = document.createElement("li");
    li.innerHTML = inputVal
     document.getElementById("todo-list").appendChild(li)
     console.log("add new task")
  }


  function removeTask() {

    var list = document.getElementById("todo-list");

    list.removeChild(list.childNodes[list.childNodes.length-1]);
  }

  var id=document.getElementById("remove-task")
    id.setAttribute("onclick", "removeTask()");