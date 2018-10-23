import React from 'react';

const DonutShopCityField = (props) => {
  return(
    <label className="form-label" >{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutShopCityField}
      />
    </label>
  );
}

export default DonutShopCityField;
