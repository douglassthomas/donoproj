import React from 'react'


export default function DownloadJumbotron(props) {
    return (
        <div>
            <div className='jumbotron-container' style={{
                height: '100vh',
                position: 'relative',
                backgroundImage: 'linear-gradient(to right, #2bc1f6, #138ee9)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>

                <div className='download-content'>
                    <div className='download-header'>
                        <h1>Apa pun transaksinya selalu ada <img src='../../assets/dono-white.png' style={{
                            height: '42px'
                        }} /> </h1>
                        <h3>Download Sekarang</h3>
                        <div className='btn-download-container'>
                            <div className='divider'>
                                <img className='img-download' src='../../assets/download_play.png' width='180px' />
                            </div>
                            <div className='divider'>
                                <img className='img-download' src='../../assets/download_app.png' width='180px' />
                            </div>
                        </div>
                    </div>
                    <div className='download-animation-container'>
                        <div className='download-animation-content' style={{
                            marginTop:'90px'
                        }}>
                            <img className='download-animation' src='../../assets/p9-dono-splashcreen.png' />
                            <img width='200px' src='../../assets/p9-send-dono.png' />
                        </div>
                        <div className='download-animation-content' style={{
                            marginTop:'70px'
                        }}>
                            <img className='download-animation1' src='../../assets/p9-dono1.png' />
                            <img width='200px' src='../../assets/p9-dono.png' />
                        </div>
                        <div className='download-animation-content' style={{
                            marginTop:'50px'
                        }}>
                            <img width='200px' src='../../assets/p9-dono.png' style={{
                                width:'200px',
                                marginBottom: '50px'
                            }}/>
                            <img width='200px' src='../../assets/p9-dono-splashcreen.png' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

