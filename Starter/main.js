var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
itemList.addEventListener('double-click',editItem);
filter.addEventListener('keyup',filterItems);
//Add Item
function addItem(e){
    e.preventDefault();
    const description = document.getElementById('description').value;
    
    //Get Input Value
    var newItem = document.getElementById('item').value;

    //Create New Li element 
    var li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';
    console.log(li);
    
    const descriptionNode = document.createTextNode(description);
    //Append Text Node with Input Value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(descriptionNode);

    //Create delete button
    var deletebtn = document.createElement('button');
    var editbtn = document.createElement('button');

    //Add Classes to del btn
    deletebtn.className = 'btn btn-sm float-right delete';
    editbtn.className = 'btn btn-sm float edit';
    //Append Text node
    deletebtn.appendChild(document.createTextNode('X'));
    editbtn.appendChild(document.createTextNode('edit'));
    //Append button to li
    li.appendChild(deletebtn);
    
    li.appendChild(editbtn);
    //Append li to list
    itemList.appendChild(li);
    
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        console.log(1)
    }

}

function editItem(e){
    // if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.editItem(li);
        }
        console.log(1)
    }

//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items = itemList.getElementsByClassName('list-group-item');
    console.log(items)

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var des = item.childNodes[1].textContent;
        console.log(itemName)
        if (itemName.toLowerCase().indexOf(text)!=-1 || des.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

