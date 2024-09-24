import { useState } from 'react';

type User = {
    id: number;
    name: string;
};
type Props = {
    login: (user: User) => void;
};

export default function Login({ login }: Props) {
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const loginBtn = () => {
        const user: User = { id: id, name: name };
        login(user);
    };
    return (
        <>
            <form onSubmit={loginBtn}>
                <label>Id</label>
                <input onChange={(e) => setId(+e.currentTarget.value)} />
                <label>Name</label>
                <input onChange={(e) => setName(e.currentTarget.value)} />
                <button type='submit'>LogIn</button>
            </form>
        </>
    );
}
