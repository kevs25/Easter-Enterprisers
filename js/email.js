function sendMail() {
    var tempParams = {
        Address:document.getElementById("address").value,
        Flat_no:document.getElementById("flatno").value,
        Area:document.getElementById("area").value,
        City:document.getElementById("city").value,
        Cincode:document.getElementById("pincode").value,
        product_type:document.getElementById("product-type").value,
        product_model:document.getElementById("product-model").value,
    };
    emailjs.send('service_iqez3da', 'template_f4i36xv',tempParams)
    .then(function(res){
        console.log("success",res.status)
    })
}