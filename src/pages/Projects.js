import React, { Component } from 'react';

import ProjectBlurb from '../components/ProjectBlurb.js'

import amoeboidPicture from '../assets/amoeboid-preview-picture.png';
import scrawlerPicture from '../assets/scrawler-preview-picture.png';

class Projects extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info" style={{marginBottom: "-50px"}}>Projects</h2>
                <div className="container">

                    <div className="row">
                        <div className="col-sm">
                            <ProjectBlurb 
                                id="monarch"
                                projectName="Datawatch Monarch" 
                                style={{paddingTop: "75px"}}
                                technologies={["C#", "WPF", ".NET"]}
                                links={[{name:"Visit product website", href:"https://www.datawatch.com/our-platform/monarch/"}]}>
                                <p className="mt-2">
                                    Monarch is Datawatch's premier self-service data preparation tool targeting Windows desktops.
                                    While working at Datawatch, I have designed and developed UI workflows and backend code for
                                    data extraction methods, data connectors, data transforms, joins, and more. I have also helped
                                    to integrate Monarch with Datawatch's <span className="font-italics">Monarch Swarm </span>
                                    server / browser based product.
                                </p>
                            </ProjectBlurb>
                        </div>

                        <div className="col-sm">
                            <ProjectBlurb 
                                id="panopticon"
                                projectName="Datawatch Panopticon" 
                                style={{paddingTop: "75px"}}
                                technologies={["C#", "WPF", ".NET", "Java"]}
                                links={[{name:"Visit product website", href:"http://www.panopticon.com/"}]}>
                                <p className="mt-2">
                                    Following their acquisition by Datawatch, I worked on-site with Panopticon Software in Stockholm
                                    to bring Panopticon’s data visualization software into the Datawatch software suite. During this time
                                    I was primarily focused on improving the software's UI, but I also created UI and backend code for
                                    data connectors that allow Datawatch software to connect to IBM Cognos TM1, IBM Cloudant, and streaming data sources.
                                    I primarily used C# and XAML, but there were occasions where I worked on backend code written in Java.
                                </p>
                            </ProjectBlurb>
                        </div>
                    </div>

                    <ProjectBlurb
                        id="scrawler"
                        projectName="Scrawler"
                        style={{paddingTop: "75px"}}
                        technologies={["C#", "UWP", ".NET"]}
                        links={[{name:"View source code", href:"https://github.com/jleldridge/Scrawler"}]}
                        images={[scrawlerPicture]}>
                        <p className="mt-2">
                            Scrawler is a note taking / drawing app I designed primarily for the Microsoft Surface line of tablets.
                            It was mostly intended for personal use, as I was dissatisfied with many of the free drawing apps offered for the Surface.
                            The app never made it to the stage where I could polish the visuals, but it was eventually feature-complete enough to use it
                            both to take notes, and to sketch and export the icons used in the app itself (hence the sketchy appearance of the icons).
                        </p>
                    </ProjectBlurb>

                    <ProjectBlurb
                        id="amoeboid"
                        projectName="Amoeboid"
                        style={{paddingTop: "75px"}}
                        technologies={["JavaScript"]}
                        links={[{name:"Play", href:"https://jleldridge.github.io/Amoeboid/"}, {name:"View source code", href:"https://github.com/jleldridge/Amoeboid"}]}
                        images={[amoeboidPicture]}>
                        <p className="mt-2">
                            Amoeboid is the working name of a simple browser game that I created using vanilla javascript.
                            The game was inspired by an old flash game I used to play in school called Hungry Space.
                            The goal of the game is to eat (via collision) everything smaller than you while avoiding everything larger than you.
                            Movement is accomplished with the WASD keys and I payed particular attention to trying to capture the slippery
                            effect of movement in a low friction environment to add challenge and finesse to the controls.
                            As the player eats more enemies, they gradually become larger, making more enemies edible, but also making it
                            more difficult to maneuver around larger enemies. The game is won when there are no more enemies large enough
                            to eat the player.
                        </p>
                    </ProjectBlurb>

                    <ProjectBlurb 
                        id="website"
                        projectName="Personal Website"
                        style={{paddingTop: "75px"}}
                        technologies={["JavaScript", "HTML", "ReactJS", "Bootstrap"]}
                        links={[{name:"View source code", href:"https://github.com/jleldridge/website-dev"}]}>
                        <p className="mt-2">
                            I developed this website for deployment on GitHub Pages using the ReactJS and Bootstrap libraries.
                        </p>
                    </ProjectBlurb>
                </div>
            </div>
        );
    }
}

export default Projects;