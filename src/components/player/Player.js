import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'



const Player = (props) => {
    const {name, image, salary}=props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        
        <div className="">
             <div className="Player-info" >
                    <div class="card penguin-card h-80 shadow pb-2">
                        <div id="image" class="p-4 m-3 penguin-img-bg product_item">
                            <img class="card-img-top" src={image} alt="Jacket">
                                </img>
                        </div>
                        <div class="card-body pt-0">
                            <h3 class="card-title fw-bold fs-4 t-color">Name: {name}</h3>
                        </div>
                        <div class="card-footer bg-transparent penguin-card-footer d-flex align-items-center justify-content-between ">
                            <h5 class="text-orange-color fw-bold fs-2">Salary: ${salary}</h5>
                            <button onClick={()=>handleAddPlayer(props.player)} className="btn btn-primary" ><FontAwesomeIcon icon={faUserPlus}/> Add Player</button>
                        </div>
                    </div>
                </div>  
        </div>
    );
};

export default Player;