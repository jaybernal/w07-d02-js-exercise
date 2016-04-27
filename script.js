function sayHi() {
  alert("Hello, stranger!");
}

function changeColor(color){
  if (color.className === "list-item") {
    color.className = "color-purple";
  }else {
    color.className = "list-item";
  };
}

function allOrange(){
  var listItem = document.getElementsByClassName("list-item");
  for (var i = 0; i < listItem.length; i++) {
    listItem[i].classList.add("color-orange");
  };
}

function originalColor(){
  var original = document.getElementsByClassName("list-item");
    for (var i = 0; i < original.length; i++) {
      original[i].classList.remove("color-orange");
    };
}

function hideAbove(){
  document.getElementsByClassName("first-paragraph")[0].style.visibility='hidden';
}

function showAbove(){
    document.getElementsByClassName("first-paragraph")[0].style.visibility='visible';

}
