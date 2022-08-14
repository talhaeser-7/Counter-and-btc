import React from "react";
import { Row, Col } from "reactstrap"
import PropTypes from 'prop-types'
import "./styles.scss"
const ButtonUp = (props, cb) => {
    return (
        <>
        <Row>
        <Col className="col-3">
        <div className="buttonUp" onClick={()=>{props.hourUp(true)}}>
                <div className="countdownBlockBackface">
                    <div className="countdownBlock" >
                        <div>
                        <i className="bi bi-caret-up-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        <Col className="col-3 mr-4 ml-4">
        <div className="buttonUp" onClick={()=>{props.minuteUp(true)}}>
                <div className="countdownBlockBackface">
                    <div className="countdownBlock" >
                        <div>
                        <i className="bi bi-caret-up-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        <Col className="col-3">
        <div className="buttonUp" onClick={()=>{props.secondUp(true)}}>
                <div className="countdownBlockBackface">
                    <div className="countdownBlock" >
                        <div>
                        <i className="bi bi-caret-up-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        </Row>
             </>
    );
};
ButtonUp.propTypes = {
    hourUp: PropTypes.func,
    minuteUp: PropTypes.func,
    secondUp: PropTypes.func,
     }
export default ButtonUp;
