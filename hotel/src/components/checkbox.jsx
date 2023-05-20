import React from 'react';

export default function Checkbox() {
  return (
    <div className="row my-3">
      <div className="col-4 form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Default checkbox
        </label>
      </div>

      <div className="col-4">
        Number of heads
      </div>
      
      <div className="col-4">
        Icon
      </div>
    </div>
  );
}
