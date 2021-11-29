import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from './overview/List'
import { Calendar, Target, UserCheck, Users } from 'react-feather';
import Acheivement from './Acheivement'
import Gift from './Gift'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



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

const rewards = [
  {
    category: "虎尾鐵道節特別活動", 
    name: "冠軍",
    time: "虎尾限量紀念品*1",
    icon: <Target color='orange' size='24px'/>,
    intros: "總破關時間：50分鐘\n總完成關卡：10/10",
    notDelete: true,
  }
]

const Game = (props) => {
  const [getReward, setGetReward] = useState(false);
  const [open, setOpen] = useState(false);
  const [curReward, setCurReward] = useState(rewards);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    let tmpReward = [...curReward];
    tmpReward.push({
      category: "虎尾布袋戲週年競賽", 
      name: "亞軍",
      time: "虎尾紀念毛巾*1",
      icon: <Target color='purple' size='24px'/>,
      intros: "總破關時間：60分鐘\n總完成關卡：8/10",
      notDelete: true,
    })
    setCurReward(tmpReward);
  };
  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        目前成就
      </Typography>
      <Acheivement/>
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
      <Paper variant='elevation' elevation={4} style={{marginTop: 10, borderRadius:20}}>   
        {curReward.map((recent, idx) => <List data={recent} key={"list"+idx}/>)}
      </Paper>
      {/* <div style={{}}> */}
      {!getReward ? (
        <Gift getReward={getReward} setGetReward={setGetReward} handleClick={handleClick}> </Gift>
      ) : (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          成功領取獎勵！
        </Alert>
      </Snackbar>
      )}

      
      {/* </div> */}
    </>
  );
}

export default Game;