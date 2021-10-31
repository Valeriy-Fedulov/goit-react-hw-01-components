import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

export default function TransactionHistoryList({ items }) {
    return (
        <table className={s.transactionHistory}>
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