import React, {useState} from "react";

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');

    const calculateAge = () => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);

        const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
        const monthsDiff = today.getMonth() - birthDateObj.getMonth();
        const daysDiff = today.getDate() - birthDateObj.getDate();

        let calculatedAge = yearsDiff;

        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
            calculatedAge--;
        }

        setAge(calculatedAge);
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card p-1 align-items-center" style={{ width: '30rem' }}>
                <h1 className="">Age Calculator</h1>
                <form className="align-items-center mt-3">
                    <div className="form-group">
                        <label htmlFor="date" className="fw-bold">
                            Enter your date of birth
                        </label>
                        <input
                            className="form-control my-3"
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </div>
                </form>
                <button className="btn btn-primary mb-2" onClick={calculateAge}>
                    Calculate Age
                </button>
                {age !== '' && (
                    <p className="fw-bold fs-5 my-2">Your age is {age} years old.</p>
                )}
            </div>
        </div>
    );
};

export default AgeCalculator;