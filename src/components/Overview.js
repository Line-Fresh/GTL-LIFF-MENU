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
    icon: <Calendar color='orange' size='24px'/>,
    people: "大人5/小孩2",
  },
  {
    category: "社交群組",
    name: "虎尾玩透透",
    time: "Mon Dec 13 - Tue Dec 14",
    icon: <Users color='green' size='24px'/>,
    people: "2/4",
    intros: "簡介：我們這團想去體驗虎尾的鄉村美，預計會探訪鐵橋等景點"
  },
  {
    category: "景點預約",
    name: "雲林布袋戲館導覽",
    time: "Mon Dec 20 17:00",
    icon: <Calendar color='orange' size='24px'/>,
    people: "大人5/小孩2",
  },
  {
    category: "導遊預約", 
    name: "Andy",
    time: "Mon Dec 21 17:00",
    icon: <UserCheck color='purple' size='24px'/>,
    intros: "自我介紹：\n在地虎尾人，目前就讀虎尾科大、平常喜歡山林、時常和朋友相約到不同的步道走踏。記憶力極好，除了背下圓周率後50位、對於方向感也很有自信、給我帶路準沒錯！！\n\n導遊亮點：\n1.帥帥高高白白淨淨、知書達禮，\n2.可以提供各種景點間的捷徑\n3.有常備汽車、可順便充當司機帶你在虎尾蛇來蛇去、一身清爽地玩遍虎尾商圈～"
  },
  {
    category: "社交群組",
    name: "虎尾嗨起來",
    time: "Mon Dec 22 10:00",
    icon: <Users color='green' size='24px'/>,
    people: "2/4",
    intros: "簡介：一起來嗨！！"
  },
]

const news = [
  {
    pic_url: "https://lh5.googleusercontent.com/-K0iOYZbsaws/VSJig5BQwOI/AAAAAAAA6oE/1SZQeIiU6vY/w739-h554-no/DSCN4536.JPG",
    caption: "鐵道節遊戲環節即將開始"
  },
  {
    pic_url: "https://pic.pimg.tw/sai083/1565080244-1582099077.png",
    caption: "虎珍堂加入霹靂虎尾OA合作夥伴"
  },
  {
    pic_url: "https://pic.pimg.tw/luckyday296/1515158764-388050075_n.jpg",
    caption: "雲林落羽松季，歡迎大家共襄盛舉"
  },
  {
    pic_url: "https://i.imgur.com/fsiGywd.png",
    caption: "最新貼圖合作X知名畫家方塊"
  },
  {
    pic_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpM8B3LKtV4p7d_n3PyGvao5rPfUucqN_0A&usqp=CAU",
    caption: "霹靂虎尾OA正式上線！"
  },
]

// {guides.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
const Overview = (props) => {
  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        最新消息
      </Typography>
      <div style={{marginTop: '10px'}}>
        <Carousel autoPlay={true} infiniteLoop={true}>
          {news.map((n, idx) => (
            <div key={"carousel"+idx}>
              <img src={n.pic_url}/>
              <p className="legend">{n.caption}</p>
            </div>)
          )}
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