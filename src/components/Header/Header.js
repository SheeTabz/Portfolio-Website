import React, { useEffect, useState } from 'react'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import Logo from '../..//assets/skills/logo.png'



function Header({handleTheme,theme}) {

    const [background, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    }, [])
    return (
        <header className={`${background ? 'bg-dark h-[15vh] ' : 'h-[15vh]'} flex item-center fixed text-white top-0 w-full pt-8 z-10 transition-all duration-300`}>
            <div className="container mx-auto h-full flex item-center justify-between">
            
                {/* logo Image */}
              <img src={Logo} className=''/>
                {/* <NavBar /> */}
                <div className="hidden lg:block">
                    <NavBar /> 
                    </div>
                {/* Theme button */}
              {/* <button onClick={handleTheme}>
                {theme ? 'Light': 'Dark'}
                </button> */}
                {/* <MobileNav /> */}
                <div className=" sm:block">
                    <MobileNav />
                    </div>

            </div>
        </header>

    )
}

export default Header