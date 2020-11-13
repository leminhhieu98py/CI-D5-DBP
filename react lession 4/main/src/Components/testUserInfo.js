import React from 'react';
import '../Assets/CSS/testUserInfo.css'

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

function CreateImg(props) {
    return (
        <div className="img">
            <img src={props.user.avatarUrl} alt={props.user.name} />
            <p>{props.user.name}</p>
        </div>
    )
}

function CreateDay(props) {
    return (
        <div className="date">
            {props.date.toLocaleDateString()}
        </div>
    )
}

function Comment(props) {
    return (
        <div className="container">
            <CreateImg user={props.author} />
            <div className="cmt-text">
                <p>{props.text}</p>
            </div>
            <CreateDay date={props.date} />
        </div>
    )
}

function DisplayUserInfo() {
    return (
        <Comment author={comment.author} text={comment.text} date={comment.date} />
    )
}

export default DisplayUserInfo;