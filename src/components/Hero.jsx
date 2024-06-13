import React, { useState } from 'react';
import Input1 from './Input1';
import SubmitButton from './SubmitButton';
import CityDropdown from './CityDropdown';
import SalaryDropdown from './SalaryDropdown';
import TextArea from './TextArea';
import RadioButton from './RadioButton';
import ModalJob from './ModalJob';

function Hero() {
  const [name, setName] = useState('');
  const [nameAlert, setNameAlert] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [ageAlert, setAgeAlert] = useState('');
  const [selectedCity, setselectedCity] = useState('');
  const [selectedCityAlert, setselectedCityAlert] = useState('');
  const [salary, setSalary] = useState('');
  const [salaryAlert, setSalaryAlert] = useState('');
  const [about, setAbout] = useState('');
  const [aboutAlert, setAboutAlert] = useState('');
  const [q1Radio, setQ1radio] = useState('');
  const [q1RadioAlert, setQ1radioAlert] = useState('');
  const [q2Radio, setQ2radio] = useState('');
  const [q2RadioAlert, setQ2radioAlert] = useState('');
  const [q3Radio, setQ3radio] = useState('');
  const [q3RadioAlert, setQ3radioAlert] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  function calculateAge(date) {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  function applyToJob() {
    let valid = true;

    if (name.length < 4) {
      setNameAlert('الاسم يجب أن يكون أطول من 3 أحرف');
      valid = false;
    } else {
      setNameAlert('');
    }

    if (!birthDate) {
      setAgeAlert('تاريخ الميلاد مطلوب');
      valid = false;
    } else {
      const age = calculateAge(birthDate);
      if (age < 18 || age > 70) {
        setAgeAlert('العمر يجب أن يكون أكبر من 18 وأقل من 70');
        valid = false;
      } else {
        setAgeAlert('');
      }
    }
    if (selectedCity == '') {
      setselectedCityAlert('يرجى اختيار المدينة');
      valid = false;
    } else {
      setselectedCityAlert('');
    }
    if (salary == '') {
      setSalaryAlert('يرجى اختيار الراتب المتوقع');
      valid = false;
    } else {
      setSalaryAlert('');
    }
    if (about.length < 1) {
      setAboutAlert('الحقل مطلوب');
      valid = false;
    } else {
      setAboutAlert('');
    }
    if (q1Radio == '') {
      setQ1radioAlert('يرجى الاختيار');
      valid = false;
    } else {
      setQ1radioAlert('');
    }
    if (q2Radio == '') {
      setQ2radioAlert('يرجى الاختيار');
      valid = false;
    } else {
      setQ2radioAlert('');
    }
    if (q3Radio == '') {
      setQ3radioAlert('يرجى الاختيار');
      valid = false;
    } else {
      setQ3radioAlert('');
    }

    if (valid) {
      console.log('Form is valid and can be submitted.');
      document.getElementById('my_modal_4').showModal();
    }
  }

  return (
    <>
      {showSuccess && (
        <div className="flex justify-end p-2 bg-[#191E24]">
          <div
            role="alert"
            className="alert alert-success text-green-600 text-center flex flex-row-reverse w-[20rem]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 inline-block"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="inline-block text-white ">
              تم تسليم طلبكم بنجاح!
            </span>
          </div>
        </div>
      )}
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content text-center ">
          <div className="max-w-[100vw] flex flex-col justify-center gap-5 bg-gray-800 p-10 rounded max-md:p-14 lg:p-28">
            <h1 className="text-xl max-md:text-sm">
              نموذج تقديم على وظيفة مطور واجهات
            </h1>
            <Input1
              name="ادخل الأسم"
              onChange={(e) => {
                setName(e.target.value);
              }}
              error={nameAlert}
              type="text"
              value={name}
            />
            <Input1
              name="تاريخ الميلاد"
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
              error={ageAlert}
              type="date"
              value={birthDate}
            />
            <CityDropdown
              name="المدينة التي تريد العمل بها"
              onChange={(e) => {
                setselectedCity(e.target.value);
              }}
              error={selectedCityAlert}
              value={selectedCity}
            />
            <SalaryDropdown
              name="الراتب المتوقع"
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              error={salaryAlert}
              value={salary}
            />
            <TextArea
              name="مالذي يميزك عن الاخرين"
              onChange={(e) => {
                setAbout(e.target.value);
              }}
              value={about}
              error={aboutAlert}
            />
            <RadioButton
              name="هل انت متطلع على احدث التقنيات في مجال البرمجة"
              onChange={(e) => {
                setQ1radio(e);
              }}
              value={q1Radio}
              error={q1RadioAlert}
            />
            <RadioButton
              name="هل سبق لك العمل كمطور واجهات ويب"
              onChange={(e) => {
                setQ2radio(e);
              }}
              value={q2Radio}
              error={q2RadioAlert}
            />
            <RadioButton
              name="هل انت متمكن من مفهوم Git"
              onChange={(e) => {
                setQ3radio(e);
              }}
              value={q3Radio}
              error={q3RadioAlert}
            />
            <ModalJob
              name={name}
              date={birthDate}
              city={selectedCity}
              salary={salary}
              onClickSend={() => {
                setName('');
                setBirthDate('');
                setselectedCity('');
                setSalary('');
                setAbout('');
                setQ1radio('');
                setQ2radio('');
                setQ3radio('');
                setNameAlert('');
                setAgeAlert('');
                setselectedCityAlert('');
                setSalaryAlert('');
                setAboutAlert('');
                setQ1radioAlert('');
                setQ2radioAlert('');
                setQ3radioAlert('');
                setShowSuccess(true);
              }}
            />

            <SubmitButton onClick={applyToJob} name="تقديم" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
