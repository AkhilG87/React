import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
const Card = (props) => {
  return (
    <Link className="link" to="/gigs?cat=design">
      <div className="card">
        <img src={props.item.img} alt="" />
        <span className="title">{props.item.title}</span>
        <span className="desc">{props.item.desc}</span>
      </div>
    </Link>
  )
}

export default Card
