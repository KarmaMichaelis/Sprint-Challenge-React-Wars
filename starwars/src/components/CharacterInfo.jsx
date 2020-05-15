import React, {useState} from 'react'

const CharacterInfo=props=>{
    const characterData=event =>{
        props.getCharacter();
    }//end characterData

    return(
        <div>
            <button onClick={characterData}>Random Character</button>
           
        </div>
    )//end of return
 
}//end of charaterInfo



export default CharacterInfo;