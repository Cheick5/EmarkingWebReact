import React from "react";
import "../Styles/styles_comment_tooltip.css";
import { useState } from "react";
const CommentToolTip = ({
  comment,
  author,
  posx,
  posy,
  pageno,
  show,
  setShowToolTip,
}) => {
  if (show == false) {
    return null;
  }

  const [hover, setHover] = useState("");

  const handleMouseOver = (e, criterionid) => {
    // console.log("mouse over")
    setHover(true);
  };

  const handleMouseOut = (e, criterionid) => {
    if (hover == true) {
      setShowToolTip(false);
    }
  };

  return (
    <div
      className="InvisDiv"
      onMouseLeave={(e) => handleMouseOut(e, comment.criterionid)}
      style={{
        left: `${posx * 100}%`,
        top: `${posy * 100}%`,
        translate: "20px",
      }}
    >
      {/* This div is here to make the border a little bit bigger */}
      <div
        className="CommentTooltipContainer"
        onMouseOver={(e) => handleMouseOver(e, comment)}
      >
        <div className="Comment">{comment}</div>

        <div className="Author">{author}</div>
      </div>
    </div>
  );
};

export default CommentToolTip;
