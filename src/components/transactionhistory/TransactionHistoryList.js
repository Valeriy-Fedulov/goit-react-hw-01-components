import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';

export default function TransactionHistoryList({ items }) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map( item => (
                    <tr key={item.id}>
                        <TransactionHistory
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistoryList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
                id: PropTypes.string.isRequired,
        })
    ),
}