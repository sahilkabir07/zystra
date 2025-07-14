import React, { useState, useEffect } from "react";
import GlobalLoader from "./GlobalLoader";

const LoaderWrapper = ({ children }) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowLoader(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <GlobalLoader visible={showLoader} />
            {!showLoader && children}
        </>
    );
};

export default LoaderWrapper;
