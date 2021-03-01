import React from 'react';

const PlayerCart = (props) => {
    const playerCart = props.playerCart;
    const name = props.name;
    const totalBudget = playerCart.reduce((sum, player)=> sum + player.salary, 0)

    return (
        <div>
            <h2>Selected Player List</h2>
            <h5>Total Player Selected: {playerCart.length}</h5>
            <p>Name: {name}</p>
            <p>Total Budget: { totalBudget}</p>
        </div>
    );
};

export default PlayerCart;