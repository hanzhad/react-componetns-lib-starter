import React, { useState } from 'react';
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import SubmitButton from "./SubmitButton";

import './index.css';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormProps {
    handleSubmitForm: (formData: FormData) => void;
}

const Form: React.FC<FormProps> = ({ handleSubmitForm }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmitForm(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
            <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
            <TextareaField label="Message" name="message" value={formData.message} onChange={handleChange} />
            <SubmitButton />
        </form>
    );
};

export default Form;
