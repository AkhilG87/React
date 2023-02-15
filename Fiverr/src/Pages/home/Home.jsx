import React from 'react'
import Card from '../../components/catCard/Card'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import { cards } from '../../data'
import check from '../../assets/img/check.png'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <Featured />

      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <Card key={card.id} item={card} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src={check} alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you&apos;ll pay upfront. Your payment isn&apos;t
              released until you approve the work.
            </p>
            <div className="title">
              <img src={check} alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>

      <div className="features1">
        <div className="container">
          <div className="item">
            <div className="new">
              <span>
                <b>fiverr </b>business.
              </span>
              <div className="tt">NEW</div>
            </div>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src={check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src={check} alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>

            <button className='btn'>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
