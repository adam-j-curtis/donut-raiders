import React from 'react';

const DonutReviewTextBodyField = (props) => {
  return(
    <label className="form-label" >{props.label}
      <textarea
        rows="5"
        cols="5"
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutReviewTextBodyField}
      />
    </label>
  );
}

export default DonutReviewTextBodyField;
