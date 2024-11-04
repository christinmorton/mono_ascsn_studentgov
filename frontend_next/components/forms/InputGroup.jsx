// 'use client';

const InputGroup = ({type, label, name, placeholder = '', class_list = ''}) => {
  return (
    <div className={`flex flex-col ${class_list}`}>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        // value={value || ''} // Ensure a controlled input
        // onChange={onChange} // Trigger onChange from the parent component
        className="border p-2 rounded"
      />
    </div>
  );
}

export default InputGroup