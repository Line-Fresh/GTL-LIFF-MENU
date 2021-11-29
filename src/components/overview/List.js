import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const List = (props) => {
  const {data} = props

  return (
    <>
      <div style={{height: '40px', padding: 10}}>
        <div>
          <div style={{float: 'left', marginLeft: 10, marginTop: 8}}>
            {data.icon}
          </div>

          <div style={{float: 'left', marginLeft: 20}}>
          
            <Typography variant="caption" style={{color: '#484848'}}>
              {data.category}
            </Typography>
            <Typography variant="subtitle2" style={{color: 'black'}}>
              {data.name}
            </Typography>
            
          </div>
          <div style={{float: 'right', paddingTop: 20}}>
            <Typography variant="caption" style={{color: 'grey', fontSize: '30'}}>
              {data.time}
            </Typography>
          </div>
        </div>
        <div style={{clear: "both"}}></div>
      </div>
      <Divider variant="middle"/>
    </>
  );
}

export default List;