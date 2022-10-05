import React, { useEffect, useState } from 'react'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import SocialMeidal from './SocialMeidal'


function Header() {

    const [background, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    }, [])
    return (
        <header className={`${background ? 'bg-dark h-20 ' : 'h-24 text-dark'} flex item-center fixed  text-white top-0 w-full pt-8 z-10 transition-all duration-300`}>
            <div className="container mx-auto h-full flex item-center justify-between">
            
                {/* logo Image */}
              <h2>TABITHA WANJIRA</h2>
                {/* <NavBar /> */}
                <div className="hidden lg:block">
                    <NavBar /> 
                    </div>
                {/* <SocialMeidal/> */}
                <div className=" lg:block hidden ">
                    <SocialMeidal />
                     </div>
                {/* <MobileNav /> */}
                <div className=" hidden sm:block">
                    <MobileNav />
                    </div>

            </div>
        </header>

    )
}

export default Header