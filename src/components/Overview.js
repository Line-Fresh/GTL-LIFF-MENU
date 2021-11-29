import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

const Overview = (props) => {
  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        最新消息
      </Typography>
      <div style={{marginTop: '10px'}}>
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
              <img alt="" src="https://lh5.googleusercontent.com/-K0iOYZbsaws/VSJig5BQwOI/AAAAAAAA6oE/1SZQeIiU6vY/w739-h554-no/DSCN4536.JPG" />
              <p className="legend" style={{color: "white"}}>鐵道節遊戲環節即將開始</p>
          </div>
          <div>
              <img alt="" src="https://pic.pimg.tw/luckyday296/1551263049-3286907931_n.jpg" />
              <p className="legend">落羽松季，歡迎大家共襄盛舉</p>
          </div>
          <div>
              <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
              <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold', marginTop: -30}}>
        近期預約
      </Typography>
      <Paper variant='elevation' elevation={4} style={{marginTop: 10, borderRadius:20}}>   
        {recents.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
      </Paper>
    </>
  );
}

export default Overview;