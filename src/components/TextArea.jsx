import React from 'react';

function TextArea(props) {
  return (
    <label className="form-control" dir="rtl">
      <div className="label flex">
        <span className="label-text text-right">{props.name}</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-24 text-right"
        placeholder="يرجى الكتابة هنا"
        value={props.value}
        onChange={props.onChange}
      ></textarea>
      <div className="label flex justify-center">
        <span id="error-message" className="label-text-alt text-red-700">
          {props.error}
        </span>
      </div>
    </label>
  );
}

export default TextArea;
