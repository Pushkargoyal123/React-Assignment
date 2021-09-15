import {useState} from "react";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Horizontal(props){

  const classes = useStyles();

  const [close, setClose] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{props.title}</h2>
      <p id="simple-modal-description">
        {props.body}
      </p>
    </div>
  );

    return(<div style={close?{display:"none", width:"100%", cursor:"pointer"}:{margin:"10px 50px", width:"100%",cursor:"pointer"}} role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header" style={{height:35}}>
      <img src="..." className="rounded me-2" alt="..."/>
      <strong className="me-auto" style={{color:"black"}}>{props.title}</strong>
      <button style={{ border:"none"}} onClick={()=>setClose(!close)} type="button" aria-label="Close"> <i style={{color:"red", fontSize:"25px"}} className="fas fa-times"></i></button>
    </div>
    <div onClick={handleOpen} className="toast-body" style={{background:"white"}}>
      {props.body}
    </div>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      
  </div>)
}

export default Horizontal;