import React from 'react';

const DonutCategoryField = (props) => {

  let categories = props.allCategories.map(category => {
    return (<option key={category.id}>{category.name}</option>
    )
  })

  return(
    <label className="form-label">{props.label}
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewDonutCategoryField}
        >
          <option>--Pick your cateory, please--</option>
          {categories}
      </select>
    </label>
  );
}

export default DonutCategoryField;
