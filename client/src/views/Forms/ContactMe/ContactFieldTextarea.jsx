import React from 'react';

export default ({ input, placeholder, meta: { error, touched} }) => {
  return (
    <div>
      <textarea className="form-control" placeholder={placeholder} {...input}></textarea>
      <div className="text-left text-danger">
        {touched && error}
      </div>
    </div>
  )
}
