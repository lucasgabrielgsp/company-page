import React from 'react'
import { Images } from './styled'

function ImagesHolder() {
    return (
        <div>
            <Images>
                <div>
                    <img src='pic4.jpg' alt='people'/>
                    <img src='pic5.jpg' alt='people'/>
                    <img src='pic6.jpg'alt='people'/>
                </div>
                <div>
                    <h1>Junte-se a nós!</h1>
                </div>
            </Images>
        </div>
    )
}

export default ImagesHolder
