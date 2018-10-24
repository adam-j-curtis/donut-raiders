import React from 'react';

const DonutShopNameField = (props) => {
  return(
    <label  className="form-label">{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutShopNameField}
      />
    </label>
  );
}

export default DonutShopNameField;