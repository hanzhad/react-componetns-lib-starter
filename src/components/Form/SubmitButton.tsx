import React from 'react';

interface SubmitButtonProps {
    onSubmit?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => (
    <button type="submit" onClick={onSubmit}>Submit</button>
);

export default SubmitButton;
