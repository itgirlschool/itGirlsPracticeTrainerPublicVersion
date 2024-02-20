import React, { useEffect, useState } from 'react';
import './ConsoleErrors.scss';



const ConsoleErrors = () => {
    const [vmErrors, setVmErrors] = useState([]);
    const [otherErrors, setOtherErrors] = useState([]);

    useEffect(() => {
        const errorHandler = (event) => {
            const { message, filename, lineno, colno, error, source } = event;
            if (source === 'vm') {
                setVmErrors(prevErrors => [...prevErrors, message]);
            } else {
                setOtherErrors(prevErrors => [...prevErrors, message]);
            }
        };

        window.addEventListener('error', errorHandler);

        return () => {
            window.removeEventListener('error', errorHandler);
        };
    });

    return (
        <>
            <h2>VM Errors:</h2>
            {vmErrors.map((error, index) => (
                <span className='consoleErrors' key={`vm-${index}`}>
                    {error}
                </span>
            ))}

            <h2>Other Errors:</h2>
            {otherErrors.map((error, index) => (
                <span className='consoleErrors' key={`other-${index}`}>
                    {error}
                </span>
            ))}
        </>
    );
};

export default ConsoleErrors;
