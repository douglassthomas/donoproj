import React, { useState } from 'react'
import MenuItem from './MenuItem'
import {Link} from 'react-router-dom'



function Menu(props){
    const hamburger = {
        height:'50px', 
        width:'auto', 
        paddingBottom:'10px'
    }

    const [angka, setAngka] = useState("Download")

    return (
        <>
            {   window.innerWidth < 480?
                //ini mobile
                <div onClick={()=>props.setOpenMenu(!props.openMenu)} className='menu'>
                    <img style={hamburger} src='../assets/hamburger.png' />
                </div>
                :
                window.innerWidth < 1040?
                //ini tablet
                <div onClick={()=>props.setOpenMenu(!props.openMenu)} className='menu'>
                    <img style={hamburger} src='../assets/hamburger.png'/>
                </div>
                :
                <div className='menu'>
                    <MenuItem title='Produk' goto='/produk'/>
                    <MenuItem title='Karir' goto='/karir'/>
                    <Link to='/download'>
                        <button className='download-btn' >Download</button>
                    </Link>
                </div>
            }
        </>
    )
}

export default Menu