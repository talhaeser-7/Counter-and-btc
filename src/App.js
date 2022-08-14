import React, { useState } from "react"
import "./App.scss"
import LaunchCountdown from "./components/countDown/launchCountDown"
import BitcoinCard from "./components/bitcoinCard/BitcoinCard"
import { Row, Col } from "reactstrap"
import Footer from "./components/Footer"

function App() {
  const [isChanged, setIsChanged] = useState("dark")

  return (
    <main className={`main ${isChanged}`}  >
      <Row>
        {isChanged === "light" ? (
          <Col lg="12" md="12" sm="12" xs="12" className="mb-4 mt-4" >
            <h3 style={{ color: "white" }}>Bitcoin Price</h3>
            <BitcoinCard />
          </Col>
        ) : (
          <Col lg="12" md="12" sm="12" xs="12" className="mb-4 mt-4">
            <h3 style={{ color: "white" }}>Counter</h3>
            <LaunchCountdown hours={10} minutes={0} seconds={0} />
          </Col>
        )}
      </Row>

      <button className={isChanged === "dark" ? "glow-on-hover" : "btc-on-hover"} onClick={() => {
        setIsChanged(isChanged === "dark" ? "light" : "dark")
      }}>{isChanged === "dark" ? "Check Bitcoin Price" : "Check Counter"}</button>
      <Footer />
    </main>
  );
}

export default App;
