const inputEl = document.querySelector("#validation-input");
console.log(inputEl.dataset.length);

inputEl.addEventListener("blur", (event) => {
  // ! Для удобства проверки см в консоль
  console.log(
    "inputEl.dataset.length = :" +
      inputEl.dataset.length +
      " \n" +
      `event.currentTarget.value.length = ${event.currentTarget.value.length} \n`
  );
  console.log(`${inputEl.dataset.length} === ${event.currentTarget.value.length}`);
console.log(parseInt(inputEl.dataset.length) === parseInt(event.currentTarget.value.length));
  //  !    Сам код
  if (parseInt(inputEl.dataset.length) === parseInt(event.currentTarget.value.length)) {
    isValid();
  } else {
    isNotValid();
  }
});

// !!!!!!!!!!!    МЕНТОРУ
// !! Можно ли эту проверку сделать проще?
function isValid() {
  if (!inputEl.classList.contains("invalid")) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
function isNotValid() {
  if (!inputEl.classList.contains("valid")) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
