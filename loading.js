var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("swapping-squares").style.display = "none";
  document.getElementById("site").style.display = "initial";
}