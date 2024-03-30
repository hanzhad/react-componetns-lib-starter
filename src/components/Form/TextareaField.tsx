import React from 'react';

interface TextareaFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, name, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}:</label>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required
        ></textarea>
    </div>
);

export default TextareaField;
