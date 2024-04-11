import "../index.scss"
import React from "react"
import { memo } from "react"
import "./index.scss"

function HeaderTopLeft() {
    return(
        <div className="col-6 header__top_left">
            <ul>
                <li>
                    hello@gmail.com
                </li>
                <li>Free</li>
            </ul>
        </div>
    )
}

export default memo(HeaderTopLeft)