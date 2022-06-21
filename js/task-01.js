const test = document.querySelectorAll(".item");
console.log(`Number of categories: ${test.length} \n  `);

test.forEach(function (number) {
  // const test2 = iterator.firstElementChild;
  console.log(`Category: ${number.firstElementChild.textContent}\n `);
  // const test3 = iterator.lastElementChild;
  console.log(`Elements: ${number.lastElementChild.children.length}\n `);
});


// ! Було це
// for (const iterator of test) {
//   const test2 = iterator.firstElementChild;
//   console.log(`Category: ${test2.textContent}\n `);
//   const test3 = iterator.lastElementChild;
//   console.log(`Elements: ${test3.children.length}\n `);
// }
