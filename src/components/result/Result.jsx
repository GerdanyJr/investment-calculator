import ResultRow from "./ResultRow";

const Result = (props) => {
    <table className="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {props.results.map(result => {
                <ResultRow
                    yearNumber={result.yearNumber}
                    saving={result.saving}
                    interest={result.interest}
                    gainedInterest={result.gainedInterest}
                    totalInvested={result.totalInvested}
                />
            })}
        </tbody>
    </table>
}

export default Result;