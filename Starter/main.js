console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.style.color='blue';
header.style.border= 'solid 10px #000';
var title=document.getElementById('main');
var items =document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor ='green';
items[2].style.color ='white';
// items.style.fontWeight='bold';//Doesn't Work

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
