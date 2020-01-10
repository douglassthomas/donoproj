import React from 'react'
import Axios from 'axios'
import {saveAs} from 'file-saver'

function Upload(props){

    return(
        <>
            <form style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                width:'100vw',
                height:'100vh',
                flexDirection:'column'
            }} id='fromnih'
            encType='multipart/form-data'
            method='POST'
            action='localhost:1010/assetDownloader.php'
            >
                {/* <input type='text' id='filename' placeholder='file name with .ext'/> */}
                <div>
                    <input type='file' name='filenih' id='filenih'/>
                    <button type='submit'>UPLOAD</button>
                </div>
                
            </form>
                
        </>
    )

    
}


export default Upload