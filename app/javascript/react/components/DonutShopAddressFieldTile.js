import React from 'react';

const DonutShopAddressField = (props) => {
  return(
    <label  className="form-label">{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutShopAddressField}
      />
    </label>
  );
}

export default DonutShopAddressField;
