var topOfferCloseBtn = document.getElementById("top-offer-close-btn");
const topOffer = document.getElementById("top-offer");


const orderButon = document.getElementById("order-button");

window.addEventListener('scroll', () => {
  if (window.scrollY > 500 && window.scrollY < 5500) { // If scrolled past 500px
    console.log("It too much")
    orderButon.classList.add('is-visible');
    console.log(JSON.stringify(orderButon.classList))
    }else{
      orderButon.classList.remove('is-visible'); // Hides it again if they scroll back up
  }
});




//footer
var selectorHead1 = document.getElementById("selector-head1");
var selectorHead2 = document.getElementById("selector-head2");
var selectorHead3 = document.getElementById("selector-head3");
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");


topOfferCloseBtn.addEventListener('click', () => {
topOffer.classList.remove("active");
// console.log("Offer Click!");
})

selectorHead1.addEventListener('click', () => {
    console.log("Hello WOrld1");
    list1.classList.toggle("active");
    list2.classList.remove("active");
    list3.classList.remove("active");
    console.log(JSON.stringify(list1.classList));
})
selectorHead2.addEventListener('click', () => {
    console.log("Hello WOrld2");
    list1.classList.remove("active");
    list2.classList.toggle("active");
    list3.classList.remove("active");
    console.log(JSON.stringify(list2.classList));
})
selectorHead3.addEventListener('click', () => {
    console.log("Hello WOrld2");
    list1.classList.remove("active");
    list2.classList.remove("active");
list3.classList.toggle("active");
console.log(JSON.stringify(list3.classList));
})

