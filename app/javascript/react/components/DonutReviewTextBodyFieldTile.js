import React from 'react';

const DonutReviewTextBodyField = (props) => {
  return(
    <label className="form-label" >{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutReviewTextBodyField}
      />
    </label>
  );
}

export default DonutReviewTextBodyField;
