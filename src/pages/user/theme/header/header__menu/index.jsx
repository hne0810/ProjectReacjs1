import React from 'react'
import { memo } from "react"
import "./index.scss"
import Left from './left';
import Right from './right';

function HederMenu() {
  return (
    <div className='container'>
        <div className='row hero_categories_container'>
            <Left />
            <Right />
        </div>
    </div>
  )
}


export default memo(HederMenu)
                    