import React from 'react';

function SalaryDropdown(props) {
  return (
    <label className="form-control  w-[100%] " dir="rtl">
      <div className="label flex flex-row">
        <span className="label-text text-right">{props.name}</span>
      </div>
      <select
        className="select select-bordered w-full max-w-xs text-right"
        value={props.value}
        onChange={props.onChange}
        aria-describedby="error-message"
      >
        <option value="">اختر الراتب المتوقع</option>
        <option value="3000-8000">3000 إلى 8000</option>
        <option value="9000-13000">9000 إلى 13000</option>
        <option value="15000+">15000 وأكثر</option>
      </select>
      <div className="label flex justify-center">
        <span id="error-message" className="label-text-alt text-red-700">
          {props.error}
        </span>
      </div>
    </label>
  );
}

export default SalaryDropdown;
