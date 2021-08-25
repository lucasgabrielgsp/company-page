import React, { useState } from 'react'
import { LogoWithLinks } from './styled';
import { Logo } from './LogoHolder';
function Header() {
    const [active, setActive] = useState(0)
    console.log(active)
    function MobileNavbar(){
        if(active === 0){
            setActive(1)
            var menu = document.querySelector('ul')
            menu.setAttribute('style','transform:translateX(0%)')

        }else{
            setActive(0)
            var menu_ = document.querySelector('ul')
            menu_.setAttribute('style','transform:translateX(100%)')
        }
    }
    return (
        <div>
            <LogoWithLinks>
                    <Logo>
                        <img src='logo.png' alt='logo'/>
                    </Logo>
                    <div>
                        <img onClick={() => MobileNavbar()} src='menuicon.png' alt='menu'/>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#conheca-a-enext">Conheça a ENEXT</a></li>
                            <li><a href='#enext-golden-team'>ENEXT Golden Team</a></li>
                            <li><a href='#diversidade-enext'>Diversidade</a></li>
                        </ul>
                    </div>
            </LogoWithLinks>
        </div>
    )
}

export default Header
