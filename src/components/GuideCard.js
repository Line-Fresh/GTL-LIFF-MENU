import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog'
import { makeStyles } from '@mui/styles';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { maxHeight } from '@mui/system';

const useStyles = makeStyles(theme => ({
    wrapIcon: {
      verticalAlign: 'middle',
      display: 'inline-flex'
    },
    customizeToolbar: {
      minHeight: 40,
      width: '100%', 
    }
  }));
  

const steps = [
    {
      label: '填寫基本資料',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: '評價分數',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: '意見內容',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

const GuideCard = (props) => {
    const classes = useStyles()
    const {data} = props;
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [opinion, setOpinion] = useState("");
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
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
      });


    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleRating1 = (e) => {
        console.log(e.target.value)
        setRating1(e.target.value);
    }
    const handleRating2 = (e) => {
        setRating2(e.target.value);
    }
    const handleOpinion = (e) => {
        setOpinion(e.target.value);
    }

    return (
        <>
            <Card sx={{ display: 'flex' }} style={{marginTop: "10px", marginBottom: "8px", height: "65px", borderRadius:20}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* <CardMedia
                    component="img"
                    sx={{ width: 65, borderRadius: "50%" }}
                    image={data.imgurl}
                /> */}
                    <img
                        src={data.imgurl}
                        style={{
                            width: 40, 
                            height: 50,
                            borderRadius: 5,
                            marginTop: 10,
                            marginLeft: 15
                        }}
                    />
                </Box>
                <Box >
                <CardContent style={{marginTop: "-15px"}}>
                    <div style={{ float: 'left', paddingTop:10}}>
                        <Typography variant="caption" style={{color: '#484848'}}>
                        {data.name}
                        </Typography><br/>
                        <Typography variant="subtitle2" className={classes.wrapIcon} style={{ color:'black'}}>
                        預約時間：{data.time}
                        </Typography><br/>
                    </div>
                    <div style={{ float: 'right', paddingTop: 15, paddingLeft: 45 }}> 
                    {/* <Typography variant="body2" className={classes.wrapIcon}>
                    旅遊地點：{data.place}
                    </Typography><br/> */}
                    {/* <Typography variant="subtitle2" className={classes.wrapIcon} style={{ float: 'right' }}> */}
                        <Button variant="outlined" onClick={handleOpen} size="small" style={{marginTop:"4px", maxWidth:75, maxHeight:25, float: 'right'}}>撰寫回饋</Button>
                    {/* </Typography> */}
                    </div>
                </CardContent>
                </Box>
            </Card>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            意見回饋
            </DialogTitle>
            <DialogContent>
            <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                        optional={
                            index === 2 ? (
                            <Typography variant="caption">Last step</Typography>
                            ) : null
                        }
                        >
                        {step.label}
                        </StepLabel>
                        <StepContent>
                        {
                            index == 0 ? (<div>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="姓名(required)"
                                    variant="standard"
                                    defaultValue={name}
                                    onChange={(e) => handleName(e)}
                                    /><br/><br/>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="信箱(required)"
                                    variant="standard"
                                    defaultValue={email}
                                    onChange={(e) => handleEmail(e)}
                                /> <br/>
                                </div>) : null
                        }
                        {
                            index == 1 ? (<div>
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                    >
                                    <Typography component="legend">服務態度</Typography>
                                    <Rating name="half-rating" value={rating1} max={5} precision={0.5} onChange={(e) => handleRating1(e)}/>
                                    <Typography component="legend">旅遊品質</Typography>
                                    <Rating name="half-rating" value={rating2} max={5} precision={0.5} onChange={(e) => handleRating2(e)}/>
                                </Box>
                            </div>) : null
                        }
                        {
                             index == 2 ? (<div>
                                 <TextField
                                placeholder="寫下您寶貴的意見..."
                                value={opinion}
                                multiline
                                rows={7}
                                rowsmax={10}
                                onChange={(e) => handleOpinion(e)}
                                />
                             </div>) : null
                        }
                        {/* <Typography>{step.description}</Typography> */}
                        <Box sx={{ mb: 2 }}>
                            <div>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                            </Button>
                            <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Back
                            </Button>
                            </div>
                        </Box>
                        </StepContent>
                    </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                    </Paper>
                )}
            </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => {handleOpenAlert(); handleClose(); }}>送出</Button>
            </DialogActions>
        </Dialog>
        <Snackbar  open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            我們收到您的寶貴意見了！
            </Alert>
        </Snackbar> 
      </>
    );
  }
  
  export default GuideCard;