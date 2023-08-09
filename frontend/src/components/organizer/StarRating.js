import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {

    const maxRating = 5;
    const starIcons = [];

    for (let i = 1; i <= maxRating; i++) {

        starIcons.push(

            <FontAwesomeIcon icon={faStar}
                key={i}
                className={i <= rating ? 'filled-star' : 'empty-star'}
            ></FontAwesomeIcon>
        );
    }
    return <div className="star-rating">{starIcons}</div>;
};


export default StarRating;