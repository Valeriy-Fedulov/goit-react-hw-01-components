import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';

import StatisticsList from 'components/statistics/StatisticsList';
import statisticalData from 'components/statistics/statistical-data.json';

import FriendList from 'components/friendlist/FriendList';
import friends from 'components/friendlist/friends.json';

import TransactionHistoryList from 'components/transactionhistory/TransactionHistoryList';
import transactions from 'components/transactionhistory/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistoryList items={transactions} />
    </>
  );
}
