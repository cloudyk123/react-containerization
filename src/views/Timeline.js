import React, {useState} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import "./timeline.css";
import image1 from "../images/image1.png";
import image2 from "../images/image1.png";
import image3 from "../images/image1.png";
import ReactDOM from 'react-dom/client';

const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22", "2021-03-23", "2021-03-24", "2021-03-25", "2021-03-26", "2021-03-27"];

// Description array corresponding to values
const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam 中文可以嗎",
];

const images = [image1, image2, image3];

function Time() {

    const [state, setState] = useState({value: 0, previous: 0});
    const fillingMotion = {stiffness: 150, damping: 50};
    const styles = { background: '#f8f8f8', foreground: '#7b9d6f', outline: '#dfdfdf'};
    return (

        <div>
            {/* Bounding box for the Timeline */}
            <div className='timeline'>
                <HorizontalTimeline
                    index={state.value}
                    indexClick={(index) => {
                        setState({ value: index, previous: state.value });
                    }}
                    values={ VALUES }
                    fillingMotion = {fillingMotion}
                    styles = {styles}
                    />

            </div>
            <div className='text-center'>
                {/* any arbitrary component can go here */}
                {description[state.value]}
            </div>
            <div>
                <img src={images[state.value]} className="image" alt="pic" />
            </div>
        </div>
    );
}
// ReactDOM.render(<Timeline events={events} />, document.getElementById('root'));
export default Time;