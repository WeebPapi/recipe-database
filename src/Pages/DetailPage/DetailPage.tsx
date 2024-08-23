import React from "react"
import "./DetailPage.css"
import { useParams } from "react-router-dom"
import { LargeRecipe } from "../../Components"

const DetailPage: React.FC = () => {
  const { recipeId } = useParams()
  return (
    <div>
      <LargeRecipe id={recipeId ? parseInt(recipeId) : 0} />{" "}
    </div>
  )
}

export default DetailPage
