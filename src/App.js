import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import JOKES from './constants/joke'

const App = () => {
  const [data, setData] = useState([])
  const [item, setItem] = useState({})
  const [count, setCount] = useState(0)
  const [funny, setFunny] = useState(0)
  const [notFunny, setNotFunny] = useState(0)

  useEffect(() => {
    setData(JOKES)
    setCount(0)
  }, [])

  useEffect(() => {
    if (count >= data.length) return;
    setItem(data[count])
  }, [count, data])

  const handleFunny = (e) => () => {
    setCount(e)
    setFunny(prev => prev + 1)
  }

  const handleNotFunny = (e) => () => {
    setCount(e)
    setNotFunny(prev => prev + 1)
  }

  return (
    <div>
      <div className='nav'>
        <img src={logo} className="nav-logo" alt="logo" />
        <img src={logo} className="nav-logo" alt="logo" />
      </div>
      <div className='header'>
        <h2>A joke a day keeps the doctor away</h2>
        <h6>If you joke wrong way, your teeth have to pay. (Serious)</h6>
      </div>
      {count >= data.length ? <div className="contents">That's all the jokes for today! Come back another day!</div> : data.map((e, index) =>
        e.ID === item.ID &&
        <div className="contents" key={e.ID}>
          <p>
            {item.content}
          </p>
          <div className='divider'>
          </div>
          <div>
            <button className='btn btn-funny' onClick={handleFunny(index + 1)}>
              This is Funny!
          </button>
            <button className='btn btn-not-funny' onClick={handleNotFunny(index + 1)}>
              This is not funny.
          </button>
          </div>
        </div>
      )}
      <div className='footer'>
        <p className='footer-text'>This website is created as part of HLSolutions on developer program. The materials contained on this website are provided for general information only and do not constitute any form of advice. HLSolutions assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
        <p>Copyright 2021 HPSolutions Pte. Ltd</p>
      </div>
    </div>
  );
}

export default App;
