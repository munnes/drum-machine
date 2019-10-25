// JavaScript source code
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Sounds  from './Sounds';
import {connect} from 'react-redux';
import playPad from './playPad';

class MyDrum extends Component {
  
        playAudio(id) {
            this.props.playMe(id);
            const audioEl = document.getElementsByClassName('clip')[0]
            //id can't be use because it's set after mount in audio element
            audioEl.play() 
        }
        
    render() {
        const pad=['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
        const pads=[ ];
       
        const mapPad=pad.map((val)=>{
            return(<Button className="drum-pad btn btn-primary col-xs-4" id={val} onClick={()=>this.playAudio(val)} >{val}</Button>)
    });
        for (let i=0;i<9;i+=3){pads.push(<div className="row">{mapPad.slice(i,i+3)}</div>);}
    
    return (
        <div id="drum-machine" className="countainer-fluid">
        <div className="well text-primary" id="display">- {this.props.dis} </div>
      
<div>{pads}</div>
 
  <audio className="clip" id={this.props.des} ref="audio_tag"  src={this.props.sound}   autoPlay/>
 </div>      
);
    }
}
const mapStateToProps = (state) => {
    return {
        id: state.id,
        dis: state.dis,
        sound: state.sound
    }
}
const mapDispatchToProps = (dispatch) => 
{ 
    return { 
        playMe:(inp) => {dispatch(playPad(inp))}
       
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MyDrum);


