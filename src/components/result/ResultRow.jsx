const ResultRow = (props) => {
    <tr>
        <td>{props.yearNumber}</td>
        <td>{props.saving}</td>
        <td>{props.interest}</td>
        <td>{props.gainedInterest}</td>
        <td>{props.totalInvested}</td>
    </tr>
}

export default ResultRow;