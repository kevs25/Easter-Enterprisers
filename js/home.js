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
/*<button id="user-btn"><a href="login.html" class="user-link">Log in</a></button>
                    <p class="account-info">New user? Sign in here</p>
                    <button id="user-btn"><a href="signup.html" class="user-link">sign up</a></button>*/