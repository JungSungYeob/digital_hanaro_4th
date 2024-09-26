import Login from './Login';
import Profile from './Profile';
import { Session } from '../App';

type Props = {
    session: Session;
    logout: () => void;
    login: (id: number, name: string) => void;
};

export default function My({ session, logout, login }: Props) {
    return (
        <>
            {session.loginUser ? (
                <Profile
                    id={session.loginUser.id}
                    name={session.loginUser.name}
                    logout={logout}
                />
            ) : (
                <Login login={login} />
            )}
            <div>
                <ul>
                    {session.cart.map(({ id, name, price }) => (
                        <li key={id}>
                            {name}
                            {price}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
