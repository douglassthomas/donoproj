import React, {Component, useState} from 'react'
import Menu from '../component/Menu'
import {Link} from 'react-router-dom'
import MenuItem from './MenuItem';

class Navbar extends Component{


    constructor(){
        super();

        this.state = {
            windowWith:1280,
            openMenu:false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll, true)
        window.addEventListener('resize', this.handleResize, true)
    }

    handleScroll = ()=>{
        var y = window.scrollY
        if(y>350){
            document.getElementById("navbar").className = 'navbar-sticky'
        }
        else{
            document.getElementById("navbar").className = this.props.mode=='clavian'?'navbar-clavian':'navbar'
        }
    }

    handleResize = ()=>{
        var w = window.outerWidth
        this.setState({
            windowWith:w
        })
    }

    setOpenMenu = (open)=>{
        this.setState({
            openMenu: open
        })
    }
    render(){
        return(
        <>
            <div id="navbar" className={this.props.mode=="clavian"?'navbar-clavian':'navbar'}>
                <div className={'navbar-container'}>
                    <Link to='/'>
                        <img width={window.outerWidth<480?'100vw':'180px'} height='auto' src='../../assets/dono-logo-navbar-new.png'/>
                    </Link>
                    <Menu setOpenMenu={this.setOpenMenu} openMenu={this.state.openMenu}/>
                </div>
                <div className={this.state.openMenu?'menubar':'menubar-hide'}>
                    <MenuItem mode='menubar' title='Produk' goto='/produk'/>
                    <MenuItem mode='menubar' title='Karir' goto='/karir'/>
                    <Link to='/download'>
                        <button className='download-btn' >Download</button>
                    </Link>
                </div>
            </div>
            
            
                
        </>
        )
    }

}

export default Navbar