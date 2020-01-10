import React, {Component} from 'react'

class PrimaryButton extends Component{

    constructor(){
        super()

        this.state = {
            arrow: <span className='primary-btn-shade'>></span>
        }
    }

    render(){
        return(
        <button className='primary-btn' onMouseEnter={()=>{
            this.setState({
                arrow: <span className='primary-btn-shade2'>></span>
            })
        }} onMouseLeave={()=>{
            this.setState({
                arrow: <span className='primary-btn-shade'>></span>
            })
        }}>{this.props.title}
            {this.state.arrow}
        </button>
                
        )
    }



}

export default PrimaryButton