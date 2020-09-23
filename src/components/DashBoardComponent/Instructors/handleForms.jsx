import React from 'react'
import { useState } from 'react'

const handleForms = () => {
    const [fileName, setFileName] = useState(null);

    const handleChange = (e)=>{
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file) {
          reader.onloadend = () => setFileName(file.name);
          reader.readAsDataURL(file);
          props.setFieldValue(props.field.name, file);
        }
    }
    return (
        <div>
            
        </div>
    )
}

export default handleForms
