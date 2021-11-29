import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Overview from '../components/Overview'
import Game from '../components/Game'
import Reservation from '../components/Reservation'
import Guide from '../components/Guide'
import Social from '../components/Social'
import useWindowDimensions from '../components/utils/useWindowDimensions'

const HomePage = (props) => {
  const {profile} = props;
  const [state, setState] = useState("overview")
  const { height } = useWindowDimensions()

  return (
    <div style={{height:"100%", overflow: "hidden", position: "relative"}}>
      <Header profile={profile} state={state}/>
      <div style={{height: height-160, overflow: "scroll", paddingTop: 15}}>
        <Container maxWidth="sm" style={{paddingLeft: 22, paddingRight: 25, marginTop: -18, zIndex: 10 }}>
          {(state === "overview") && <Overview />}
          {(state === "game") && <Game />}
          {(state === "reservation&schedule") && <Reservation />}
          {(state === "guide") && <Guide />}
          {(state === "social") && <Social />}
        </Container>
        <br/><br/><br/>
      </div>
      <Footer state={state} setState={setState} />
    </div>
  );
}

export default HomePage;