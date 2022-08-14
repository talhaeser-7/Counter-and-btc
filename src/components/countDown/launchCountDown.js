import React, { useEffect, useMemo, useState } from "react";
import ButtonUp from "../buttons/ButtonUp"
import ButtonDown from "../buttons/ButtonDown"
import { Row, Col } from "reactstrap"
import "./styles.scss"
const LaunchCountdown = ({ hours, minutes, seconds }) => {
    const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);
    const remainTime = useMemo(() => {
        const hours = Math.floor((time) / 3600);
        const minutes = Math.floor((time - hours * 3600) / 60);
        const seconds = (time - hours * 3600) % 60;

        return {
            hours,
            minutes,
            seconds
        }
    }, [time]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time !== 0 ? time - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const padCount = useMemo(() => {
        return String(remainTime.seconds).padStart(2, '0');
    }, [remainTime.seconds]);
    const padMinute = useMemo(() => {
        return String(remainTime.minutes).padStart(2, '0');
    }, [remainTime.minutes]);
    const padHour = useMemo(() => {
        return String(remainTime.hours).padStart(2, '0');
    }, [remainTime.hours]);

    return (
        <>
            <div >
                <ButtonUp value={"+"}
                    hourUp={(e) => {
                        if (e === true) {
                            setTime(time + 3600)
                        }
                    }}
                    minuteUp={(e) => {
                        if (e === true) {
                            setTime(time + 60)
                        }
                    }}
                    secondUp={(e) => {
                        if (e === true) {
                            setTime(time + 1)
                        }
                    }}
                />
            </div>

            <Row>
                <Col className="col-3">
                    <div className="countdown">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div>
                                    {padHour}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3 mr-4 ml-4">
                    <div className="countdown">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div>
                                    {padMinute}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="countdown">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div>
                                    {padCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <div >
                <ButtonDown
                    hourDown={(e) => {
                        if (e === true) {
                            if (time > 3600) {
                                setTime(time - 3600)
                            }


                        }
                    }}
                    minuteDown={(e) => {
                        if (e === true) {
                            setTime(time - 60)
                        }
                    }}
                    secondDown={(e) => {
                        if (e === true) {

                            setTime(time - 1)
                        }
                    }}
                />
            </div>
        </>
    );
};

export default LaunchCountdown;
