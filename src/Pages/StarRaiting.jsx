import React from "react";

function StarRating({ rating, reviews }) {
  // Tính số sao đầy, nửa sao, và sao rỗng
  const fullStars = Math.floor(rating); // Sao đầy
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Sao nửa
  const emptyStars = 5 - fullStars - halfStar; // Sao rỗng

  return (
    <div className="star-rating">
      {/* Hiển thị sao đầy */}
      {[...Array(fullStars)].map((_, index) => (
        <i className="fas fa-star" key={`full-${index}`} ></i>
      ))}

      {/* Hiển thị nửa sao nếu có */}
      {halfStar === 1 && <i className="fas fa-star-half-alt" ></i>}

      {/* Hiển thị sao rỗng */}
      {[...Array(emptyStars)].map((_, index) => (
        <i className="far fa-star" key={`empty-${index}`}></i>
      ))}

      {/* Hiển thị tổng số đánh giá */}
      <span className="rating-text" style={{ marginLeft: "8px" }}>
        {rating.toFixed(2)} 
      </span>
    </div>
  );
}

export default StarRating;
