import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from './overview/List'
import { Calendar, Target, UserCheck, Users } from 'react-feather';

const recents = [
  {
    category: "社交群組",
    name: "虎尾玩透透",
    time: "Mon Dec 13 - Tue Dec 14",
    icon: <Users color='orange' size='24px'/>,
    people: "2/4",
    intros: "簡介：我們這團想去體驗虎尾的鄉村美，預計會探訪鐵橋等景點",
    link: "http://line.me/ti/g/duHaaKnCKy"
  },
  {
    category: "社交群組",
    name: "虎尾嗨起來",
    time: "Mon Dec 22",
    icon: <Users color='#eb345f' size='24px'/>,
    people: "2/4",
    intros: "簡介：一起來嗨！！",
    link: "http://line.me/ti/g/duHaaKnCKy"
  },
  {
    category: "社交群組",
    name: "虎尾GOGOGO",
    time: "Mon Dec 10",
    icon: <Users color='green' size='24px'/>,
    people: "3/8",
    intros: "簡介：打算隨意亂走，已經預約一名導遊跟我們一起出遊",
    link: "http://line.me/ti/g/duHaaKnCKy"
  },
  {
    category: "社交群組",
    name: "虎尾嗨起來",
    time: "Mon Dec 11",
    icon: <Users color='purple' size='24px'/>,
    people: "2/2",
    intros: "簡介：想找想深度了解虎尾的人們，不拘性別歡迎大家",
    link: "http://line.me/ti/g/duHaaKnCKy"
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