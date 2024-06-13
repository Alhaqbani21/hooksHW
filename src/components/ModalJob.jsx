import React from 'react';

function ModalJob(props) {
  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            يرجى التأكيد من المعلومات المدخلة
          </h3>
          <div className="py-4">
            الأسم : <span className="text-green-500">{props.name}</span>
          </div>
          <div className="py-4">
            تاريخ الميلاد : <span className="text-green-500">{props.date}</span>
          </div>
          <div className="py-4">
            {' '}
            المدينة التي تريد العمل بها :{' '}
            <span className="text-green-500">{props.city}</span>
          </div>
          <div className="py-4">
            {' '}
            الراتب المتوقع :{' '}
            <span className="text-green-500">{props.salary}</span>
          </div>
          <div className="py-4">
            تاريخ الميلاد : <span className="text-green-500">{props.date}</span>
          </div>
          <div className="modal-action">
            <form
              className="flex gap-10 justify-center items-center w-[100%]"
              method="dialog"
            >
              <button className="btn bg-orange-600 text-white">تعديل</button>
              <button
                onClick={props.onClickSend}
                className="btn bg-green-800 text-white"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalJob;
