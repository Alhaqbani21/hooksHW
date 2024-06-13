import React from 'react';

function Input1(props) {
  return (
    <label className="form-control  w-[100%] ">
      <div className="label flex flex-row-reverse">
        <span className="label-text text-right">{props.name}</span>
      </div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input input-bordered  xs:max-w-xs text-right  "
        onChange={props.onChange}
        dir="rtl"
        value={props.value}
      />
      <div className="label flex justify-center">
        <span className="label-text-alt text-red-700">{props.error}</span>
      </div>
    </label>
  );
}

export default Input1;
