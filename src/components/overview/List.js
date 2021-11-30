import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkIcon from '@mui/icons-material/Link';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Description = ({words, icon}) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: 3,
    whiteSpace: 'pre-wrap'
  }}>
    {icon}
    <span style={{marginLeft: 10}}>{words}</span>
  </div>
)

const Link = ({link, icon}) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: 3,
    whiteSpace: 'pre-wrap'
  }}>
    {icon}
    <a style={{marginLeft: 10, textDecoration: 'none'}} href={link}>點我查看</a>
  </div>
)

const List = (props) => {
  const {data} = props
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenAlert = () => {
    setOpenAlert(true); 
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
      }
      setOpenAlert(false);
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth='lg'
        fullWidth
      >
        <div style={{borderRadius:"50%", width: "50px", height: "50px", backgroundColor:"white", position:'absolute', right:10, top:5}}>
          <img src="https://i.imgur.com/ywipe6l.png" 
            style={{width: "100%"}}
          />
        </div>
        <DialogTitle style={{fontWeight: 600}}>
          <div style={{float: 'left', marginRight: 6, marginTop: 3}}>
            {data.icon}
          </div>
          {data.category}
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" style={{color: "#585858", fontWeight: 500}}>
            {data.name}
          </Typography>
          {data.people && <Description words={data.people} icon={<PeopleOutlineIcon color="primary"/>}/>}
          {data.time && <Description words={data.time} icon={<AccessTimeIcon color="primary"/>}/>}
          {data.intros && <Description words={data.intros} icon={<InfoOutlinedIcon color="primary"/>}/>}
          {data.link && <Link link={data.link} icon={<LinkIcon color="primary"/>}/>}
        </DialogContent>
        <DialogActions>
          {!data.notDelete &&
          <Button 
            variant="contained"
            color="error"
            onClick={() => {handleOpenAlert(); setOpen(false); }}
          >取消預約/取消登記</Button>
          }
        </DialogActions>
      </Dialog>
      <div style={{height: '40px', padding: 10}} onClick={handleClickOpen}>
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
      <Snackbar  open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          已刪除！
        </Alert>
      </Snackbar> 
    </>
  );
}

export default List;