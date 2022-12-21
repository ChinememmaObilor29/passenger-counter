let counter = document.getElementById("counter");
console.log(counter);

let count = 0;

function increment() {
    count++;
    counter.textContent = count;
}


let saved = document.getElementById("entries");

function save(){
   let entry = count + " - ";
   saved.textContent += entry;
   counter.textContent = 0;
   count = 0;
}

