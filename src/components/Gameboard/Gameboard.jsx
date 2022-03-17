import React, { useState } from 'react'
import { boardMatrix } from '../../WordData/Words';
import { Letter } from '../Letter/Letter';

export const Gameboard = () => {
    const [board, setBoard] = useState(boardMatrix);
  return (
    <div className='board' >
        <div className="row">
            <Letter letterPos={0} attemptVal={0} />
            <Letter letterPos={1} attemptVal={0} />
            <Letter letterPos={2} attemptVal={0} />
            <Letter letterPos={3} attemptVal={0} />
            <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={0} />
            <Letter letterPos={1} attemptVal={0} />
            <Letter letterPos={2} attemptVal={0} />
            <Letter letterPos={3} attemptVal={0} />
            <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={0} />
            <Letter letterPos={1} attemptVal={0} />
            <Letter letterPos={2} attemptVal={0} />
            <Letter letterPos={3} attemptVal={0} />
            <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={0} />
            <Letter letterPos={1} attemptVal={0} />
            <Letter letterPos={2} attemptVal={0} />
            <Letter letterPos={3} attemptVal={0} />
            <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={0} />
            <Letter letterPos={1} attemptVal={0} />
            <Letter letterPos={2} attemptVal={0} />
            <Letter letterPos={3} attemptVal={0} />
            <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
            <Letter letterPos={0} attemptVal={0} />
            <Letter letterPos={1} attemptVal={0} />
            <Letter letterPos={2} attemptVal={0} />
            <Letter letterPos={3} attemptVal={0} />
            <Letter letterPos={4} attemptVal={0} />
        </div>


    </div>
  )
}
