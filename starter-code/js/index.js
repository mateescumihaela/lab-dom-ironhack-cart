// ITERATION 1

function updateSubtotal($product) {
  let priceUnit = $product.querySelector("td.pu > span").innerText;
  let quantity = $product.querySelector("td.qty > label > input[type=number]").value;
  let subTotal = priceUnit * quantity;
  return subTotal;
}


function calculateAll() {
  let product = document.querySelector("#cart > tbody > tr:nth-child(1)")
  let subTotal = updateSubtotal(product)

  document.querySelector("#cart > tbody > tr:nth-child(1) > td.subtot > span").innerText = subTotal;
}
$calc.onclick = calculateAll;

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

let deleteBtnCollection = document.getElementsByClassName('btn btn-delete');   
for(let i = 0; i < deleteBtnCollection.length;i++){   
  deleteBtnCollection[i].onclick = removeProduct; 
}

// ITERATION 4

function productRemoveListener(event) {
  event.currentTarget.parentElement.parentElement.remove(); 
} 

let createBtn = document.querySelector("#create"); 
createBtn.onclick = addNewProduct;  
}

// ITERATION 5

function createProduct(event) {
  console.log("what is the type of event? ", typeof event.currentTarget)
  console.log("What does event look like: ", event);
  console.log("What is the current target: ", event.currentTarget);

  let productName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value;
  let price = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;
  let rowHTML = ""

  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = newRowInnerHtml;
  newRow.querySelector('.btn-delete').onclick = removeCh;
  console.log(document.getElementsByTagName('tbody'))
  document.getElementsByTagName('tbody')[0].appendChild(newRow);
}
