import { ShoppingBagIcon, StarIcon, TrophyIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ImgsViewer from "react-images-viewer";

import './Legends.scss';
import Winner2020 from '../../../resources/legends/winner_2020.jpg';
import Winner2022 from '../../../resources/legends/winner_2022.jpg';
import Poster2017 from '../../../resources/legends/poster_2017.jpg';
import Poster2020 from '../../../resources/legends/poster_2020.jpg';
import Poster2022 from '../../../resources/legends/poster_2022.jpg';

const Legends = () => {
    const imgDetails = [{
        src: Winner2022,
        caption: "@cypher33, Universal Champion (May, 2022 - Present)",
        icon: <TrophyIcon />,
        color: "blue"
    }, {
        src: Poster2022,
        caption: "@cypher33 vs @sd - Universal Championship | WrestleMania'22"
    }, {
        src: Winner2020,
        caption: "@desmond, Universal Champion (Oct 2018 - Nov 2020 ) | WrestleMania'18",
        icon: <TrophyIcon />,
        color: "blue"
    }, {
        src: Poster2020,
        caption: "@broly(c) vs @desmond vs @cypher33 vs @sd - Fatal 4-Way PUBG Match, Universal Championship | WrestleMania'18"
    }, {
        src: Poster2017,
        caption: "@sd vs @broly - 1 vs 1 Plank Match, Inaugural Universal Championship | WrestleMania'17"
    }];

    const openImageViewer = (selectedIdx) => {
        console.log(selectedIdx);
        // new ImageViewer({ images: imgDetails, currentSelected: selectedIdx });
    }

    return (
        <>
            {/* <ImgsViewer
                imgs={imgDetails}
                currImg={0}
                isOpen={true}
                // onClickPrev={this.gotoPrevious}
                // onClickNext={this.gotoNext}
                // onClose={this.closeViewer}
            /> */}
            <VerticalTimeline className="-tw-z-10 tw-cursor-pointer" lineColor="rgb(17 24 39)">
                {imgDetails.map((image, idx) => (
                    <VerticalTimelineElement
                        key={idx}
                        className="vertical-timeline-element--work tw-cursor-pointer"
                        contentStyle={{ cursor: "pointer", background: 'rgb(17, 24, 29)', color: '#fff', textShadow: "0px -15px black", fontSize: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(31, 41, 55)' }}
                        date={image.caption}
                        iconStyle={{ background: image.color || "green", color: '#fff' }}
                        icon={image.icon ? image.icon : <StarIcon />}
                        onTimelineElementClick={() => openImageViewer(idx+1) }
                    >
                        <img src={image.src} className="tw-w-full tw-cursor-pointer"/>
                    </VerticalTimelineElement>
                ))}
                
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(17, 24, 29)', color: '#fff',fontSize: "10px" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="@cypher33 - Current Universal Champion May, 2022 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<ShoppingBagIcon />}
                    
                >
                    <img src={Winner2022} className="tw-w-full"/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(17, 24, 29)', color: '#fff',fontSize: "10px" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="WrestleMania - 2k22 | @cypher33 vs @sd - Universal Championship"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<ShoppingBagIcon />}
                    
                >
                    <img src={Poster2022} className="tw-w-full"/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<ShoppingBagIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement> */}
            </VerticalTimeline>
            
        </>
    );
}

export default Legends;
