let totalEl = document.getElementById("total-el");
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0; 
console.log(saveEl);
console.log(totalEl);
function increment(){
   count += 1;
   countEl.innerText = count
}
 
function save(){
    let  countStr = count + " - "; 
saveEl.textContent += countStr;

let  totalpeople =saveEl + countEl;
totalEl.textContent += totalpeople;

countEl.textcountent = 0;
count = 0;

}
// function total(){
//     let   totalpeople = saveEl + countEl;
//     totalEl.textContent = totalpeople;

// }
