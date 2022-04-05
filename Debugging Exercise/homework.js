var Grannysmithapple = document.getElementById("list").children[1]
Grannysmithapple.innerHTML = "Granny Smith Apples"
console.log(Grannysmithapple)
const list = document.getElementById("list");
list.removeChild(list.lastElementChild);
const add = document.createElement("li");
add.textContent = 'kombucha';
list.appendChild(add);
var x = document.querySelector("ul")
x.innerHTML ="";
console.log (x)
let newarray = ['protein bars', 'almonds', 'peanut butter']
for (let i = 0; i < newarray.length; i++) {
    let newarraylist = document.createElement('li');
    newarraylist.innerHTML = newarray[i];
    x.appendChild(newarraylist);
}
let y = document.querySelector("ul").children[1];
y.setAttribute('class', 'important')
console.log(y)














