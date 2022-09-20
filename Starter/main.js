// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// //headerTitle.textContent = 'Hello';
// //headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.style.color='blue';
// header.style.border= 'solid 10px #000';
// var title=document.getElementById('main');
// var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].style.backgroundColor ='green';
// items[2].style.color ='white';
// // items.style.fontWeight='bold';//Doesn't Work

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'List No 2';
// li[1].style.backgroundColor='pink';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold'
//     li[i].style.backgroundColor=''

// }
//QuerySelector
var header=document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px #ccc';

var input = document.querySelector('input');
input.value= 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="Send";

var item = document.querySelector('.list-group-item');
item.style.color='red';

// var lItem= document.querySelector
// ('.list-group-item:last-child');
// lItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';
secondItem.style.backgroundColor='green'

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden'
//Query SelectorAll



