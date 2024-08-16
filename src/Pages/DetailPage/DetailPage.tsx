import React from "react"
import "./DetailPage.css"
import { useParams } from "react-router-dom"
import { LargeRecipe } from "../../Components"

const DetailPage: React.FC = () => {
  const { recipeId } = useParams()
  return (
    <div>
      <LargeRecipe id={recipeId ? recipeId : ""} />{" "}
    </div>
  )
}

export default DetailPage
