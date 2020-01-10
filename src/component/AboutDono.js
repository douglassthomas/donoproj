import React from 'react'
import PrimaryButton from '../component/PrimaryButton'

function AboutDono(props) {

    if (props.mode == 'download') {
        return (
            <></>
        )
    }
    else {
        return (
            <div className='about-container'>
                <img width='410px' height='auto' src='../../assets/photo_collage.png' />
                <div className='about-content'>
                    <h1 className='about-title'>Tentang DONO</h1>
                    <p className='about-text'>Mau bayar apapun jadi semudah lewat sentuhan doi. Lewat DONO, kamu bisa melakukan transaksi apapun dengan praktis mulai dari pembayaran tagihan, transaksi barcode scan, hingga e-commerce. #GantiDompet dan nikmati metode pembayaran yang lebih cepat, praktis dan aman.</p>
                    <PrimaryButton title='Temukan Caranya' />
                </div>
            </div>
        )
    }


}

export default AboutDono