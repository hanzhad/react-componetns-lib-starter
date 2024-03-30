import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}:</label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
        />
    </div>
);

export default InputField;