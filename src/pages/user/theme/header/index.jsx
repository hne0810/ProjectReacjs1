import React from "react"
import { memo } from "react"
import "./index.scss"
import HeaderTopRight from "./header__top_right"
import HeaderTopLeft from "./header__top_left"
import HeaderBootstrap from "./header__bootstrap"
import HeaderMenu from "./header__menu"

const Header = () => {
    return( 
    <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <HeaderTopLeft />
                        <HeaderTopRight />
                    </div>
                </div>
            </div>
            <HeaderBootstrap />
            <HeaderMenu />
    </>
)}

export default memo(Header)
