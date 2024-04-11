import React from "react"
import { memo } from "react"
import "./index.scss"
import { Link } from "react-router-dom"
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return( 
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 com-xs-12">
                        <div className="footer__about">
                            <h1 className="footer__about__logo">SiviShop</h1>
                            <ul>
                                <li>Địa chỉ: ParkTuLiem</li>
                                <li>0984139524</li>
                                <li>Email: hungtccc11@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 com-xs-12">
                        <div className="footer__widget">
                            <h6>Cửa hàng</h6>
                            <ul>
                                <li>
                                    <Link to="">Liên hệ</Link>
                                </li>
                                <li>
                                    <Link to="">Thông tin về chúng toi</Link>
                                </li>
                                <li>                           
                                    <Link to="">Sản phẩm kinh doanh</Link>
                                </li>   
                            </ul>
                            <ul>
                                <li>
                                    <Link to="">Sản phẩm kinh doanh</Link>
                                </li>
                                <li>
                                    <Link to="">Giỏ hàng</Link>
                                </li> 
                                <li>                                  
                                    <Link to="">Liên hệ</Link>
                                </li>        
                                <li>                          
                                    <Link to="">Danh sách ưa thích</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 com-xs-12">
                    <div className="footer__widget">
                            <h6>Khuyến mại & ưu đãi</h6>
                            <p>Đăng ký thông tin tại đây</p>
                            <form action="#">
                                <div className="input-group">
                                    <input type="text" placeholder="Nhập email" />
                                    <button type="submit" className="button-submit">Đăng kí</button>
                                </div>
                                <div className="footer__widget__social">
                                    <div>
                                        <CiFacebook />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
)}

export default memo(Footer)