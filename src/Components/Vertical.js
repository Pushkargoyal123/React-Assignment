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

function Vertical(props){
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

    return( 
        <div style={close ? {display:"none", cursor:"pointer"}:{cursor:"pointer"}}>
    <div style={{margin:20, background:"white", textAlign:"left", padding:20, boxShadow:"2px 2px 10px 0px black", position:"relative"}}>
        <i onClick={()=>setClose(!close)} style={{position:"absolute", right:"10px", color:"red", fontSize:"25px", cursor:"pointer"}} className="fas fa-times"></i>
        <div style={{fontWeight:700, background:"#ecf0f1", padding:"5px 10px"}}>{props.title}</div>
        <div onClick={handleOpen} style={{color:"grey"}}>{props.body}</div>
        <img alt="information" src="" style={{width:"100%"}}></img>
    </div>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

    </div>

    
    )
}

export default Vertical;