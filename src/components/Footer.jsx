import React from 'react'

const Footer = () => {
    return (
        <div><footer>
            <div class="footer_left">
                <div class="footer_menu">
                    <ul class="menu_list">
                        <li class="menu_items">News & Events</li>
                        <li class="menu_items">Multimedia</li>
                        <li class="menu_items">Missions</li>
                        <li class="menu_items">Humans in Space</li>
                    </ul>
                </div>
                <div class="footer_menu">
                    <ul class="menu_list">
                        <li class="menu_items">The Universe</li>
                        <li class="menu_items">Science</li>
                        <li class="menu_items">Aeronautics</li>
                        <li class="menu_items">Technology</li>
                    </ul>
                </div>
                <div class="footer_menu">
                    <ul class="menu_list">
                        <li class="menu_items">Earth & Climate</li>
                        <li class="menu_items">The Solar System</li>
                        <li class="menu_items">Learing Resources</li>
                    </ul>
                </div>
            </div>
            <div class="footer_right">
                <div class="right-menu">
                    <h1 class="rightmenu_title">Subscribe to our newsletter</h1>
                    <div class="right_mail">
                        <input type="text" placeholder="your@gmail.com" class="mail_input" />
                        <button class="mail_button">Join!</button>
                    </div>
                </div>
                <div class="right-menu2">
                    <h1 class="rightmenu_title">Follow Us</h1>
                    <div class="social">
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-line"></i>
                        <i class="ri-twitter-x-line"></i>
                        <i class="ri-whatsapp-line"></i>
                    </div>
                </div>
                <div class="right_copy">
                    <span class="copy">&copy; Sayyed Dilshad Ali. All rights reserved.</span>
                </div>
            </div>
        </footer></div>
    )
}

export default Footer