import React from "react"
import "./HomePage.css"
import { DisplayedCards, FiltersBar } from "../../Components"

const HomePage: React.FC = () => {
  return (
    <div className="homepage-layout">
      <FiltersBar />
      <DisplayedCards />
    </div>
  )
}

export default HomePage
