import React from 'react';

const DonutReviewPhotoField = (props) => {
  return(
    <label  className="form-label">{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutReviewPhotoField}
      />
    </label>
  );
}

export default DonutReviewPhotoField;
