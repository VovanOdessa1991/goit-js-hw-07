const textInput = document.querySelector("#name-input");
const textOutpud = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
 
  console.log( textOutpud.textContent = textInput.value || " Anonymous");
  // if (textInput.value == "") {
  //   textOutpud.textContent = " Anonymous";
  //   return;
  // } 
  textOutpud.textContent = textInput.value || " Anonymous";

  
  
});

// !  Стара версія
// textInput.addEventListener("input", (event) => {
//   textOutpud.textContent = event.currentTarget.value;
// });
