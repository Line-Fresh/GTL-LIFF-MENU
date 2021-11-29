import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from './overview/List'
import { Calendar, Target, UserCheck, Users } from 'react-feather';

const guides = [
  {
    category: "虎尾鐵道節特別活動", 
    name: "冠軍",
    time: "Mon Dec 21 2021",
    icon: <Target color='orange' size='24px'/>,
    intros: "總破關時間：50分鐘\n總完成關卡：10/10",
    notDelete: true,
  },
  {
    category: "虎尾布袋戲週年競賽", 
    name: "亞軍",
    time: "Mon Sep 21 2021",
    icon: <Target color='purple' size='24px'/>,
    intros: "總破關時間：60分鐘\n總完成關卡：8/10",
    notDelete: true,
  },
]

const Game = (props) => {

  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        目前成就
      </Typography>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        歷史戰績
      </Typography>
      <Paper variant='elevation' elevation={4} style={{marginTop: 10, borderRadius:20}}>   
        {guides.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
      </Paper>
      <br/>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        獎勵累積
      </Typography>
    </>
  );
}

export default Game;