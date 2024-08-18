import React, { useEffect } from "react"
import { IngredientCard } from "../"
import DOMPurify from "dompurify"
import "./LargeRecipe.css"
import { useAppDispatch } from "../../store"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { getRecipeById } from "../../store/displayList/displayList.thunks"
import {
  DetailedRecipe,
  resetUrl,
} from "../../store/displayList/displayList.slice"
import { TbToolsKitchen2 } from "react-icons/tb"
import { MdSoupKitchen } from "react-icons/md"
import { FaClock } from "react-icons/fa6"
import { nanoid } from "@reduxjs/toolkit"

interface LargeRecipeProps {
  id: string
}

const LargeRecipe: React.FC<LargeRecipeProps> = ({ id }) => {
  const recipe = useSelector(
    (state: RootState) => state.displayList.detailedRecipe
  )
  const recipeAsDetailedRecipe = recipe as DetailedRecipe
  const analyzedInstructions = recipeAsDetailedRecipe.analyzedInstructions
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRecipeById(`${id}/information`))
    dispatch(resetUrl())
  }, [])
  return (
    <div className="large-recipe-container">
      <div className="large-recipe-image">
        <img src={recipeAsDetailedRecipe.image} alt="recipe-image" />
      </div>
      <div className="large-recipe-info">
        <div className="large-recipe-heading">
          <a target="blank" href={recipeAsDetailedRecipe.sourceUrl}>
            <h1>{recipeAsDetailedRecipe.title}</h1>
          </a>
          <div className="large-recipe-times">
            {recipeAsDetailedRecipe.preparationMinutes ? (
              <div className="minutes-badge preparation-minutes">
                <TbToolsKitchen2 />
                <p>
                  Time to Prepare: {recipeAsDetailedRecipe.preparationMinutes}{" "}
                  minutes
                </p>
              </div>
            ) : null}
            {recipeAsDetailedRecipe.cookingMinutes ? (
              <div className="minutes-badge cooking-minutes">
                <MdSoupKitchen />
                <p>
                  Time to Cook: {recipeAsDetailedRecipe.cookingMinutes} minutes
                </p>
              </div>
            ) : null}
            {recipeAsDetailedRecipe.readyInMinutes ? (
              <div className="minutes-badge readyIn-minutes">
                <FaClock />
                <p>Ready in {recipeAsDetailedRecipe.readyInMinutes} minutes</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="large-recipe-summary">
          <h2>Summary of recipe</h2>

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(recipeAsDetailedRecipe.summary),
            }}
            className="summary-text"
          />
        </div>
        <div className="large-recipe-ingredients">
          <h2 className="ingredients-heading">Ingredients</h2>
          <div className="large-recipe-ingredient-cards">
            {recipeAsDetailedRecipe?.extendedIngredients
              ?.slice(0, 3)
              ?.map((ingredient) => (
                <IngredientCard
                  key={nanoid(5)}
                  originalName={ingredient.originalName}
                  amount={ingredient.amount}
                  unit={ingredient.unit}
                  aisle={ingredient.aisle}
                />
              ))}
          </div>
        </div>
        <div className="large-recipe-instructions">
          <h2>Instructions</h2>
          <div className="instruction-list">
            {analyzedInstructions && analyzedInstructions.length !== 0 ? (
              <ol className="instructions-container">
                {recipeAsDetailedRecipe.analyzedInstructions[0].steps.map(
                  (item) => (
                    <li key={nanoid(5)}>
                      <p key={nanoid(5)}>{item.step}</p>
                    </li>
                  )
                )}
              </ol>
            ) : (
              <p>{recipeAsDetailedRecipe.instructions}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LargeRecipe
