import React, { Component } from 'react'
import Play from "../assets/images/play.svg"
import '../App.css'

export default class Hero extends Component {
    render() {
        return (
            <div class="bg-hero flex pt-[100px] px-[145px] relative">
                <div>
                    <h1 className='h1 w-[548px] font-bold text-[72px] leading-[93.6px] text-white mb-[32px]'>
                        Enjoy Your Morning Coffee.
                    </h1>
                    <p className='font-500 text-[20px] text-white w-[495px] mb-[64px]'>
                        The Coofee Is Brewed By Fist Roasting The Green Coffee Beans Over Hot Coals In Brazier. Given To Opportunity
                    </p>
                    <button className='font-myfond px-[40px] py-[24px] text-[18px] text-white mb-[50px] font-700 bg-[#C99E71]'>TEST COFFEE</button>
                </div>
                <div>
                    <img className='border-[2px] p-[19px] rounded-full absolute bottom-[170px] right-[250px] mb-[20px]' src={Play} alt="" />
                    <p className=' absolute bottom-[140px] right-[245px] mb-[20px] text-white'>Play video</p>
                </div>
            </div>
        )
    }
}
