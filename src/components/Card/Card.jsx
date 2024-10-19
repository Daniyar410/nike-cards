import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
     <div className="card card1">
              <img src="https://i.ibb.co/cNWqxGx/red.png" alt="" />
              <h2>Lorem ipsum dolor sit.</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <h3>$999</h3>

              <div>
                <button>Buy now</button>
                <button>❤️</button>
              </div>
            </div>
    </>
  )
}

export default Card