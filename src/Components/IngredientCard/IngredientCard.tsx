import React from "react"
import "./IngredientCard.css"

interface IngredientCardProps {
  amount: number
  unit: string
  originalName: string
  aisle: string
}

const IngredientCard: React.FC<IngredientCardProps> = ({
  amount,
  unit,
  originalName,
  aisle,
}) => {
  const capitalize = (myStr: string) =>
    myStr
      .toLowerCase()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")

  return (
    <div className="ingredient-card">
      <div className="ingredient-info">
        <p className="ingredient-name">{capitalize(originalName)}</p>
        <p className="ingredient-aisle">{aisle}</p>
        <p className="ingredient-amount">{`${amount} ${unit}`}</p>
      </div>
    </div>
  )
}

export default IngredientCard
