
let newitem = document.getElementById("newitem");
let checkbox = document.getElementsByName("todo");

let counter = 5;

newitem.addEventListener('keyup', function(e) {
	if(e.keyCode == 13) {
    let myUL = document.getElementById("myUL");
    let li = document.createElement("li");

    counter += 1;
    let cB = document.createElement('input');
    cB.type = "checkbox";
    cB.name = "todo";
    cB.value = counter;
    cB.onclick= function(){
      terms_change(this);
    };


    li.appendChild(cB);
    //li.appendChild(document.createTextNode(newitem.value));

    let span2 = document.createElement("span");
    //span2.type = "span"
    span2.setAttribute("name", "etiqueta");
    span2.textContent = newitem.value;
    span2.setAttribute("value", "counter");
    li.appendChild(span2);

    myUL.appendChild(li);
	}
});



let etiqueta = document.getElementsByName("etiqueta");

function terms_change(checkbox){
  if(checkbox.checked){
    etiqueta[checkbox.value - 1].classList.add("done");
  }
  else{
    etiqueta[checkbox.value - 1].classList.remove("done");
  }
}
