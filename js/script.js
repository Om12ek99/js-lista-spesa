// INPUT
// array xon la lista della spesa
const shoppingItems = ["latte", "biscotti", "tè", "pane"];

// dichiarazione variabili
let shoppingItemsElem = document.querySelector(".shopping");
let i = 0                                           // declariation increment variable
let shoppingItem ="";





// comando while
while(i < shoppingItems.length){                         
    shoppingItem +="<li>" + shoppingItems[i] + "</li>";  
    i++;                                                
}

// OUTPUT
shoppingItemsElem.innerHTML = shoppingItem;              