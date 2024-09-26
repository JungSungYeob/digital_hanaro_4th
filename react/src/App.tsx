import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';

type User = {
    id: number;
    name: string;
};

type Cart = {
    id: number;
    name: string;
    price: number;
};

export type Session = {
    loginUser: User | null;
    cart: Cart[];
};

const SampleSession = {
    loginUser: { id: 1, name: 'Hong' },
    cart: [
        { id: 100, name: '라면', price: 3000 },
        { id: 101, name: '컵라면', price: 2000 },
        { id: 200, name: '파', price: 5000 },
    ],
};

function App() {
    const [count, setCount] = useState(0);
    const [session, setSession] = useState<Session>(SampleSession);

    const plusCount = () => setCount(count + 1);
    const minusCount = () => setCount(count - 1);
    const logout = () => setSession({ ...session, loginUser: null });
    const login = (id: number, name: string) =>
        setSession({ ...session, loginUser: { id, name } });
    return (
        <>
            <Hello
                name='홍길동'
                age={33}
                plusCount={plusCount}
                minusCount={minusCount}
            />
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <My session={session} logout={logout} login={login} />
        </>
    );
}

export default App;
