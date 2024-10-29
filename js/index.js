

const collectionCard = [
    { name: "Kiwi Bonanza", image: 'Assets/kiwi.webp' },
    { name: "Lemon Zest", image: 'Assets/lemon.webp' },
    { name: "Apple Retreat", image: 'Assets/apple.webp' },
    { name: "Citrus Juice", image: 'Assets/citrus.webp' },
    { name: "Mango Fusion", image: 'Assets/mango.webp' },
    { name: "Orange Squeeze", image: 'Assets/Orange.webp' }
]


// function CardCollection() {
    //     var clutter ='';
    //     collectionCard.forEach(function (obj) {
        //         clutter+= `<div class="collection-card col-md-3">
        //         <img src="${obj.image}" alt="">
        //         <div class="title">${obj.name}</div>
//       </div>`;
//     })

//     document.querySelector(".collection-cardbody").innerHTML = clutter;


// }
// CardCollection();


function cart() {
    
    const pareeent = document.getElementById("collection");
    
    var i;
    for (i = 0; i < collectionCard.length; i++) {
        
        var productDiv = document.createElement("div");
        productDiv.id = `categoryyCard${i}`;
        productDiv.className = "col-md-2 mt-2 categoty-child-card";
        
        var productImage = document.createElement("img");
        productImage.src = collectionCard[i].image;
        productImage.className = "img-fluid rounded";
        
        
        var ProductTitle = document.createElement("h6");
        ProductTitle.innerHTML = collectionCard[i].name;
        
        productDiv.append(productImage);
        productDiv.append(ProductTitle);
        pareeent.append(productDiv);
        console.log(productDiv)
    }
    
    
};
cart();











const proIcon = document.querySelector(".addProduct_Icon");
const mblcard1 = document.querySelector("#proCard-mbl1");
const mblcard2 = document.querySelector("#proCard-mbl2");


const carrt = document.getElementById("carrt").addEventListener('click', function () {
    var sidebarr = document.getElementById("sidebar");
    sidebarr.style.display = "block";
});

const closeCart = document.getElementById("closecart").addEventListener('click', () => {
    var sidebarr = document.getElementById("sidebar");
    sidebarr.style.display = "none";
});





