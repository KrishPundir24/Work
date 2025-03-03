let bagItems;
load();
function load(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayitemsHerosection();
    displayitemsHerosection2();
    displayBagIcon();
}
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = 'visible';
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayitemsHerosection(){
    let itemsContainerElement = document.querySelector('.hero-sect-main');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml = '';
    items.forEach(item =>{
        innerHtml+= `<div class="items-container border">
        <img src = "${item.image}" class="item-image">
        <div class="product-name">${item.product_name}</div>
        <div class="ratings">${item.rating}&nbsp;&nbsp;&nbsp;${item.stars}&nbsp;&nbsp;&nbsp;<span>(${item.reviews})</span></div>
        <div class="amount">Rs. ${item.new_price}</div>
        <button class="add border" onclick="addToBag(${item.id});">QUICK ADD</button>
        </div>`
    });
    itemsContainerElement.innerHTML = innerHtml;
};
function displayitemsHerosection2(){
    let itemsContainerElement2 = document.querySelector('.hero-sec4-content');
    if(!itemsContainerElement2){
        return;
    }
    let innerHtml2 = '';
    items2.forEach(item =>{
        innerHtml2+= `<div class="items-container border">
        <img src="${item.image}" class="item-image">
        <div class="product-name">${item.product_name}</div>
        <div class="ratings">${item.rating}&nbsp;&nbsp;&nbsp;${item.stars}&nbsp;&nbsp;&nbsp;<span>(${item.reviews})</span></div>
        <div class="amount">Rs. ${item.old_price}&nbsp;&nbsp;&nbsp;<span class="old_price">(Rs. ${item.new_price})</span></div>
        <button class="add border" onclick="addToBag(${item.id});">QUICK ADD</button>
        </div>`
     });
     itemsContainerElement2.innerHTML = innerHtml2;
    }


