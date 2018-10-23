import React from 'react';

const DonutShopStateField = (props) => {
  return(
    <label  className="form-label">{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutShopStateField}
      />
    </label>
  );
}

export default DonutShopStateField;
