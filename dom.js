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
 

var li=document.getElementsByTagName("li")
console.log(li)
li[1].style.backgroundColor="red"
li[2].style.display="none"



// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.color="green"

  var odd=document.querySelectorAll('li:nth-child(odd)')
  for(var i=0;i<odd.length;i++)
 {
    odd[i].style.backgroundColor='green'
    
 }













