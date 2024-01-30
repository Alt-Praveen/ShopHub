import { useState } from "react";

function Accordian({ faq }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse" key={faq.id}>
        <div id="accordion-collapse-heading">
          <button onClick={() => setShow(!show)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-black-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>
              {faq.question}
            </span>
            {show ?
              (
                <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" d="M9 5 5 1 1 5" />
                </svg>
              )
              :
              (
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" d="M9 5 5 1 1 5" />
                </svg>
              )}
          </button>
        </div>
        {show && (
          <div id="accordion-collapse-body" className="" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {faq.answer}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordian