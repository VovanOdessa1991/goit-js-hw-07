function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const containerEl = document.querySelector("#boxes");
const btnDestroy = document.querySelector("[data-destroy]");


const numberEl = btnCreate.previousElementSibling;

let divAcumulator = [];

btnCreate.addEventListener("click", createEl);
btnDestroy.addEventListener("click", destroyEl);

function createEl(event) {
  // destroyEl(event);

  console.log(numberEl.value);
  for (let index = 0; index < numberEl.value; index++) {
    const element = `<div id="gerator" style="background-color: ${getRandomHexColor()}; width: ${30 + (index * 10) }px; height: ${30 + index * 10}px"></div>`;

    console.log(`test step : ${index + 1} => ${element} \n\n\n `);
    divAcumulator.push(element);
    
  }

  console.table(divAcumulator);
 

// !  Проверка                                       
  console.log("Вот что получает insert : =>  " + divAcumulator + "\n ТИп данных => " + typeof text);

  // ! А вот и сам инсетрт
  containerEl.insertAdjacentHTML("beforeend", divAcumulator.join(''));
    divAcumulator = [];
  
}
const testDestroy = document.querySelectorAll("#gerator");

function destroyEl(event) {
  //  ! Удаление вар 1.
  // const len = containerEl.children.length;
  // for (let index = 0; index < len; index++) {
  //   console.log(containerEl.children.length);
  //   containerEl.lastElementChild.remove();    
  // }
  //  ! Вариант 2
  containerEl.innerHTML = '';
  
  
  
  divAcumulator = [];
}
























// function createEl(event) {
//   console.log(numberEl.value);
//   for (let index = 0; index < numberEl.value; index++) {
//     const element = 30 + index * 10;    
//     divAcumulator.push(element);
//   }

//   console.table(divAcumulator); 
  
//   const text = divAcumulator.map((numberElements) => `<div id="gerator" style="background-color: red; width: ${numberElements}px; height: ${numberElements}px"></div>`).join("");

// // !  Проверка                                       
//   console.log("Вот что получает insert : =>  " + text + "\n ТИп данных => " + typeof text);

//   // ! А вот и сам инсетрт
//   containerEl.insertAdjacentHTML("afterbegin", text);
    
// }