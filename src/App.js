import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h1>Created By Arun</h1>
      
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="500" height="auto" />

          <h6 >{apod.explanation}</h6>
          <pre
            style={{
              display :"flex",
              justifyContent: "center",
              alignItems: "center",
              // overflowX: "auto",
              // whiteSpace: "pre-wrap",
              // wordWrap: "break-word",
            }}
          >
            <hr />
            {/* {JSON.stringify(apod, null, 2)} */}
          </pre>
        </article>
      )}
    </div>
  )
}

export default App