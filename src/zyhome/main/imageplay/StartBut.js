import React, { Component } from 'react';

class StartBut extends Component {

    handleStart=()=>{
        if(this.props.onStart){
            this.props.onStart();
        }
    }

    addPlayTime=(flag)=>{
        if(this.props.reviseTime){
            if(this.props.nowTime != 5000){
                this.props.reviseTime(+500);
            }
        }
    }

    reducePlayTime=()=>{
        if(this.props.reviseTime){
            if(this.props.nowTime != 0){
                this.props.reviseTime(-500);
            }
        }
    }

    render() {
        return (
            <div>
                <div id='isPlay' onClick={this.handleStart}>
                    <a href='#'>{this.props.isStart?'开始':'暂停'}</a>
                </div>
                <div>
                    <span className="controlTime">当前图片切换时间间隔为</span>
                    <span className="controlTime" id="showTime">{this.props.nowTime/1000}</span>
                    <span className="controlTime">秒</span>
                    <a href="#" id="reduce" onClick={this.reducePlayTime}><span className="controlTime" id="controlReduce">-0.5s</span></a>
                    <a href="#" id="add" onClick={this.addPlayTime}><span className="controlTime" id="controlAdd">+0.5s</span></a>
                </div>
            </div>
        );
    }
}

export default StartBut;