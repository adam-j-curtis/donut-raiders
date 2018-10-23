import React from 'react';

const DonutNameField = (props) => {
  return(
    <label className="form-label">{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutNameField}
      />
    </label>
  );
}

export default DonutNameField;
