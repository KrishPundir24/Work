displayOnHeroSection2();
function displayOnHeroSection2(){
    let cardsContainer = document.querySelector('.hero-section2');
    let InnerHtmL = '';
    items.forEach( item => {
        InnerHtmL += ` <div class="img-card"  style="background-image: url('${item.image}');)">
            <div class="package-info">
               <p> ${item.package_info}</p>
            </div>
            
            <div class="destination-info">
               <h5> ${item.destination_info}</5>
                <p style="color:grey">Starting from <span style="color:black">${item.price}</span></p>
            </div>
        </div>`
    });
    cardsContainer.innerHTML = InnerHtmL;
}