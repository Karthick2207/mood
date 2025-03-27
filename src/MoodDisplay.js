import React from "react";

function MoodDisplay({ mood }){
    const moods = {
        happy : "Keep smiling",
        sad : "It's Okay to be sad sometimes",
        excited : "Let's Celebrate",
        angry :"Take a deep breath",
    };
    return (<div>
    {mood ? <p>{moods[mood]}</p>:<p>Select your mood above</p>}
    </div>);
}
export default MoodDisplay;