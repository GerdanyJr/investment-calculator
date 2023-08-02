const ResultRow = (props) => {
    return (
        <tr>
            <td>{props.yearNumber}</td>
            <td>{props.saving}</td>
            <td>{props.interest}</td>
            <td>{props.totalInterest}</td>
            <td>{props.investedCapital}</td>
        </tr>
    )
}

export default ResultRow;