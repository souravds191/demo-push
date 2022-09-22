//Traversing the DOM
var itemList = document.querySelector('#items');
//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// //First Child
// console.log(itemList.firstChild);

// // first element child
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello 1'

// //Last Child
// console.log(itemList.lastChild);

// // Last element child
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='Hello 1'

// //Next Element Sibling
// console.log(itemList.nextElementSibling);

// //Previous Sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color='green';

//Create a div
var newDiv = document.createElement('div');

//Add Class 
newDiv.className='hello'

//Add id 
newDiv.id='hello1'

//Add Attribute
newDiv.setAttribute('title','Hello Div')

//Create text Node 

var newDivText=document.createTextNode('Hello World')

newDiv.appendChild(newDivText);

var container=document.querySelector=('header .container');
var h1=document.querySelector('header h1')

console.log(newDiv);

container.insertBefore(newDiv,h1);







