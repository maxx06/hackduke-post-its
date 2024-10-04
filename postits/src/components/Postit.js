import React from 'react';

export default function Postit(props){
    return (
        <div className="postit">
            {props.text}
        </div>
    );
}