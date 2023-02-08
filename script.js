const name = document.querySelector("#name");
const price = document.querySelector("#price");
const add = document.querySelector("#add");
const save = document.querySelector("#save")
const del = document.querySelector("#del")
const cancel = document.querySelector("#cancel")
const itemList = document.querySelector("#item-list")
const change = document.querySelectorAll("#change")
const btns = document.querySelectorAll("form .btn")
const totalPriceDollar = document.querySelector(".total-price-dollar")
const totalPriceManat = document.querySelector(".total-price-manat")
const noProduct = document.querySelector(".no-product")
let i = 1;
add.addEventListener("click", function (e) {
    e.preventDefault()
    if (name.value != "" && price.value != "") {
        itemList.innerHTML +=
            `<tr>
                    <td>${i++}</td>
                    <td>${name.value}</td>
                    <td class="product-prices">${price.value}</td>
                    <td class="text-end">
                        <button id="change" type="submit" class="btn btn-warning btn-sm">
                            <i class="far fa-edit"></i>
                        </button>
                    </td>
                 </tr>`
    }
    borderRed()
    product()
    productNotAdded()
    resetValue()
    totalProductPrice()
})

function dNone() {
    btns.forEach(btn => {
        if (!btn.classList.contains("add")) {
            btn.classList.remove("d-none")
        }
        else {
            btn.classList.add("d-none")
        }
    })
}
function notDNone() {
    btns.forEach(btn => {
        if (btn.classList.contains("add")) {
            btn.classList.remove("d-none")
        }
        else {
            btn.classList.add("d-none")
        }
    })
}
function product() {

    const change = document.querySelectorAll("#change")
    change.forEach(change => {
        change.onclick = function () {
            if (!add.classList.contains("d-none")) {
                change.parentNode.parentNode.classList.add("gray");
                dNone()
                name.value = change.parentNode.parentNode.children[1].innerHTML
                price.value = change.parentNode.parentNode.children[2].innerText
            }
            save.onclick = function (e) {
                e.preventDefault()
                change.parentNode.parentNode.children[1].innerHTML = name.value
                change.parentNode.parentNode.children[2].innerHTML = price.value
                change.parentNode.parentNode.classList.remove("gray");
                notDNone()
                productNotAdded()
                resetValue()
                totalProductPrice()
            }
            del.onclick = function (e) {
                e.preventDefault()
                change.parentNode.parentNode.remove()
                notDNone()
                productNotAdded()
                resetValue()
                totalProductPrice()
            }
            cancel.onclick = function (e) {
                e.preventDefault()
                change.parentNode.parentNode.children[1].innerHTML = change.parentNode.parentNode.children[1].innerHTML
                change.parentNode.parentNode.children[2].innerHTML = change.parentNode.parentNode.children[2].innerHTML
                name.value = ""
                price.value = ""
                change.parentNode.parentNode.classList.remove("gray");
                notDNone()
                resetValue()
                totalProductPrice()
            }
        }
    })
}
product()


function productNotAdded() {
    if (itemList.children.length > 1) {
        noProduct.classList.add("d-none")
    }
    else {
        noProduct.classList.remove("d-none")

    }
}

function borderRed() {
    if (name.value == "") {
        name.classList.add("border-red")
    } else {
        name.classList.remove("border-red")
    }
    if (price.value == "") {
        price.classList.add("border-red")
    } else {
        price.classList.remove("border-red")
    }
}
function resetValue(){
    name.value = "";
    price.value = "";
}

function totalProductPrice(){
    let total=0;
const productPrices = document.querySelectorAll(".product-prices")
  productPrices.forEach(p=>{
   return total+=+p.innerHTML;
  })
  totalPriceManat.innerHTML=`${total.toFixed(2)} AZN`
  totalPriceDollar.innerHTML=`${(total*1.7).toFixed(2)} $`
}

totalProductPrice()