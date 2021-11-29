import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from './overview/List'
import { Calendar, Target, UserCheck, Users } from 'react-feather';

const guides = [
  {
    category: "導遊預約", 
    name: "Andy",
    time: "Mon Dec 21 17:00",
    icon: <UserCheck color='purple' size='24px'/>,
    intros: "自我介紹：\n在地虎尾人，目前就讀虎尾科大、平常喜歡山林、時常和朋友相約到不同的步道走踏。記憶力極好，除了背下圓周率後50位、對於方向感也很有自信、給我帶路準沒錯！！\n\n導遊亮點：\n1.帥帥高高白白淨淨、知書達禮，\n2.可以提供各種景點間的捷徑\n3.有常備汽車、可順便充當司機帶你在虎尾蛇來蛇去、一身清爽地玩遍虎尾商圈～"
  },
]

const Guide = (props) => {

  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        導遊預約
      </Typography>
      <Paper variant='elevation' elevation={4} style={{marginTop: 10, borderRadius:20}}>   
        {guides.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
      </Paper>
      <br/>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        導遊回饋/客訴
      </Typography>
    </>
  );
}

export default Guide;