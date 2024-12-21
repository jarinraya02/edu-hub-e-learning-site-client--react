import React from 'react';

const FAQ = () => {
    return (
        <>
        <div className="collapse mx-32 mt-5 mb-5">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                When I can start my coure?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>You can start whenever you want.</p>
            </div>
        </div>
        <div className="collapse mx-32 mb-5">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                How long will I have the access?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>You will be given access for the lifetime after buying a course.</p>
            </div>
        </div>
        <div className="collapse mx-32 mb-5">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Can I pause and restart anytime?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Yes, of course you can.</p>
            </div>
        </div>
        <div className="collapse mx-32 mb-5">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Will you provide certificate?
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Only if you attend the exams and pass.</p>
            </div>
        </div>
        </>
    );
};

export default FAQ;