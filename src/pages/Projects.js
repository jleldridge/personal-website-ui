import React, { Component } from 'react';

import amoeboidPicture from '../assets/amoeboid-preview-picture.png';

class Projects extends Component {
    render() {
        return (
            <div className="container">

                <div>
                    <h3>Datawatch</h3>
                    <p>tbd</p>
                </div>

                <div>
                    <h3>Scrawler</h3>
                    <p>tbd</p>
                </div>

                <div className="container">
                    <h3>Amoeboid</h3>
                    <a style={{margin: '5px'}} className="btn btn-primary" href="https://jleldridge.github.io/Amoeboid/" target="_blank">Play</a>
                    <a style={{margin: '5px'}} className="btn btn-primary" href="https://github.com/jleldridge/Amoeboid" target="_blank">Source</a>
                    <img style={{height:'300px', margin:'5px', display: 'block'}} src={amoeboidPicture} alt="logo" />
                    <p>
                        Amoeboid is the working name of a simple browser game that I created using vanilla javascript.
                        The game was inspired by an old flash game I used to play in school called Hungry Space.
                        The goal of the game is to eat (via collision) everything smaller than you while avoiding everything larger than you.
                        As the player eats more enemies, they gradually become larger, making more enemies edible, but also making it
                        more difficult to maneuver around larger enemies. The game is won when there are no more enemies large enough
                        to eat the player.
                    </p>
                </div>

            </div>
        );
    }
}

export default Projects;