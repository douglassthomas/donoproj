import React, {Component} from 'react';
import Navbar from '../component/Navbar'
import ProductJumbotron from '../component/ProductJumbotron'
import HomeJumbotron from '../component/HomeJumbotron'
import AboutDono from '../component/AboutDono'
import FooterBottom from '../component/FooterBottom';
import FooterTop from '../component/FooterTop';

class Product extends Component{
    render(){
        return(
            <>
                <Navbar mode='clavian'/>
                <ProductJumbotron/>
                <AboutDono mode='download'/>
                <FooterTop/>
                <FooterBottom/>
            </>
        )
    }
}

export default Product