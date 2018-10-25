import React from 'react';

const DonutReviewRatingField = (props) => {

  return(
    <label className="form-label" >{props.label}
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutReviewRatingField}
      >
        <option>--Pick your rating, please--</option>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </label>
  );
}

export default DonutReviewRatingField;
