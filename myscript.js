function storeText(){
  var element = document.getElementById("myTextBox");
  localStorage.setItem("thoughts", element.value || "");
  element.focus();
}

function loadText(){
  var element = document.getElementById("myTextBox");
  element.value = localStorage.getItem("thoughts");
  element.focus();
}

function loadMenu(){

}