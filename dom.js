// //console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// console.log(document.all[10]);
// //document.all[10].textContent="hello"

// console.log(document.forms[0]);
// console.log(document.links);

//console.log(document.getElementById("header-title"));
 //var headerTitle=document.getElementById("header-title");
 

//console.log(headerTitle)
// headerTitle.textContent="hello"
// headerTitle.innerText="goodbye"
//headerTitle.innerHTML='<h3>hello</>'
var header=document.getElementById("main-header");
header.style.borderBottom="solid 3px #000"



//get elements by class name

//  var items=document.getElementsByClassName("list-group-item")
// // console.log(items)
// console.log(items[1])
//  items[1].textContent="hello2"
//  items[2].style.backgroundColor="green"
// var itemhead=document.getElementsByClassName("title")
// //console.log(itemhead)
// itemhead[0].style.fontWeight = "bold";
// itemhead[0].style.color = "green";

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight="bold"
// }

// get element by tagname

// var li=document.getElementsByTagName("li")
// // console.log(li)
// console.log(li)
// console.log(li[1])

//  li[1].textContent="hello2"
//  li[2].style.backgroundColor="green"
// var itemhead=document.getElementsByTagName("title")
// //console.log(itemhead)
// itemhead[0].style.fontWeight = "bold";
// itemhead[0].style.color = "green";

// for(let i=0;i<items.length;i++)
// {
//     li[i].style.fontWeight="bold"
// }

// var itema=document.getElementsByClassName("list-group-b")
// console.log(itema)
// itema[0].style.fontWeight="bold"



//  li=document.getElementsByTagName("li");
// console.log(li)
// li[4].style.backgroundColor="red"


// QUREY SELECTOR
// var header=document.querySelector('#main-header')
// header.style.boderBottom='solid 4px #ccc'

// var input=document.querySelector('input')
// input.value="hello world"


// var submit=  document.querySelector('input[type="submit"]');
// submit.value="send";

// var item= document.querySelector('.list-group-item');
// item.style.color='red'

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue'

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color="coral"



//query selector all

// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent='hello'

//  var odd=document.querySelectorAll('li:nth-child(odd)')
//  var even=document.querySelectorAll('li:nth-child(even)')

//  for(var i=0;i<odd.length;i++)
//  {
//     odd[i].style.backgroundColor='#f4f4f4'
//     even[i].style.backgroundColor='#ccc'
//  }
 

// var li=document.getElementsByTagName("li")
// console.log(li)
// li[1].style.backgroundColor="red"
// li[2].style.display="none"



// // var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// //  secondItem.style.color="green"

//   var odd=document.querySelectorAll('li:nth-child(odd)')
//   for(var i=0;i<odd.length;i++)
//  {
//     odd[i].style.backgroundColor='green'
    
//  }

// TRAVERSING THE DOM
var itemList=document.querySelector('#items')

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4"
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4"
// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
// console.log(itemList.childNodes)

// //children
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor="yellow"


// // first Child
// console.log(itemList.firstChild)
// // first ElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="hello 1"


// // lastChild
// console.log(itemList.lastChild)
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello 4"



// //nextSibling
// console.log(itemList.nextSibling)
// //nextElementSibling
// console.log(itemList.nextElementSibling)




// //previousSibling
// console.log(itemList.previousSibling)
// //previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color="green"

//creatElement

//creat a div
var newDiv=document.createElement('div')

//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';

//add attribute(attribute u want,value)
newDiv.setAttribute('title',"hello div");


//creat text Node
var newDivText=document.createTextNode('HELLO WORLD');

//add text to div
newDiv.appendChild(newDivText);

var textH=document.querySelector('header .container');
var h1=document.querySelector('header h1')
//ar h2=document.querySelector('h2 ul')


console.log(newDiv);

newDiv.style.fontSize="30px"
textH.insertBefore(newDiv,h1)


var ulElement = document.querySelector('#items');
let newli=document.createElement("li");
newli.className="list-group-item"
newli.textContent='HELLO'
let firstLi=ulElement.querySelector("li")

ulElement.insertBefore(newli, firstLi)










