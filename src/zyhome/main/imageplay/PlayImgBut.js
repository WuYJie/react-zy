import React, { Component } from 'react';

class PlayImgBut extends Component {

    handleSubmit = ()=>{
        if(this.props.onSubmit){
            if(this.props.value == '>'){
                this.props.onSubmit(1);
            } else {
                this.props.onSubmit(0);
            }
        }
    }
    render() {
        return (
            <div className="playImgBut">
                <a href='#'><div id={this.props.id} onClick={this.handleSubmit}>{this.props.value}</div></a>
            </div>
        );
    }
}

export default PlayImgBut;