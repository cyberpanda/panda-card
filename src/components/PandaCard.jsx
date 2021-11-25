/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const pandaImage = "https://cdn.pixabay.com/photo/2012/04/13/19/04/panda-33303_960_720.png"
function PandaCard(){
    return(
        <div id="main-card">
        <p><b>Panda</b></p>
        <img draggable="false" onmousedown="return false" style={{userDrag: 'none'}} src={pandaImage} width={70} height={70} />
        <p>Likes bamboo,<br />used to eat meat too.</p>
      </div>
    )
}

export default PandaCard
