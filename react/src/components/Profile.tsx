type User = {
    id: number;
    name: string;
    logout: () => void;
};

export default function Profile({ id, name, logout }: User) {
    return (
        <>
            <div>
                {id} {name}
            </div>
            <button onClick={logout}>LogOut</button>
        </>
    );
}
