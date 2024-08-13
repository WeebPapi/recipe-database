import React from "react";
import "./Badge.css";

interface BadgeProps {
  type: string;
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <div
      className="badge"
      style={
        type === "Vegan"
          ? { backgroundColor: "#90EE90" }
          : { backgroundColor: "#19A519" }
      }
    >
      {type}
    </div>
  );
};

export default Badge;
