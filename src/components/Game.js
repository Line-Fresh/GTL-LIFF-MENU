import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from './overview/List'

const Game = (props) => {

  return (
    <>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        目前成就
      </Typography>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        歷史戰績
      </Typography>
      <Typography variant="body2" style={{color: '#484848', fontWeight: 'bold'}}>
        獎勵累積
      </Typography>
    </>
  );
}

export default Game;