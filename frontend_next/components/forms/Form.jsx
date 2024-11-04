// 'use client';
import React from 'react'

const Form = ({children, title, instructions = '', submitText, onSubmit}) => {
    // const [formData, setFormData] = useState({});
    const formData = {};

    const handleChange = (event) => {
        // const { name, value } = event.target;
        // setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // if (onSubmit) onSubmit(formData); // Ensure `onSubmit` is defined before calling
      };

      // Clone children to pass down form data and handleChange function
  const enhancedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange: handleChange,
      value: formData[child.props.name] || '', // Pass current value based on name
    });
  });

  return (
    <div>
      <h2>{title}</h2>
      <p>{instructions}</p>
      <form action={onSubmit} className="flex flex-col items-start justify-evenly p-6">
        {enhancedChildren}
        <div>
          <button type="submit">{submitText}</button>
        </div>
      </form>
    </div>
  );
}

export default Form