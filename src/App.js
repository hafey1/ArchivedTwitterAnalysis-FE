import React, { useEffect, useState } from "react";
import "./App.css";
import { ScreenType } from "./util/mediaQueryh";
import Button from "react-bootstrap/Button";

function App() {
  const [isLoading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  const handleClick = async () => setLoading(true);

  useEffect(async () => {
    if (isLoading) {
      const result = await axios();
      setData(result.data);
      setLoading(false);
    }
  });

  return (
    <div className="App">
      <div className="Toplevel Header_nav">SeeTweet</div>

      <ScreenType>
        <div className="Toplevel Title">
          <h1 style={{ textAlign: "center" }}>
            Hello and welcome to the show where everything's made up and the
            points don't matter.
          </h1>
        </div>
        <div className="Toplevel Midpoint">
          <div>
            <Button
              variant="primary"
              size="lg"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Loading..." : "Click to load"}
            </Button>
          </div>
        </div>
        <div className="Toplevel Botpoint"></div>
      </ScreenType>
      <div className="Toplevel Footer_nav"></div>
    </div>
  );
}

export default App;
