import React from "react";
import { Row, Col } from "reactstrap"
import PropTypes from 'prop-types'
import "./styles.scss"
const ButtonDown = (props) => {
    return (
        <>
           <Row>
           <Col className="col-3">
           <div className="buttonDown" onClick={()=>{props.hourDown(true)}}>
                <div className="countdownBlockBackface">
                    <div className="countdownBlock" >
                        <div>
                        <i className="bi bi-caret-down-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
           </Col>
           <Col className="col-3 mr-4 ml-4">
           <div className="buttonDown" onClick={()=>{props.minuteDown(true)}}>
                <div className="countdownBlockBackface">
                    <div className="countdownBlock" >
                        <div>
                        <i className="bi bi-caret-down-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
           </Col>
           <Col className="col-3">
           <div className="buttonDown" onClick={()=>{props.secondDown(true)}}>
                <div className="countdownBlockBackface">
                    <div className="countdownBlock" >
                        <div>
                        <i className="bi bi-caret-down-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
           </Col>
           </Row>

           
           
           
            
        </>
    );
};
ButtonDown.propTypes = {
    hourDown: PropTypes.func,
    minuteDown: PropTypes.func,
    secondDown: PropTypes.func,
     }
export default ButtonDown;
