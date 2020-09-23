import React from 'react';


const InputField = ({label,placeholder,title, onChange, type, accept}) => {
    return ( 
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor={label}>
                    {label}
              </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-indigo-500" 
              type={type} value={title} placeholder={placeholder} onChange={onChange} accept={accept} required />
          </div>
        </div>
     );
}
 
export default InputField;