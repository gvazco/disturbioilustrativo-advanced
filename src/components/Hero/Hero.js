import React from "react"
import "./Hero.scss"
import { Icon } from "semantic-ui-react"
export default function Hero() {
  return (
    <div className="hero">
      <div className="banner">
        <div className="banner-text">
          <h1 className="responsive-headline">por amor al arte</h1>
          {/* <div className="redes">
            <Icon name="facebook" />
            <Icon name="instagram" />
            <Icon name="facebook messenger" />
            <Icon name="youtube" />
          </div> */}
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#artes-list">
          <Icon name="arrow circle down" />
        </a>
      </p>
    </div>
  )
}
