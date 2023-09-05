var form = document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter')


//form submit event
form.addEventListener('submit', addItem);

//delete event
itemlist.addEventListener('click', removeItem)

//Filter event
filter.addEventListener('keyup', filterItems)



//add item
function addItem(e){
    e.preventDefault();

//get input value
var newItem = document.getElementById("item").value
var description = document.getElementById("description").value


//creat new li element
var li=document.createElement('li')
var descriptionNode=document.createTextNode(" "+description)





//add class
li.className='list-group-item';
//li.className='form-control mr-2';

//console.log(li);

//add text node with input value
li.appendChild(document.createTextNode(newItem));
li.appendChild(descriptionNode);





//creat delete button element
var deleteBtn = document.createElement('button');

//add class to del button
deleteBtn.className='btn btn-danger btn-sm float-right delete'

deleteBtn.appendChild(document.createTextNode("X"));


//append button to li
li.appendChild(deleteBtn)

//append li to list
li.appendChild(deleteBtn)




// edit button
var listItems = document.querySelectorAll('#items .list-group-item');
var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);

// Iterate over each list item
listItems.forEach(function(li) {
  // Create the "Edit" button
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode("Edit"));

  // Append the "Edit" button to the current list item
  li.appendChild(editBtn);
});











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


//filter Items
function filterItems(e){
    //convert to lower case
    var text =e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName("li");

    //convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block"
        }else{
            item.style.display='none'
        }

    })

}