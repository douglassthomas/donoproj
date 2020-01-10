import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class MenuItem extends Component{

    
    render(){
        return(
            <>
                <Link className={this.props.selected?'menu-item menu-selected':'menu-item'} to={this.props.goto} >{this.props.title}</Link>
            </>
        )
    }

    

}

export default MenuItem