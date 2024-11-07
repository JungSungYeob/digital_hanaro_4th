import { ReactNode } from 'react';

type TitleProps = {
    text: string;
    name: string;
};

const Title = ({ text, name }: TitleProps) => {
    console.log('Titttttttttttttt!!');
    return (
        <h1>
            {text} {name}
        </h1>
    );
};

const Body = ({ children }: { children: ReactNode }) => {
    console.log('bodddddddd!!!');
    return <div className='red'>{children}</div>;
};

type Props = {
    name: string;
    age: number;
    plusCount: () => void;
    minusCount: () => void;
};

export default function Hello({ name, age, plusCount, minusCount }: Props) {
    return (
        <>
            <Title text='Hi~' name={name} />
            <Body>This is Hello Body Component.{age}</Body>
            <button
                onClick={() => {
                    plusCount();
                }}
            >
                Plus Btn
            </button>
            <button
                className='mx-10'
                onClick={() => {
                    minusCount();
                }}
            >
                Minus Btn
            </button>
        </>
    );
}
