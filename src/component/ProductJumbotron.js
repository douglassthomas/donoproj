import React, { Component } from 'react'

class ProductJumbotron extends Component {
    render() {
        return (
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <div className='jumbotron-container' style={{
                    height: '600px',
                    width: '100%',
                    // position: 'relative',
                    backgroundImage:'linear-gradient(to bottom, #2bc1f6, #138ee9)',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div className='product-content'>
                        <img height="500px" src='../../assets/p9-dono.png' />
                        <div className='product-header'>
                            <h1 style={{ color:'white' }}>Bayar apa pun makin mudah</h1>
                            <p style={{ color:'white'}}>Semua transaksi online/offline jadi lebih mudah dengan scan Kode QR menggunakan Saldo DONO atau Kartu Bank!</p>
                        </div>
                    </div>
                </div>
                <div className='product-content'>
                    <div className='product-header'>
                        <h1>Simpan Kartu Debit dan Kredit di DONO</h1>
                        <p>Pembayaran jadi lebih cepat dengan Kartu Debit dan Kredit bebas topup</p>
                    </div>
                    <img height="500px" src='../../assets/p9-dono1.png' />
                </div>
                <div className='product-content'>
                    <img height="500px" src='../../assets/p9-send-dono.png' />
                    <div className='product-header'>
                        <h1>Kirim DONO</h1>
                        <p>Transfer uang pakai Kirim DONO kemana pun, bebas biaya transfer antar DONO dan antar Bank jadi lebih praktis!</p>
                    </div>
                </div>
                    


            </div>
        )
    }
}

export default ProductJumbotron