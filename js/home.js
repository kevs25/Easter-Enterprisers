const productCOntainers= [...document.querySelectorAll('.product-container')];
const nxtBtn=[...document.querySelectorAll('.next-btn')];
const prevBtn=[...document.querySelectorAll('.prev-btn')];

productCOntainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft +=containerWidth;
    })

    prevBtn[i].addEventListener('click', () =>{
        item.scrollLeft -=containerWidth;
    })
})
