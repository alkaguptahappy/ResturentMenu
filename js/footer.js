const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <ul class="category">
                <li class="category-title">food</li>
                <li><a href="#" class="footer-link">Veg</a></li>
                <li><a href="#" class="footer-link">Nonveg</a></li>
                <li><a href="#" class="footer-link">Dessert</a></li>
                <li><a href="#" class="footer-link">starter</a></li>
                <li><a href="#" class="footer-link">Fastfood</a></li>
                <li><a href="#" class="footer-link">Drinks</a></li>
                
            </ul>

            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">delisious food, Best delivery online</p>
    `;
}

createFooter();