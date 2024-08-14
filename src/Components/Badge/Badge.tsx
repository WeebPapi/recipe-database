import React, { useEffect, useState } from "react";
import "./Badge.css";

interface BadgeProps {
  type: string;
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  const [badgeColor, setBadgeColor] = useState("");

  useEffect(() => {
    switch (type) {
      case "Vegan":
        setBadgeColor("#90EE90");
        break;
      case "Vegetarian":
        setBadgeColor("#19A519");
        break;
      case "Breakfast":
        setBadgeColor("#ffde1a");
        break;
      case "Brunch":
        setBadgeColor("#f6b26b");
        break;
      case "Lunch":
        setBadgeColor("#ff8d00");
        break;
      case "Dessert":
        setBadgeColor("#5A9CD7");
        break;
      case "Snack":
        setBadgeColor("#E99393");
        break;
      default:
        setBadgeColor("");
    }
  }, []);

  return (
    <div className="badge" style={{ backgroundColor: badgeColor }}>
      {type}
    </div>
  );
};

export default Badge;
