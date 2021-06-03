import React from "react";

export default function Ratting(props) {
  const { ratting, numReviews } = props;
  return (
    <div className="ratting">
      <span>
        <i
          className={
            ratting >= 1
              ? "fa fa-star"
              : ratting >= 0.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
         <i
          className={
            ratting >= 2
              ? "fa fa-star"
              : ratting >= 1.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
         <i
          className={
            ratting >= 3
              ? "fa fa-star"
              : ratting >= 2.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
         <i
          className={
            ratting >= 4
              ? "fa fa-star"
              : ratting >= 3.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
         <i
          className={
            ratting >= 5
              ? "fa fa-star"
              : ratting >= 4.5
              ? "fa fa-start-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
          {numReviews + ' reviews '}
      </span>
    </div>
  );
}
