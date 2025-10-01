import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { API_DOMAIN } from '@/utils/constent/constent';

interface AppointmentFormProps {
  onClose: () => void;
}

// Toast Component
interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-8 right-8 z-50 animate-slideIn">
      <div
        className={`
          flex items-center gap-3 min-w-[320px] px-6 py-4 rounded-2xl shadow-2xl
          backdrop-blur-md border transform transition-all duration-300
          ${
            type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }
        `}
      >
        <div
          className={`
            flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
            ${type === "success" ? "bg-green-500" : "bg-red-500"}
          `}
        >
          {type === "success" ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <p className="font-semibold text-sm">
            {type === "success" ? "Success!" : "Error!"}
          </p>
          <p className="text-sm opacity-90">{message}</p>
        </div>

        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formFields, setFormFields] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    axios
      .get(API_DOMAIN + "api/forms/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setFormFields(res.data[0].fields);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        API_DOMAIN + "api/form/save/",
        { fields: formData },
        { headers: { "Content-Type": "application/json" } }
      );
      
      // Reset form data
      setFormData({});
      onClose();
      
      // Reset the form element itself
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Show success toast
      setToast({
        message: "Your appointment has been booked successfully!",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      
      // Show error toast
      setToast({
        message: "Failed to submit form. Please try again.",
        type: "error",
      });
    }
  };

  // Separate fields by type
  const nonCheckboxFields = formFields.filter(f => f.type !== "checkbox");
  const checkboxFields = formFields.filter(f => f.type === "checkbox");

  // Group fields into rows of 2 for desktop
  const groupedFields: any[][] = [];
  for (let i = 0; i < nonCheckboxFields.length; i += 2) {
    groupedFields.push(nonCheckboxFields.slice(i, i + 2));
  }

  const renderField = (field: any, containerClass: string) => {
    if (["text", "email", "tel"].includes(field.type)) {
      return (
        <input
          type={field.type}
          placeholder={field.placeholder || field.title}
          required={field.required}
          className={containerClass}
          onChange={(e) => handleChange(field.name, e.target.value)}
          value={formData[field.name] || ""}
        />
      );
    }

    if (field.type === "date") {
      return (
        <input
          type="date"
          required={field.required}
          className={containerClass}
          onChange={(e) => handleChange(field.name, e.target.value)}
          value={formData[field.name] || ""}
        />
      );
    }

    if (field.type === "select") {
      return (
        <select
          required={field.required}
          className={containerClass}
          onChange={(e) => handleChange(field.name, e.target.value)}
          value={formData[field.name] || ""}
        >
          <option value="">{field.title}</option>
          {field.options?.map((opt: any, i: number) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }

    if (field.type === "radio") {
      return (
        <div className="flex items-center space-x-4">
          {field.options?.map((opt: any, i: number) => (
            <label key={i} className="flex items-center space-x-2">
              <input
                type="radio"
                name={field.name}
                value={opt.value}
                onChange={(e) => handleChange(field.name, e.target.value)}
                checked={formData[field.name] === opt.value}
              />
              <span className="text-sm text-gray-600">{opt.label}</span>
            </label>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Toast Notification */}
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
      
        {/* Desktop View (1024px and above) */}
        <div className="hidden md:hidden lg:block w-[90%] md:w-[800px] shadow-lg">
        {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
          <div className="bg-white rounded-lg p-6 flex flex-row items-center justify-between relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>
            <div className="w-full md:w-1/2 pr-6">
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Just focus on your fertility journey,<br />We got the rest covered!
              </h2>
              <a href="#" className="text-blue-600 text-sm mb-6 block text-center">Schedule a Consultation</a>

              <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Grouped fields in 2-column grid */}
                {groupedFields.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex flex-col md:flex-row gap-4">
                    {row.map((field, idx) => (
                      <div key={idx} className="w-full">
                        {renderField(field, "border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full")}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Checkbox (Terms & Conditions) */}
                {checkboxFields.map((field, idx) => (
                  <label key={idx} className="text-sm text-gray-500 flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) => handleChange(field.name, e.target.checked)}
                      checked={formData[field.name] || false}
                      required={field.required}
                    />
                    {field.options && field.options.length > 0 ? (
                      <>
                        {field.options[0].label.split(/(\bPrivacy Policy\b|\bT&C\b)/g).map((part: string, i: number) => {
                          if (part === "Privacy Policy" || part === "T&C") {
                            return (
                              <a key={i} href="#" className="text-blue-600 underline">
                                {part}
                              </a>
                            );
                          }
                          return part;
                        })}
                      </>
                    ) : (
                      <>
                        Clicking means you agree to our{" "}
                        <a href="#" className="text-blue-600 underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 underline">
                          T&C
                        </a>
                      </>
                    )}
                  </label>
                ))}

                <button
                  type="submit"
                  className="bg-[#1656A5] text-white py-2 rounded-lg hover:bg-[#0f3f7a] transition-colors w-full text-lg font-medium"
                >
                  Book Appointment
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/about-banner-img.png"
                alt="Family"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Medium View (768px to 1023px) */}
        <div className="hidden md:block lg:hidden xl:hidden w-[90%] md:w-[600px] shadow-lg">
        {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
          <div className="bg-white rounded-lg p-4 flex flex-col items-center relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Just focus on your fertility journey,<br />We got the rest covered!
            </h2>
            <a href="#" className="text-blue-600 text-sm mb-4 block text-center">Schedule a Consultation</a>

            <form ref={formRef} className="flex flex-col gap-3" onSubmit={handleSubmit}>
              {nonCheckboxFields.map((field, idx) => (
                <div key={idx}>
                  {renderField(field, "border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full")}
                </div>
              ))}

              {checkboxFields.map((field, idx) => (
                <label key={idx} className="text-sm text-gray-500 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={(e) => handleChange(field.name, e.target.checked)}
                    checked={formData[field.name] || false}
                    required={field.required}
                  />
                  {field.options && field.options.length > 0 ? (
                    <>
                      {field.options[0].label.split(/(\bPrivacy Policy\b|\bT&C\b)/g).map((part: string, i: number) => {
                        if (part === "Privacy Policy" || part === "T&C") {
                          return (
                            <a key={i} href="#" className="text-blue-600 underline">
                              {part}
                            </a>
                          );
                        }
                        return part;
                      })}
                    </>
                  ) : (
                    <>
                      Clicking means you agree to our Privacy Policy and T&C
                    </>
                  )}
                </label>
              ))}

              <button
                type="submit"
                className="bg-[#1656A5] text-white py-2 rounded-lg hover:bg-[#0f3f7a] transition-colors w-full text-base font-medium"
              >
                Book Appointment
              </button>
            </form>
            <img
              src="/images/about-banner-img.png"
              alt="Family"
              className="rounded-lg object-cover w-full h-fit mt-4"
            />
          </div>
        </div>

        {/* Mobile View (up to 767px) */}
        <div className="block md:hidden w-[90%] md:w-[300px] shadow-lg">
        {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
          <div className="bg-white rounded-lg p-3 flex flex-col items-center relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-3 text-center text-gray-800">
              Just focus on your fertility journey,<br />We got the rest covered!
            </h2>
            <a href="#" className="text-blue-600 text-xs mb-3 block text-center">Schedule a Consultation</a>

            <form ref={formRef} className="flex flex-col gap-2" onSubmit={handleSubmit}>
              {nonCheckboxFields.map((field, idx) => (
                <div key={idx}>
                  {renderField(field, "border border-gray-300 rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full")}
                </div>
              ))}

              {checkboxFields.map((field, idx) => (
                <label key={idx} className="text-xs text-gray-500 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-1"
                    onChange={(e) => handleChange(field.name, e.target.checked)}
                    checked={formData[field.name] || false}
                    required={field.required}
                  />
                  {field.options && field.options.length > 0 ? (
                    <>
                      {field.options[0].label.split(/(\bPrivacy Policy\b|\bT&C\b)/g).map((part: string, i: number) => {
                        if (part === "Privacy Policy" || part === "T&C") {
                          return (
                            <a key={i} href="#" className="text-blue-600 underline">
                              {part}
                            </a>
                          );
                        }
                        return part;
                      })}
                    </>
                  ) : (
                    <>
                      Clicking means you agree to our Privacy Policy and T&C
                    </>
                  )}
                </label>
              ))}

              <button
                type="submit"
                className="bg-[#1656A5] text-white py-1 rounded-lg hover:bg-[#0f3f7a] transition-colors w-full text-sm font-medium"
              >
                Book Appointment
              </button>
            </form>
            <img
              src="/images/about-banner-img.png"
              alt="Family"
              className="rounded-lg object-cover w-full h-fit mt-3"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AppointmentForm;