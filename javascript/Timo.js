var burgersBtn = document.querySelector('#burgBtn')

var sidesBtn = document.querySelector('#sidBtn')

var drinksBtn = document.querySelector('#drinBtn')

var fullMenuBtn = document.querySelector('#fullBtn')

var burgers = document.querySelector('#burgers')
var sides = document.querySelector('#sides')
var drinks = document.querySelector('#drinks')

//click on buttons
sidesBtn.addEventListener('click', addSide)
drinksBtn.addEventListener('click', addDrinks)
burgersBtn.addEventListener('click', addBurgers)
fullMenuBtn.addEventListener('click', addFullMenu)

function addSide(){
        sides.style.display = 'flex'
        burgers.style.display = 'none'
        drinks.style.display = 'none'
}
function addDrinks(){
    drinks.style.display = 'flex'
    sides.style.display = 'none'
    burgers.style.display = 'none'
}
function addBurgers(){
    burgers.style.display = 'flex'
    drinks.style.display = 'none'
    sides.style.display = 'none'
}
function addFullMenu(){
    drinks.style.display = 'flex'
    sides.style.display = 'flex'
    burgers.style.display = 'flex'
}


document.querySelector('#browmen').style.backgroundColor = '#f5fbfc'
 

// increment and decrement functions
var plusItem = document.querySelectorAll('.plus')
var minusItem = document.querySelectorAll('.minus')
var value = document.querySelectorAll('.btn1')

for(var i = 0; i < plusItem.length; i++){
    var button = plusItem[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[5];
        var inputValue = input.innerHTML;
        var newValue = parseInt(inputValue) + 1;
        input.innerHTML = newValue;
    })
}
for(var i = 0; i < minusItem.length; i++){
    var button = minusItem[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[5];
        var inputValue = input.innerHTML;
        var newValue = parseInt(inputValue) - 1;
        input.innerHTML = newValue;
        if(newValue>=0){
            input.innerHTML = newValue;
        } else{
            input.innerHTML = 0;
        }
    })
}

//add to card function
var burgerNum = document.querySelector('.burgerCounter')
var sideNum = document.querySelector('.sideCounter')
var drinkNum = document.querySelector('.drinkCounter')
var result = document.querySelectorAll('.btn1')
var addButton = document.querySelectorAll('.btn2')


const addBurgersFunc = (e) => {
    const parent = e.parentElement;
    const value = Number(parent.querySelector(".btn1").innerText);
    const resetValue = parent.querySelector(".btn1");
  
    if (!Number.isNaN(value) && value > 0) {
      burgerNum.innerText = Number(burgerNum.innerText) + value;
      resetValue.innerText = 0;
    }
  };

  const addSidesFunc = (e) => {
    const parent = e.parentElement;
    const value = Number(parent.querySelector(".btn1").innerText);
    const resetValue = parent.querySelector(".btn1");
  
    if (!Number.isNaN(value) && value > 0) {
      sideNum.innerText = Number(sideNum.innerText) + value;
      resetValue.innerText = 0;
    }
  };

  const addDrinksFunc = (e) => {
    const parent = e.parentElement;
    const value = Number(parent.querySelector(".btn1").innerText);
    const resetValue = parent.querySelector(".btn1");
  
    if (!Number.isNaN(value) && value > 0) {
      drinkNum.innerText = Number(drinkNum.innerText) + value;
      resetValue.innerText = 0;
    }
  };

// for(var i of addButton){
// if(i === addButton[0]){
// addButton[0].addEventListener('click', function(){
//     document.querySelector('.burgerCounter').innerHTML = result[0].innerHTML
// })} else if (i === addButton[1]){
//     addButton[1].addEventListener('click', function(){
//         document.querySelector('.burgerCounter').innerHTML = result[1].innerHTML
//     })} else if(i === addButton[2]){
//         addButton[2].addEventListener('click', function(){
//             document.querySelector('.burgerCounter').innerHTML = result[2].innerHTML
//     })} else if(i === addButton[3]){
//         addButton[3].addEventListener('click', function(){
//             document.querySelector('.burgerCounter').innerHTML = result[3].innerHTML
//     })} else if(i === addButton[4]){
//         addButton[4].addEventListener('click', function(){
//             document.querySelector('.burgerCounter').innerHTML = result[4].innerHTML
//     })} else if(i === addButton[5]){
//         addButton[5].addEventListener('click', function(){
//             document.querySelector('.burgerCounter').innerHTML = result[5].innerHTML
//     })} else if(i === addButton[6]){
//         addButton[6].addEventListener('click', function(){
//             document.querySelector('.sideCounter').innerHTML = result[6].innerHTML
//     })} else if(i === addButton[7]){
//         addButton[7].addEventListener('click', function(){
//             document.querySelector('.sideCounter').innerHTML = result[7].innerHTML
//     })} else if(i === addButton[8]){
//         addButton[8].addEventListener('click', function(){
//             document.querySelector('.sideCounter').innerHTML = result[8].innerHTML
//     })} else if(i === addButton[9]){
//         addButton[9].addEventListener('click', function(){
//             document.querySelector('.sideCounter').innerHTML = result[9].innerHTML
//     })} else if(i === addButton[10]){
//         addButton[10].addEventListener('click', function(){
//             document.querySelector('.sideCounter').innerHTML = result[10].innerHTML
//     })} else if(i === addButton[11]){
//         addButton[11].addEventListener('click', function(){
//             document.querySelector('.sideCounter').innerHTML = result[11].innerHTML
//     })} else if(i === addButton[12]){
//         addButton[12].addEventListener('click', function(){
//             document.querySelector('.drinkCounter').innerHTML = result[12].innerHTML
//     })} else if(i === addButton[13]){
//         addButton[13].addEventListener('click', function(){
//             document.querySelector('.drinkCounter').innerHTML = result[13].innerHTML
//     })} else if(i === addButton[14]){
//         addButton[14].addEventListener('click', function(){
//             document.querySelector('.drinkCounter').innerHTML = result[14].innerHTML
//     })} else if(i === addButton[15]){
//         addButton[15].addEventListener('click', function(){
//             document.querySelector('.drinkCounter').innerHTML = result[15].innerHTML
//     })} else if(i === addButton[16]){
//         addButton[16].addEventListener('click', function(){
//             document.querySelector('.drinkCounter').innerHTML = result[16].innerHTML
//     })} else if(i === addButton[17]){
//         addButton[17].addEventListener('click', function(){
//             document.querySelector('.drinkCounter').innerHTML = result[17].innerHTML
//     })} else if(i === addButton[18]){
//         addButton[18].addEventListener('click', function(){
//             document.querySelector('.drinkCounter').innerHTML = result[18].innerHTML
//     })}
// }


//  pop up function

var cartBtn = document.querySelector('#shoppingCart')
var sideCartBtn = document.querySelector('#shoppingCartSide')
cartBtn.addEventListener("click", popUp)
sideCartBtn.addEventListener("click", popUp)

// default value for popUp to open popUp by first click Oleh
document.querySelector(".table_orders").style.marginTop = "-200px";
document.querySelector(".complOrder").style.marginTop = "-200px";


function popUp(){
    if(
        document.querySelector('.table_orders').style.marginTop === '-200px' && 
        document.querySelector('.complOrder').style.marginTop === '-200px'
    ){
        document.querySelector('.table_orders').style.marginTop = '80px'
        document.querySelector('.complOrder').style.marginTop = '170px'
    } else
    {
        document.querySelector('.table_orders').style.marginTop = '-200px'
        document.querySelector('.complOrder').style.marginTop = '-200px'
    }
}

// complete order function

var completeOrder = document.querySelector('#complOrder')

completeOrder.addEventListener('click', function(){
    alert('You have ordered successfully');
    window.location.reload();
})