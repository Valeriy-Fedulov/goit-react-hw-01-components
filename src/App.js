import ProfileList from './components/user/Profile'
import users from './components/user/users.json';

export default function App() {
  return (
    <div>
      <ProfileList items={users} />
    </div>
  );
}
