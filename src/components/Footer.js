import React from 'react'
import { Row, Col } from "reactstrap"

const Footer = () => {
    return (
        <footer>
            <Row className="fixed-bottom text-center" style={{ background: "black", color: "white" }}>
                <Col>
                    Copyright &copy; Talha Eser
                </Col>
            </Row>
        </footer>
    )
}

export default Footer