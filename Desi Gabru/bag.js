let bagItemObjects;
onload();
function onload(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}
function loadBagItemObjects(){
    bagItemObjects = bagItems.map(itemId =>{
        for(let i = 0; i < items.length; i++){
            if(itemId == items[i].id){
                return items[i];
            }
            else if(itemId == items2[i].id ){
                return items2[i];
            }
             
        }
    })
};
function displayBagItems(){

    let containerElement = document.querySelector('.main-cart-summary');
    let innerHtml = '';
    bagItemObjects.forEach(bagItems => {
        innerHtml+= generateItemHtml(bagItems);
    });
    containerElement.innerHTML = innerHtml;
};
function removeFromBag(itemId){
   bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
   localStorage.setItem('bagItems', JSON.stringify(bagItems));
   loadBagItemObjects();
   displayBagItems();
   displayBagSummary();
}
function generateItemHtml(item){
    return `
    <div class="cart-items-container">

        <img src="${item.image}" class="product-img">
    <div class="product-name">${item.product_name}</div>
    <div class="old-price">Rs. ${item.old_price}</div> 
    <div class="new-price">Rs. ${item.new_price}</div>
    <div class="quantity">1</div>
    <div class="cost">Rs. ${item.new_price}</div>
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>`;
};
function displayBagSummary(){
    let orderSummaryElement = document.querySelector('.order-summary');
    TotalItem = bagItems.length;
    TotalDiscount = 0;
    TotalMRP = 0;
    Subtotal = 0;
    bagItemObjects.forEach(bagItem => {
        TotalMRP+= bagItem.new_price;
        TotalDiscount+= bagItem.old_price - bagItem.new_price;
        Subtotal+= bagItem.old_price;
    });
    orderSummaryElement.innerHTML = ` <div class="order-sum-heading">
                        <h1>ORDER SUMMARY</h1>
                    </div>
                    <div class="amount-sec">
                        <div class="subtotal-head">
                            Subtotal:<p class="subtotal">${Subtotal}</p>
                        </div>

                        <div class="discount-head">
                        Discount: <p class="discount">${TotalDiscount}</p>
                        </div>

                        <div class="total-head">
                         TOTAL:<p class="total">${TotalMRP}</p>
                        </div>

                        <div class="quantity-head">
                        TOTAL QUANTITY:<p class="total-quantity">${TotalItem}</p>
                        </div>

                        <button class="order-place"><p>PLACE ORDER</p>
                            <div class="icons">
                                <i class="fa-brands fa-google-pay"></i>
                            <i class="fa-brands fa-cc-paypal"></i>
                            <i class="fa-brands fa-cc-mastercard"></i>
                            </div>
                        </button>
                    </div>
                </div>`;
}
