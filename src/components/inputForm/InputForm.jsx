import { useState } from "react";

const initialUserInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
}

const InputForm = (props) => {
    const [inputValues, setInputValues] = useState(initialUserInput);

    const submitHandler = event => {
        event.preventDefault();
        props.onCalculate(inputValues);
    }

    const resetHandler = () => {
        setInputValues(initialUserInput);
    }

    const changeHandler = (input, value) => {
        switch (input) {
            case 'current-savings':
                setInputValues((prevInputValues) => {
                    return { ...prevInputValues, currentSavings: value }
                })
                break;
            case 'yearly-contribution':
                setInputValues((prevInputValues) => {
                    return { ...prevInputValues, yearlyContribution: value }
                })
                break;
            case 'expected-return':
                setInputValues((prevInputValues) => {
                    return { ...prevInputValues, expectedReturn: value }
                })
                break;
            case 'duration':
                setInputValues((prevInputValues) => {
                    return { ...prevInputValues, duration: value }
                })
                break;
            default:
                break;
        }
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => changeHandler('current-savings', event.target.value)} value={inputValues.currentSavings} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => changeHandler('yearly-contribution', event.target.value)} value={inputValues.yearlyContribution} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => changeHandler('expected-return', event.target.value)} value={inputValues.expectedReturn} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => changeHandler('duration', event.target.value)} value={inputValues.duration} type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" onClick={resetHandler} className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InputForm;