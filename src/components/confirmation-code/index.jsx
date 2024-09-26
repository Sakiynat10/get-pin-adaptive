import React, { useState, useRef } from 'react';

const ConfirmationInput = ({ length, onVerify }) => {
    const [code, setCode] = useState(Array(length).fill(''));
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const { value } = e.target;

        if (value.match(/^[0-9]$/)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (index < length - 1) {
                inputsRef.current[index + 1]?.focus();
            }

            if (newCode.every((digit) => digit !== '')) {
                if (typeof onVerify === 'function') {
                    onVerify(newCode.join(''));
                }
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData('Text').slice(0, length);
        if (pasteData.match(/^\d+$/)) {
            const newCode = [...code];
            for (let i = 0; i < pasteData.length && i < length; i++) {
                newCode[i] = pasteData[i];
            }
            setCode(newCode);

            inputsRef.current[pasteData.length - 1]?.focus();
            if (newCode.every((digit) => digit !== '')) {
                if (typeof onVerify === 'function') {
                    onVerify(newCode.join(''));
                }
            }
        }
    };

    return (
        <div onPaste={handlePaste}>
            {code.map((digit, index) => (
                <input
                    key={index}
                    type='text'
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                    style={{
                        fontSize: '24px',
                        textAlign: 'center',
                    }}
                />
            ))}
        </div>
    );
};

export default ConfirmationInput;
