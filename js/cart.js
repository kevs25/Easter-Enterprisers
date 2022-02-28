window.onload = () => {
    if(!sessionStorage.user){
        location.replace('/login');
    }
}
const buyNow = document.querySelector('.buy-now');
buyNow.addEventListener('click', () => {
    let address = getAddress();

    if(address){
        fetch('/order', 
        {
            method: 'post',
            headers: new Headers({'Content-type': 'application/json'}),
            body: JSON.stringify({
                email: JSON.parse(sessionStorage.user).email,
                add: address,
            })
        }).then(res => res.json())
        .then(data => {
            showAlert('Your order is placed successfully');
        })
    }
})
const getAddress = () => {
    let address = document.querySelector('#address').value;
    let productType = document.querySelector('#product-type').value;
    let productModel = document.querySelector('#product-model').value;
    let flatno = document.querySelector('#flatno').value;
    let area = document.querySelector('#area').value;
    let city = document.querySelector('#city').value;
    let pincode = document.querySelector('#pincode').value;

    if(!address.length ||!flatno.length || !area.length || !city.length || !pincode.length || !productType.length || !productModel.length)
    {
        return showAlert('fill all the inputs first');
    }
    else{
        return {address, flatno, area, city, pincode, productType, productModel};
    }
}
    

