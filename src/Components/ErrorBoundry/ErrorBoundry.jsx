import React, { useState, useEffect } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = () => setHasError(true);
        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    if (hasError) {
        return <ErrorIndicator />;
    }

    return props.children;
}

export default ErrorBoundary;