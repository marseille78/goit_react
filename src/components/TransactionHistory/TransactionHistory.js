import PropTypes from "prop-types";
import { Table, Td, Th, Tr } from "./TransactionHistory.styled";

const TransactionHistory = ({ list = [] }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </tr>
            </thead>

            <tbody>
                {list.map(({ id, type, amount, currency }) => (
                    <Tr key={id}>
                        <Td>{type}</Td>
                        <Td>{amount}</Td>
                        <Td>{currency}</Td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;
