import React, { useEffect, useState } from 'react'
import Matter from 'matter-js'
import { MatterJsModules } from '../utils/MatterJsModules';

export const Game = () => {
    const [height, setHeight] = useState(400)
    const divStyle = {
        height: `${height}px`,
      };
      useEffect(() => {
         
            const MatterNode = new MatterJsModules()
            // setMatterjsInstance(MatterNode)
            MatterNode.createModules()
            MatterNode.createBodies()
            MatterNode.events()
            MatterNode.run()
            // MatterNode.socketStuff()
            // MatterNode.updateGameScore(setScore, setCountDown, setPlayers)
            // MatterNode.gameOverListener(setIsModalOpen, setWinner)
            // MatterNode.restartGameListener(setIsModalOpen)
                
    
      
      }, [as]); // Empty dependency array to run the effect only once
    
  return (
    <div id="matter-Container" style={divStyle} className={`border-8 border-black rounded w-full max-w-[623px]}`}>   </div>
  )
}
