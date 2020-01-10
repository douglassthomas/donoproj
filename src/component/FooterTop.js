import React from 'react'


export default function FooterTop(props){
    return(
        <div style={{marginTop:'100px'}} className='download-footer'>
            <div>
                <img src='../../assets/p9-dono-splashcreen.png' style={{
                    width:'180px', 
                    marginBottom:'120px'
                }}/>
                <video controls loop muted autoPlay className="inivideo" width="165px">
                    <source src="../../assets/vid.mp4" type="video/mp4"/>
                </video>
            </div>
            
            <div className='download-footer-content'>
                <h1 className='about-title'>#GANTIDOMPET Sekarang</h1>
                <p className='about-text'>Download DONO Now</p>
                <div className='btn-download-container'>
                    <div className='divider'>
                        <img className='img-download' src='../../assets/download_play.png' width='180px'/>
                    </div>
                    <div className='divider'>
                        <img className='img-download' src='../../assets/download_app.png' width='180px' />
                    </div>
                </div>
            </div>
        </div>
    )
}