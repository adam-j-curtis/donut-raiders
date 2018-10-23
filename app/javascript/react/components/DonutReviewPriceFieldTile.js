import React from 'react';

const DonutReviewPriceField = (props) => {

  return(
    <label  className="form-label">{props.label}
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutReviewPriceField}
      >
        <option>--Pick your price, please--</option>
        <option>$</option>
        <option>$$</option>
        <option>$$$</option>
        <option>$$$$</option>
      </select>
    </label>
  );
}

export default DonutReviewPriceField;
