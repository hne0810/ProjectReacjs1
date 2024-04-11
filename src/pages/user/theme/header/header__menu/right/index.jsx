import React from 'react'
import { memo } from "react"
import "../index.scss"
import { FaPhoneVolume } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Right() {
  return (
        <>
    <div className='col-lg-9 hero_search_container'>
        <div className='hero_search'>
            <div className='hero_search_form'>
                <form>
                    <input type="text" value="" placeholder='Bạn đang cần gì'></input>
                    <button type='submit'>Tìm kiếm</button>
                </form>
            </div>
            <div className='hero_search_phone'>
                <div className='hero_search_phone_icon'>
                    <FaPhoneVolume />
                </div>
                <div className='hero_search_phone_test'>
                    <p>0984139524</p>
                    <span>Hỗ trợ</span>
                </div>
            </div>
        </div>
        <div className='hero_item'>
            <div className='hero_text'>
                <span>Trái cây tươi</span>
                <h2>Rau quả<br />
                sạch 100%</h2>
                <p>Miễn phí giao hàng</p>
                <Link to=""className='primary-b'>Mua ngay</Link>
            </div>
        </div>
    </div>
    </>
  )
}


export default memo(Right)