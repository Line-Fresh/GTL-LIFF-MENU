import React, { useEffect, useState } from 'react';
import { Calendar, Target, UserCheck, Users } from 'react-feather';

const Bottom = (props) => {
  const {state, setState} = props
  
  return (
    <div style={{width: '100%', height: '100px', position:'absolute', bottom:0}}>
      <div style={{marginTop: 50, borderRadius:"50%", width: "65px", height: "65px", backgroundColor:"white", position:'absolute', left:"50%", transform: "translate(-50%,-50%)", boxShadow:'0 -20px 20px -20px #9E9E9E' }}
          onClick={() => (setState('overview'))}>
        <div style={{marginTop:30, borderRadius:"50%", width: "80%", height: "80%", backgroundColor:"white", position:'absolute', left:"50%", transform: "translate(-50%,-50%)", boxShadow:'0px 0px 2px #9E9E9E'}}>
          <img src="https://i.imgur.com/ywipe6l.png" 
            style={{width: "100%", borderRadius:"50%"}}
          />
        </div>
      </div>
      <div style={{width: '100%', height: '80px', borderRadius: '25px', marginTop:40, boxShadow:'0px 0px 20px #9E9E9E', paddingTop: 20}}>
        <UserCheck color={state==="guide"? 'DodgerBlue': 'grey'} size={state==="guide"? '23px': '20px'} style={{marginLeft: "13%", float: "left"}} onClick={() => (setState('guide'))}/>
        <Calendar color={state==="reservation"? 'DodgerBlue': 'grey'} size={state==="reservation"? '23px': '20px'} style={{marginLeft: "10%", float: "left"}} onClick={() => (setState('reservation'))}/>
        <Target color={state==="game"? 'DodgerBlue': 'grey'} size={state==="game"? '23px': '20px'} style={{marginRight: "13%", float: "right"}} onClick={() => (setState('game'))}/>
        <Users color={state==="social"? 'DodgerBlue': 'grey'} size={state==="social"? '23px': '20px'} style={{marginRight: "10%", float: "right"}} onClick={() => (setState('social'))}/>
      </div>
    </div>
  );
}

export default Bottom;