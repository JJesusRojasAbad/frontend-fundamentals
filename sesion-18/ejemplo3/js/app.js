window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    document.body.style.background = "lightblue";
  }

  if (event.key == "Enter" && event.ctrlKey) {
    document.body.style.background = "orange";
  }
});

window.addEventListener("keyup", (event)=> {
  if (event.key == "Enter") {
    document.body.style.background = "";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key == "c" && event.metakey) {
    console.log("Hola");
  }
});

