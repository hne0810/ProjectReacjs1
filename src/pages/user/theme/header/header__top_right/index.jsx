import React from "react"
import { memo } from "react"
import { Link } from "react-router-dom" // Thêm dòng này
import "../../header/index.scss"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import "./index.scss"


const HeaderTopRight = () => {
    return(
        <div className="col-6 header__top_right">
            <ul>
                <li>
                    <Link to={""}><CiFacebook /></Link>
                </li>
                <li><FaInstagram /></li>
                <span>Đăng nhập</span>
            </ul>
        </div>
    )
}

export default memo(HeaderTopRight)