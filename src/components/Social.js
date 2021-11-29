import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from './overview/List'
import { Calendar, Target, UserCheck, Users } from 'react-feather';

const recents = [
    {
      category: "景點預約",
      name: "古蹟 虎尾糖廠導覽",
      time: "Mon Dec 20 09:00",
      icon: <Calendar color='orange' size='24px'/>
    },
    {
      category: "社交群組",
      name: "虎尾玩透透",
      time: "Mon Dec 20 13:00",
      icon: <Users color='green' size='24px'/>
    },
    {
      category: "景點預約",
      name: "雲林布袋戲館導覽",
      time: "Mon Dec 20 17:00",
      icon: <Calendar color='orange' size='24px'/>
    },
    {
      category: "導遊預約", 
      name: "Johnson Hung",
      time: "Mon Dec 21 17:00",
      icon: <UserCheck color='purple' size='24px'/>
    },
    {
      category: "社交群組",
      name: "虎尾嗨起來",
      time: "Mon Dec 22 10:00",
      icon: <Users color='green' size='24px'/>
    },
  ]

const Social = (props) => {

  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        社交群組情形
      </Typography>
      <Paper variant='elevation' elevation={4} style={{marginTop: 10, borderRadius:20}}>   
        {recents.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
      </Paper>
    </>
  );
}

export default Social;