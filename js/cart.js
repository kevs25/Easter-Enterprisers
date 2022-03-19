window.onload = () => {
    if(!sessionStorage.user){
        location.replace('/login');
    }
}
const buy_now = document.querySelector('.buyNow');
buy_now.addEventListener('click', () => {
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
        emailjs.send('service_iqez3da', 'template_f4i36xv',getAddress())
        .then(function(res)
        {
            console.log("success",res.status)
        })
    }
})
const getAddress = () => {
    let from_name = document.querySelector('#from_name').value;
    let address = document.querySelector('#address').value;
    let productType = document.querySelector('#product-type').value;
    let productModel = document.querySelector('#product-model').value;
    let flatno = document.querySelector('#flatno').value;
    let area = document.querySelector('#area').value;
    let city = document.querySelector('#city').value;
    let pincode = document.querySelector('#pincode').value;

    if(!from_name.length || !address.length ||!flatno.length || !area.length || !city.length || !pincode.length || !productType.length || !productModel.length)
    {
        return showAlert('fill all the inputs first');
    }
    else{
        return {from_name, address, flatno, area, city, pincode, productType, productModel};
    }
}
    

