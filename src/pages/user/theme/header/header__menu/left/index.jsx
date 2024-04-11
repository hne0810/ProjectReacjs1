import React, { useState } from 'react'
import { memo } from "react"
import "../index.scss"
import { IoListOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Left() {
    const [isShowCategories,setisShowCategories] = useState(true)
    
  return (
            <div className='col-lg-3 hero_categories'>
                <div className='hero_categories_all' onClick={() => setisShowCategories(!isShowCategories)}>
                <IoListOutline />Danh sách sản phẩm</div>
            
                <ul className={isShowCategories ? "" : "hidden"}>
                    <li>
                        <Link to="">Thịt tươi</Link>
                    </li>
                    <li>
                    <Link to="">Rau củ</Link>
                    </li>
                    <li>
                    <Link to="">Nước trái cây</Link>
                    </li>
                    <li>
                    <Link to="">Trái cây</Link>
                    </li>
                    <li>
                    <Link to="">Hải sản</Link>
                    </li>
                </ul>
            </div>
  )
}

export default memo(Left)