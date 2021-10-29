import Profile from './components/user/User.module';
import users from './components/user/users.json';

export default function App() {
  return (
    <div>
      {users.map(user => (
        <Profile
          key={user.tag}
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
    </div>
  );
}
