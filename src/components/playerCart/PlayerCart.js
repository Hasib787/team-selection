import React from 'react';

const PlayerCart = (props) => {
    const playerCart = props.playerCart;
    const player = props.playerCart;
    
    const totalBudget = playerCart.reduce((sum, player)=> sum + player.salary, 0)

    return (
        <div>
            <h2>Selected Player List</h2>
            <h5>Total Player Selected: {playerCart.length}</h5>
            <h6>Player Name: </h6>
            {
                player.map(selectedPlayerName=><li>{selectedPlayerName.name}</li> )
            }
            <br/>
            <h4>Total Budget: {totalBudget}</h4>
        </div>
    );
};

export default PlayerCart;