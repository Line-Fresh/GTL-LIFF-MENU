import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from './overview/List'
import { Calendar, Target, UserCheck, Users } from 'react-feather';

const reservations = [
  {
    category: "景點預約",
    name: "古蹟 虎尾糖廠導覽",
    time: "Mon Dec 20 09:00",
    icon: <Calendar color='orange' size='24px'/>,
    people: "大人5/小孩2",
  },
  {
    category: "景點預約",
    name: "雲林布袋戲館導覽",
    time: "Mon Dec 20 17:00",
    icon: <Calendar color='green' size='24px'/>,
    people: "大人5/小孩2",
  },
]

const schedules = [
  {
    category: "行程表生成結果",
    name: "人文腳踏車旅遊",
    icon: <Calendar color='#e942f5' size='24px'/>,
    intros: "預計旅遊時間：6小時\n預計交通工具：腳踏車\n預計旅行類別：人文",
    link: "https://travel.line.me/r/xCdiGGc1V6",
  },
  {
    category: "行程表生成結果",
    name: "自然步行旅遊",
    icon: <Calendar color='#4299f5' size='24px'/>,
    intros: "預計旅遊時間：3小時\n預計交通工具：步行\n預計旅行類別：自然",
    link: "https://travel.line.me/r/xCdiGGc1V6",
  },
]

const Reservation = (props) => {

  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        景點預約統計/資料
      </Typography>
      <Paper variant='elevation' elevation={4} style={{marginTop: 10, borderRadius:20}}>   
        {reservations.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
      </Paper>
      <br/><br/><br/>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold', marginTop: -30}}>
        行程表生成結果
      </Typography>
      <Paper variant='elevation' elevation={4} style={{marginTop: 10, borderRadius:20}}>   
        {schedules.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
      </Paper>
    </>
  );
}

export default Reservation;