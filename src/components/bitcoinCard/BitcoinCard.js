import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap"
import { useSelector, useDispatch } from "react-redux"
import "./styles.scss"
import {
    getBitcoinPrice as onGetBitcoinPrice
} from "../../store/action"

const BitcoinCard = () => {
    const [isChanged, setIsChanged] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(onGetBitcoinPrice())
    }, [dispatch])
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(onGetBitcoinPrice())
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const { Price } = useSelector(state => ({
        Price: state.BitcoinPrice?.data,
    }))

    useEffect(() => {
        setIsChanged(true)
    }, [Price?.bpi?.EUR?.rate_float])

    if (isChanged === true) {
        const interval = setInterval(() => {
            setIsChanged(false)
        }, 2000);
    }
    return (
        <>
            <Row>
                <Col className="col-3">
                    <div className="buttonBtcUp">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ fontSize: "24px" }}>
                                    BTC/EUR
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3 mr-4 ml-4">
                    <div className="buttonBtcUp">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ fontSize: "24px" }}>
                                    BTC/GBP
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="buttonBtcUp">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ fontSize: "24px" }}>
                                    BTC/USD
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-3">
                    <div className="bitcoin">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ color: isChanged ? "white" : null }}>
                                    {Price?.bpi?.EUR?.rate_float.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3 mr-4 ml-4">
                    <div className="bitcoin">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ color: isChanged ? "white" : null }}>
                                    {Price?.bpi?.GBP?.rate_float.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="bitcoin">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ color: isChanged ? "white" : null }}>
                                    {Price?.bpi?.USD?.rate_float.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-3">
                    <div className="buttonBtcDown">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ fontSize: "66px" }}>
                                    €
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3 mr-4 ml-4">
                    <div className="buttonBtcDown">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ fontSize: "66px" }}>
                                    £
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="buttonBtcDown">
                        <div className="countdownBlockBackface">
                            <div className="countdownBlock" >
                                <div style={{ fontSize: "66px" }}>
                                    $
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default BitcoinCard;
