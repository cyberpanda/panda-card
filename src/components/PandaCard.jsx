/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const pandaImage = "https://pixabay.com/get/g7ae6e6d45b98d9f40accaaa7fd62dfc819636df8705a67e9dcb3bae94cf84fb149b7dba49453b09114b91f1057f0a31087dea99c825621c092740bc490d2672e7cb58c8cc27cf3c2414c1b332e7aed00_640.png"

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