import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import DownloadJumbotron from '../component/DownloadJumbotron'
import FooterBottom from '../component/FooterBottom';


class Download extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <DownloadJumbotron/>
                <FooterBottom/>
            </>
            
        )
    }
}

export default Download
