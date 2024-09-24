import Login from './Login';
import Profile from './Profile';

type User = {
    id: number;
    name: string;
};

type Cart = {
    id: number;
    name: string;
    price: number;
};

type Session = {
    loginUser: null | User;
    cart: Cart[];
};

type Props = {
    session: Session;
    logout: () => void;
    login: (user: User) => void;
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
