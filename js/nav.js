const createNav= () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML= `
    <div class="nav">
        <img src="images/logo.jpg" class="brand-logo" alt="cover">
        <div class="nav-items">
            <ul class="link-elements">
                <li class="link-item"><a href="index.html" class="link">home</a></li>
                <li class="link-item"><a href="headphones.html" class="link">headphones</a></li>
                <li class="link-item"><a href="airpods.html" class="link">airpods</a></li>
                <li class="link-item"><a href="watches.html" class="link">watches</a></li>
                <li class="link-item"><a href="electronics.html" class="link">Electronics</a></li>
                <li class="link-item"><a href="shoes.html" class="link">shoes</a></li>
            </ul>
            <a>
                <img src="images/account.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                    <p class="account-info">Login as,name</p>
                    <button id="user-btn">Log in</button>
                </div>
            </a>
            <a href="cart.html"><img src="images/cart.png" alt=""></a>
        </div>

    </div>
    `;
}
createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML =  `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    }
    else{
        //user is logged out
        popuptext.innerHTML = 'login to place order'
        actionBtn.innerHTML = 'Login';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }

}