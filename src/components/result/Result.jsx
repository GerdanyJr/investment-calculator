import ResultRow from "./ResultRow";
const formatter =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})

const Result = (props) => {
    return (
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
                    return (
                        <ResultRow
                            key={result.year}
                            yearNumber={result.year}
                            saving={formatter.format(result.savingsEndOfYear)}
                            interest={formatter.format(result.yearlyInterest)}
                            totalInterest={formatter.format(result.savingsEndOfYear -
                                props.initialInvestment -
                                result.yearlyContribution * result.year)
                            }
                            investedCapital={formatter.format(props.initialInvestment +
                                result.yearlyContribution * result.year)
                            }
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default Result;