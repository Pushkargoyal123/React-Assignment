import { useState } from "react";
import Button from '@material-ui/core/Button';

function NavBar(props) {

    const [color, setColor] = useState(false);
    const [writeSomething, setWriteSomething] = useState(false);

    function handleClick() {
        setWriteSomething(!writeSomething);
    }

    return (
        <div style={{ display: "flex" }}>
            <div style={{ height: "100%" }}>
                <div style={{ background: "#dfe6e9", padding: "40px", height: "100vh" }}>
                    <div className="shadow-lg" style={{ background: "white", display: "flex", padding: "10px" }}>
                        <img alt="shahrukh" src="/shahrukh.jpg" style={{ width: 50, height: 50, borderRadius: "50%" }}></img>
                        <div style={{ margin: "0 10px" }}>
                            <div style={{ fontWeight: "700" }}>Hi Reader!</div>
                            <div style={{ fontSize: "16px", color: "grey" }}>How's Your News</div>
                        </div>
                    </div>
                    <div className="shadow-lg" style={!writeSomething ? { background: "white", margin: "20px 0" } : { display: "none" }}>
                        <div style={{ fontWeight: "700" }}>View Toggle</div>
                        <div style={{ display: "flex", justifyContent: "center", padding: 10, margin: "0 10px" }}>
                            <i onClick={() => { setColor(true); props.type(true) }} style={color ? { background: "#81ecec", padding: 10, fontSize: "30px", width: 50, cursor: "pointer", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" } : { background: "#dfe6e9", padding: 10, fontSize: "30px", width: 50, cursor: "pointer", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} className="fas fa-grip-horizontal"></i>
                            <i onClick={() => { setColor(false); props.type(false) }} style={color ? { background: "#dfe6e9", padding: 10, fontSize: "30px", width: 50, cursor: "pointer", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" } : { background: "#81ecec", padding: 10, fontSize: "30px", width: 50, cursor: "pointer", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} className="fas fa-grip-vertical"></i>
                        </div>
                    </div>
                    <div className="shadow-lg" style={{ background: "white", margin: "20px 0", padding: "10px" }}>
                        <div style={{ fontWeight: "700" }}>Have A Feedback?</div>
                        <div onClick={handleClick} style={!writeSomething ? { display: "flex", cursor: "pointer", justifyContent: "center", padding: 10, background: "#81ecec", margin: "10px 10px" } : { display: "flex", cursor: "pointer", justifyContent: "center", padding: 10, background: "pink", margin: "10px 10px" }}>
                            Write Something
                        </div>
                    </div>
                </div>
            </div>
            <div style={writeSomething ? { background: "#dfe6e9", position: "absolute", right: "35%", minHeight: "100vh", borderRadius: "10px", padding: "30px", paddingRight: "140px" } : { width: 0, overflow: 'hidden' }}>
            <form>
                <div style={{ fontWeight: "600" }}>Thank You so much for taking the time!</div>
                <div style={{ color: "grey" }}>Please provide the below Details</div> <br />
                <div style={{ textAlign: "left" }}>First Name</div>
                <div style={{ textAlign: "left" }}>
                    <input required className="shadow-lg" style={{ outline: "none", border: "none" }}></input>
                </div><br />
                <div style={{ textAlign: "left" }}>Last Name</div>
                <div style={{ textAlign: "left" }}>
                    <input required className="shadow-lg" style={{ outline: "none", border: "none" }}></input>
                </div><br />
                <div style={{ textAlign: "left" }}>Address</div>
                <div style={{ textAlign: "left" }}>
                    <textarea required className="shadow-lg" style={{ outline: "none", border: "none" }} rows="5" cols="50"></textarea>
                </div><br />
                <div style={{ textAlign: "left" }}>Country</div>
                <div style={{ textAlign: "left" }}>
                    <input required className="shadow-lg" style={{ outline: "none", border: "none" }}></input>
                </div><br />
                <div style={{ textAlign: "left" }}>Email ID</div>
                <div style={{ textAlign: "left" }}>
                    <input required className="shadow-lg" style={{ outline: "none", border: "none" }}></input>
                </div><br />
                <div style={{ textAlign: "left" }}>Phone NO</div>
                <div style={{ textAlign: "left" }}>
                    <input required className="shadow-lg" style={{ outline: "none", border: "none" }}></input>
                </div> <br></br>
                <Button type="submit" className="shadow-lg" variant="contained" style={{ background: "#00b894", color: "white" }}>
                    Submit Feedback
                </Button>
                </form>
            </div>
        </div>)
}

export default NavBar;