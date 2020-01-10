import React, {Component} from 'react';
import Navbar from '../component/Navbar'
import KarirJumbotron from '../component/KarirJumbotron'
import AboutDono from '../component/AboutDono'
import FooterBottom from '../component/FooterBottom';
import FooterTop from '../component/FooterTop';



class Karir extends Component {


    render(){

        return(
        <>
            <Navbar/>
            <KarirJumbotron/>
            <AboutDono mode='download'/>
            <FooterTop/>
            <FooterBottom/>
            
        </>
        )
    }

}


export default Karir