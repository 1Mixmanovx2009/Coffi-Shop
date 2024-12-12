import React, { Component } from 'react'
import Logo from '../assets/images/siteLogo.svg'
import Search from '../assets/images/search.svg'
import shoppingBag from '../assets/images/shopping-bag.svg'
import { HEADER_TITLE, HEADER_TITLE2 } from '../static'
import '../App.css'

export default class Header extends Component {
  render() {
    return (
      <div className='flex items-center justify-between px-10 py-[22px] bg-[#1C1814]'>
        <ul className='flex justify-between items-center gap-[48px]'>
          {
            HEADER_TITLE?.map(item =>
              <li>
                <a className='font-700 text-[18px] text-white hover:text-[#C99E71] duration-300' href="/">{item.title}</a>
              </li>
            )
          }
        </ul>
        <img src={Logo} alt="" width={72} height={60} />
        <ul className='flex justify-between items-center gap-[48px]'>
          {
            HEADER_TITLE2?.map(item =>
              <li>
                <a  className='font-700 text-[18px] text-white hover:text-[#C99E71] duration-300' href="/">{item.title}</a>
              </li>
            )
          }
          <img src={Search} alt="" />
          <img src={shoppingBag} alt="" />
        </ul>
      </div>
    )
  }
}
