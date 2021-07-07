import React, {useState} from 'react'

const CharacterInfo=props=>{
    const characterData=event =>{
        props.getCharacter();
    }//end characterData

    return(
       <div>
           
           <button>{characterData}Random Character</button> 
         
          
           
        </div>//end of first div
    )//end of return
 
}//end of characterInfo



export default CharacterInfo;