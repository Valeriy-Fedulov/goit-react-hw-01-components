import ProfileList from './components/profile/ProfileList';
import user from './components/profile/user.json';

import StatisticsList from './components/statistics/StatisticsList';
import statisticalData from './components/statistics/statistical-data.json';

export default function App() {
  return (
    <div>
      <ProfileList itemsUser={user} />
      <StatisticsList title="Upload stats" stats={statisticalData} />
    </div>
  );
}
