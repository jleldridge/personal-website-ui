import React, { Component } from 'react';

import ProjectBlurb from '../components/ProjectBlurb.js'

import amoeboidPicture from '../assets/amoeboid-preview-picture.png';
import scrawlerPicture from '../assets/scrawler-preview-picture.png';

class Projects extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Projects</h2>

                <ProjectBlurb 
                    projectName="Datawatch Monarch" 
                    technologies={["C#", "WPF", ".NET"]}
                    links={[{name:"Product website", href:"https://www.datawatch.com/our-platform/monarch/"}]}>
                    Designed and developed Data Prep Studio, Datawatch’s self service data preparation product.
                    Designed and developed UX for PDF Table Extractor, a product focused on automatic table discovery in PDF documents.
                    Helped develop US Patent: 9703766 which protects the algorithms that power PDF Table Extractor.
                </ProjectBlurb>

                <ProjectBlurb 
                    projectName="Datawatch Panopticon" 
                    technologies={["C#", "WPF", ".NET", "Java"]}
                    links={[{name:"Product website", href:"http://www.panopticon.com/"}]}>
                    Worked on-site with Panopticon Software in Stockholm, Sweden following their acquisition by Datawatch to bring Panopticon’s data visualization software into the Datawatch software suite.
                    Developed data connectors that allow Datawatch software to connect to IBM Cognos TM1, IBM Cloudant, and streaming data sources.
                </ProjectBlurb>

                <ProjectBlurb
                    projectName="Scrawler"
                    technologies={["C#", "UWP", ".NET"]}
                    links={[{name:"Source", href:"https://github.com/jleldridge/Scrawler"}]}
                    images={[scrawlerPicture]}>
                    Scrawler was a note taking / drawing app I designed primarily for the Microsoft Surface line of tablets.
                    It was mostly intended for personal use, as I was dissatisfied with many of the free drawing apps offered for the Surface.
                    The app never made it to the stage where I could polish the visuals, but it was eventually feature-complete enough to use it
                    both to take notes, and to sketch and export the icons used in the app itself (hence the sketchy appearance of the icons).
                </ProjectBlurb>

                <ProjectBlurb
                    projectName="Amoeboid"
                    technologies={["JavaScript"]}
                    links={[{name:"Play", href:"https://jleldridge.github.io/Amoeboid/"}, {name:"Source", href:"https://github.com/jleldridge/Amoeboid"}]}
                    images={[amoeboidPicture]}>
                    Amoeboid is the working name of a simple browser game that I created using vanilla javascript.
                    The game was inspired by an old flash game I used to play in school called Hungry Space.
                    The goal of the game is to eat (via collision) everything smaller than you while avoiding everything larger than you.
                    As the player eats more enemies, they gradually become larger, making more enemies edible, but also making it
                    more difficult to maneuver around larger enemies. The game is won when there are no more enemies large enough
                    to eat the player.
                </ProjectBlurb>

                <ProjectBlurb 
                    projectName="Personal Website" 
                    technologies={["JavaScript", "HTML", "ReactJS", "Bootstrap"]}
                    links={[{name:"Source", href:"https://github.com/jleldridge/website-dev"}]}>
                </ProjectBlurb>

            </div>
        );
    }
}

export default Projects;