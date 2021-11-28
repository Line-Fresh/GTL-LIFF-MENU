import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Header from '../components/Header'
import Bottom from '../components/Bottom'
import Overview from '../components/Overview'
import Game from '../components/Game'
import Reservation from '../components/Reservation'
import Guide from '../components/Guide'
import Social from '../components/Social'


const HomePage = (props) => {
  const {profile} = props;
  const [state, setState] = useState("overview")

  return (
    <div>
      <Header profile={profile} state={state}/>
        <Container maxWidth="sm" style={{paddingLeft: 25, paddingRight: 25}}>
          {(state === "overview") && <Overview />}
          {(state === "game") && <Game />}
          {(state === "reservation") && <Reservation />}
          {(state === "guide") && <Guide />}
          {(state === "social") && <Social />}
        </Container>
      <Bottom state={state} setState={setState}/>
    </div>
  );
}

export default HomePage;