import React, { useEffect } from "react"
import { useAppDispatch } from "../../store"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { getRecipeById } from "../../store/displayList/displayList.thunks"
import { DetailedRecipe } from "../../store/displayList/displayList.slice"

interface LargeRecipeProps {
  id: string
}

const LargeRecipe: React.FC<LargeRecipeProps> = ({ id }) => {
  const recipe = useSelector(
    (state: RootState) => state.displayList.detailedRecipe
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRecipeById(`${id}/information`))
  }, [])
  return (
    <div className="large-recipe-container">
      <div className="large-recipe-image">
        <img src={(recipe as DetailedRecipe).image} alt="recipe-image" />
      </div>
    </div>
  )
}

export default LargeRecipe
