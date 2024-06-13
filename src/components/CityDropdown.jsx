import React from 'react';

function CityDropdown(props) {
  return (
    <label className="form-control  w-[100%]" dir="rtl">
      <div className="label flex flex-row">
        <span className="label-text text-right">{props.name}</span>
      </div>
      <select
        className="select select-bordered w-full max-w-xs text-right"
        value={props.value}
        onChange={props.onChange}
        aria-describedby="error-message"
      >
        <option value="">اختر المدينة</option>
        <option value="الرياض">الرياض</option>
        <option value="جدة">جدة</option>
        <option value="مكة">مكة</option>
        <option value="المدينة المنورة">المدينة المنورة</option>
        <option value="الدمام">الدمام</option>
        <option value="الخبر">الخبر</option>
        <option value="الظهران">الظهران</option>
        <option value="الطائف">الطائف</option>
        <option value="الجبيل">الجبيل</option>
        <option value="حائل">حائل</option>
      </select>
      <div className="label flex justify-center">
        <span id="error-message" className="label-text-alt text-red-700">
          {props.error}
        </span>
      </div>
    </label>
  );
}

export default CityDropdown;
