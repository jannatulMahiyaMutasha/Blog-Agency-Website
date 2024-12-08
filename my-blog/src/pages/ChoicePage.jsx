import React from 'react';
import ChoiceSection from "../components/Choice/ChoiceSection.jsx";
const ChoicePage = () => {
    return (
        <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>
            <ChoiceSection></ChoiceSection>
        </div>
    );
};

export default ChoicePage;