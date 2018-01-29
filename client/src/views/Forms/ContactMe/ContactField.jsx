import React from 'react';

export default ({ input, placeholder, meta: { error, touched} }) => {
  return (
    <div className="form-group">
      <input className="form-control" placeholder={placeholder} {...input} />
      <div className="text-left text-danger">
        {touched && error}
      </div>
    </div>
  )
}
