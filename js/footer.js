const createFooter = () => {
    let createFooter = document.querySelector('footer')
    createFooter.innerHTML =`
    <div class="footer-content">
        <img src="images/logo.jpg" class="brand-logo" alt="cover">
        <div class="div1">Electronics & clothing</div>
            <div class="contact">
                <ul class="contact-info">
                    <li class="contact-title">contact us here</li>
                    <li><a href="mailto:alaneaster11@gmail.com" class="contact-link">E-mail</a></li>
                    <li><a href="tel:8903533726" class="contact-link">Phone no</a></li>
                    <li><a href="https://www.instagram.com/easter_enterprisers/" class="contact-link">Instagram</a></li>
                </ul>
                   
                    
                           
            </div>
        </div>
        <br>
        <p class="footer-title">About us</p>
    
        <p class="info">All the products in this website are 7a/10a quality and there is a return policy if the product is not satisfied by the user. We sell our products all over India.</p>
           
        <a href="#" class="privacy">Privacy Policy</a>
    </div>     
    `;
}
createFooter()