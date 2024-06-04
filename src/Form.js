import React from 'react';
import CreateAccount from './CreateAccount';
import DeleteAccount from './DeleteAccount';
const Form = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-start p-8 sm:p-12 md:p-16 lg:p-24 gap-8 relative max-w-screen-xl mx-auto w-full h-full bg-white">
            
                <div className="flex flex-col md:flex-row items-center md:items-start p-4 sm:p-8 md:p-14 gap-4 sm:gap-8 md:gap-14 w-full h-full bg-gradient-to-br from-[#33a4e3] to-[#b0efb3]">
                    <CreateAccount />
                    <DeleteAccount />
                </div>
            </div>
        </div>
    );
};

export default Form;