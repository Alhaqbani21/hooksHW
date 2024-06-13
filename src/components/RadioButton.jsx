import React from 'react';

function RadioButton(props) {
  return (
    <div>
      <div className="label flex" dir="rtl">
        <span className="label-text text-right">{props.name}</span>
      </div>
      <div className="flex flex-row-reverse gap-2" dir="ltr">
        <div className="form-control ">
          <label className="label cursor-pointer flex gap-3">
            <span className="label-text">نعم</span>
            <input
              type="radio"
              name={props.name}
              className="radio checked:bg-blue-500"
              value="نعم"
              checked={props.value === 'نعم'}
              onChange={() => props.onChange('نعم')}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex gap-3">
            <span className="label-text">لا</span>
            <input
              type="radio"
              name={props.name}
              className="radio checked:bg-red-500"
              value="لا"
              checked={props.value === 'لا'}
              onChange={() => props.onChange('لا')}
            />
          </label>
        </div>
      </div>
      <div className="label flex justify-center">
        <span id="error-message" className="label-text-alt text-red-700">
          {props.error}
        </span>
      </div>
    </div>
  );
}

export default RadioButton;
