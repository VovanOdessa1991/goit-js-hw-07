const textInput = document.querySelector("#name-input");
const textOutpud = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  console.log(textInput.value);
  textOutpud.textContent = textInput.value;
});

// !  Стара версія
// textInput.addEventListener("input", (event) => {
//   textOutpud.textContent = event.currentTarget.value;
// });
