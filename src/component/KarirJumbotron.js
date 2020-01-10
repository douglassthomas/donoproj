import React, { Component } from 'react';
import Carousel from 're-carousel';

class KarirJumbotron extends Component {
    render() {
        return (
            <>
                <div className='jumbotron-container-medium'>
                    <div style={{
                        width: '100%',
                        height: '60vh',
                        position: 'absolute',
                        backgroundColor: '#00000070',
                        // backgroudImage: 'url("../../assets/power-ranger.jpg")',
                        zIndex: 0
                    }}></div>
                    <img className='power-ranger' src='../../assets/power-ranger.jpg' style={{backgroundRepeat : 'no-repeat', backgroundSize:'contain', width:'100%'}} />

                    <div className='jumbotron-content-center'>
                        <div className='header-content'>
                            <h1 className="t1-center">Siap untuk berubah hari ini ?</h1>
                        </div>
                    </div>
                </div>

                <div className='jumbotron-content-vertical'>
                    <div className='header-content-center'>
                        <h1 className='underline-title'>Kerja di DONO</h1>
                    </div>
                    <div className='jumbotron-content-horizontal'>
                        <div className='content-grid'>
                            <img src='../../assets/diagram.png' width='50%' height='50%'></img>
                            <h3>Gaji yang kompetitif</h3>
                            <p>Lewat budaya bekerja yang fleksibel, kreatif, serta berorientasi pada hasil, DANA memberikan kenyamanan serta keleluasaan bekerja yang lebih luwes untuk inovasi serta kreasi yang lebih total.</p>
                        </div>
                        <div className='content-grid'>
                            <img src='../../assets/chat.png' width='50%' height='50%'></img>
                            <h3>Jenjang karir yang jelas</h3>
                            <p>Lewat budaya bekerja yang fleksibel, kreatif, serta berorientasi pada hasil, DANA memberikan kenyamanan serta keleluasaan bekerja yang lebih luwes untuk inovasi serta kreasi yang lebih total.</p>
                        </div>
                        <div className='content-grid'>
                            <img src='../../assets/clock.png' width='50%' height='50%'></img>
                            <h3>Jam kerja fleksibel</h3>
                            <p>Lewat budaya bekerja yang fleksibel, kreatif, serta berorientasi pada hasil, DANA memberikan kenyamanan serta keleluasaan bekerja yang lebih luwes untuk inovasi serta kreasi yang lebih total.</p>
                        </div>
                    </div>
                    <div className='header-content-center'>
                        <h1 className='underline-title'>Katanya DONO</h1>
                        <div className='content-slide'>
                            <Carousel auto>
                                <div style={{ backgroundImage:'url(../../assets/anak.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain', height: '100%'}}></div>
                                <div style={{ backgroundImage:'url(../../assets/asix.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain', height: '100%' }}></div>
                                <div style={{backgroundImage:'url(../../assets/santuy.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain', height: '100%' }}></div>
                            </Carousel>
                        </div>
                    </div>
                    <div className='header-content-center'>
                        <h1 className='underline-title'>Mau Bagian Apa ?</h1>
                        <div className='jumbotron-content-horizontal'>
                            <h3 className='sub-title-underline'>Semua</h3>
                            <h3 className='sub-title'>Bandung</h3>
                            <h3 className='sub-title'>Jakarta</h3>
                            <h3 className='sub-title'>Bali</h3>
                            <h3 className='sub-title'>Yogyakarta</h3>
                        </div>
                        <div className='jumbotron-content-horizontal'>
                            <div className='grid-item' style={{backgroundImage:'url(../../assets/technology.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/marketing.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/product.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                        </div>
                        <div className='jumbotron-content-horizontal'>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/communication.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/innovation.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/operation.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                        </div>
                        <div className='jumbotron-content-horizontal'>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/bussiness.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/people.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/legal.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                        </div>
                        <div className='jumbotron-content-horizontal'>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/audit.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                            <div className='grid-item'style={{backgroundImage:'url(../../assets/finance.png)', backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default KarirJumbotron