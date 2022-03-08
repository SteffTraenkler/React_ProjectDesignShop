import React from "react";
import { render } from "react-dom";

const Footer = () => {

    return (

        <footer>
            <section>
                <article>
                    <h2>Info</h2>
                    <p class="grey light">Carefully curated online design store,</p>
                    <p class="grey light">beautiful and thoughtfully designed products for everyday use</p>
                </article>
                <article>
                    <h2>Get in touch</h2>
                    <p><a href="mailto:hello@thedesignshop.com">hello@thedesignshop.com</a></p>
                    <p class="grey light">Los Angeles, CA</p>
                </article>
                <article>
                    <h2>Newsletter</h2>
                    <p class="grey light"><a href="https://stefftraenkler.github.io/Project_DesignShop_mediaQueries/">Sign up </a>for the latest arrivals,</p>
                    <p class="grey light">special offers and weekly pics</p>
                </article>
                <article>
                    <h2>Follow us</h2>
                    <ul>
                        <li><a class="socials light" href="instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a class="socials light" href=""><i class="fa-brands fa-pinterest-p"></i></a></li>
                        <li><a class="socials light" href="twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a class="socials light" href="facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>



                    </ul>
                </article>
            </section>
            <section>
                <p class="grey light">© 2021 The Design Shop</p>
                <article>
                    <ul>
                        <li><a href="https://stefftraenkler.github.io/Project_DesignShop_mediaQueries/"></a>Disclaimer</li>
                        <li><a href="https://stefftraenkler.github.io/Project_DesignShop_mediaQueries/"></a>Shop</li>
                        <li><a href="https://stefftraenkler.github.io/Project_DesignShop_mediaQueries/"></a>Weekly Pics</li>
                    </ul>
                    <p class="light">Made/Curated by <a href="https://stefftraenkler.github.io/Project_DesignShop_mediaQueries/">Ruby Bacanovic</a></p>
                </article>
            </section>
        </footer>
    )
}

export default Footer