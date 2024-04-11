import React, { useState } from 'react'
import { memo } from "react"
import { Link } from "react-router-dom"
import "./index.scss"
import { ROUTERS } from '../../../../../utls/route'

function HeaderBootstrap() {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format;

      const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },

        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },

        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    
                    name: "Thịt",
                    path: "",
                    
                },

                {
                    name: "Rau củ",
                    path: "",
                },

                {
                    name: "Đồ ăn nhanh",
                    path: "",
                }
            ]
        },

        {
            name: "Bài viết",
            path: ROUTERS.USER.HOME,
        },

        {
            name: "Liên hệ",
            path: ROUTERS.USER.HOME,
        }
      ])

  return (
    <div className="container">
    <div className="row">
        <div className="col-xl-3">
            <div className="header__logo">
                <h1>Sivishop</h1>
            </div>
        </div>
        <div className="col-xl-6">
            <nav className='header__menu'>
                <ul>
                    {menus?.map((menu, menuKey) => (
                        <li>
                            <Link to={menu?.path} key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                {menu?.name}
                                {
                                    menu.child && (
                                        <ul className='header__menu__dropdown'>
                                        {menu.child.map((childItem,childKey) => (
                                        <li key={`${menuKey} - ${childKey}`}>
                                            <Link to={childItem.path}>{childItem.name}</Link>
                                        </li>
                                        ))}
                                        </ul>
                                    )
                                }
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className="col-xl-3">
            <div className="header__cart">
                <div className="header__cart_price">
                    <span>{formatter(1001230)} </span>
                </div>
                <ul>
                    <li>
                        <Link to="#">
                            <span>5</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
</div>
</div>
  )
}

export default memo(HeaderBootstrap)