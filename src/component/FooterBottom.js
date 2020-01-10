import React from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'
import PrimaryButton from './PrimaryButton'

function FooterBottom(props){
    return(
        <>

            <footer className='footer'>
                <div className='footer-mid'>
                    <img width='180px' height='auto' src='../../assets/dono-logo-navbar-new.png'/>
                    <div className='social-container'>
                        <div style={{textAlign:'end', marginRight:'5px', color:'white'}}>Ikuti kami di</div>
                        <img width='auto' height='50px' style={{color:'white'}} src='../../assets/social.png'></img>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div>
                        <img width='10px' height='auto' src='../../assets/dono-logo.png'/>
                        <MenuItem title='Karir' goto='/karir'/>
                        <MenuItem title='Promo' goto='/promo'/>
                    </div>
                    <p>© 2019 DONO - PT. Dono Bukan Dana All Rights Reserved.</p>
                </div>


            </footer>

        </>
    )
}

export default FooterBottom