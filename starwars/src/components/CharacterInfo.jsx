import React, {useState} from 'react'

const CharacterInfo=props=>{
    const characterData=event =>{
        props.getCharacter();
    }//end characterData

    return(
        <div>
            {props.CharacterInfo}
                <button onClick={characterData}>Random Character</button>
          
           
        </div>
    )//end of return
 
}//end of characterInfo



export default CharacterInfo;