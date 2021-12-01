import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Header = (props) => {
  const {state, profile} = props;

  return (
    <>
      <div style={{width: '100%', height: '70px', paddingLeft: '20px', paddingRight: '30px', paddingTop: '15px'}}>
        <div style={{float:'left', marginTop: '3px'}}>
          <Typography variant="h4" style={{fontWeight: '600'}}>
            Dashboard
          </Typography>
          <Typography variant="body1" style={{marginTop: '-5px', marginLeft:'2px', color: 'Dimgrey'}}>
            {state[0].toUpperCase() + state.slice(1)}
          </Typography>
        </div>
        <div style={{float:'right', marginRight: 45, marginTop: 10}}>
          <Avatar src={profile.pictureUrl} variant="rounded" sx={{ width: 50, height: 50 }}/>
        </div>
      </div>
    </>
  );
}

export default Header;