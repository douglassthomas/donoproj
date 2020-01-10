import React, {Component} from 'react'


class HomeJumbotron extends Component{

    constructor(){
        super()

        this.state={
            windowWidth:1280
        }
    }

    componentDidMount(){
        window.addEventListener('resize', ()=>{
            this.setState({
                windowWidth:window.outerWidth
            })
        })
    }

    render(){
        return(
            <>
                <div className='jumbotron-container'>
                    <div style={{
                        width:'100%',
                        height:'100vh',
                        position:'absolute',
                        backgroundColor:'#00000070',
                        zIndex: 0
                    }}></div>

                    {   
                        window.innerWidth<1024?'':
                        <iframe className="yt_video" width="300%" height="300%" src="https://www.youtube.com/embed/videoseries?list=PLa2ytrvv27JoYNpU9rctcH3TWPOtwP6ep&autoplay=1&mute=1&loop=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen="" include=""></iframe>
                    }
                    <div className='jumbotron-content'>
                        <img className='phone-img' width='410px' height='auto' src='../../assets/phone_dono_transparent.png'/>
                        <div className='header-content'>
                            <h1 className='t1'>
                                Apa pun transaksinya selalu ada DONO
                            </h1>
                            <h1 className='gantidompet'>
                                #GANTIDOMPET
                            </h1>
                        </div>
                    </div>
                
                </div>
            </>
        )
    }


}

export default HomeJumbotron