import React from "react"
import "./DetailPage.css"
import { useParams } from "react-router-dom"
import { LargeRecipe } from "../../Components"

const DetailPage: React.FC = () => {
  const { recipeId } = useParams()
  return <LargeRecipe id={recipeId ? parseInt(recipeId) : 0} />
}

export default DetailPage
