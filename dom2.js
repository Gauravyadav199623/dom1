var form = document.getElementById('addForm');
var itemlist=document.getElementById('items')


//form submit event
form.addEventListener('submit', addItem);


//delete event
itemlist.addEventListener('click', removeItem)



//add item
function addItem(e){
    e.preventDefault();

//get input value
var newItem = document.getElementById("item").value

//creat new li element
var li=document.createElement('li')
//add class
li.className='list-group-item';

console.log(li);

//add text node with input value
li.appendChild(document.createTextNode(newItem));

//creat delete button element
var deleteBtn = document.createElement('button');
var editBtn = document.createElement('button');



//add class to del button
deleteBtn.className='btn btn-danger btn-sm float-right delete'
editBtn.className='btn btn-danger btn-sm float-right delete'

deleteBtn.appendChild(document.createTextNode("X"));
editBtn.appendChild(document.createTextNode("Edit"));


//append button to li
li.appendChild(deleteBtn)
li.appendChild(editBtn)

//append li to list
li.appendChild(deleteBtn)
li.appendChild(editBtn)



itemlist.appendChild(li);
}




//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are  U Sure ?')){
            var li=e.target.parentElement
            itemlist.removeChild(li);
        }
    }
}