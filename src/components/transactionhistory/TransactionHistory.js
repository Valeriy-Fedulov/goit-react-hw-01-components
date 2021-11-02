import PropTypes from 'prop-types';

export default function TransactionHistory(props) {
  const { type, amount, currency } = props;
  return (
    <>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
    .isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.oneOf([
    'LRD',
    'WST',
    'UGX',
    'ALL',
    'MUR',
    'AUD',
    'GEL',
    'TOP',
    'BWP',
    'MRO',
    'PYG',
    'CHF',
    'NOK',
    'AWG',
    'STD',
    'CUP CUC',
    'HKD',
    'UYU UYI',
    'MDL',
  ]).isRequired,
};
