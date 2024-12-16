import React from "react";
import Footer from "../components/common/Footer";

const Plan = () => {
    return (
        <>
            <iframe
                src="/Plan.pdf"
                width="90%"
                height="800px"
                
                style={{margin: '5rem auto', marginTop: '8rem'}}
            />
            <Footer />
        </>
    );
};

export default Plan;
