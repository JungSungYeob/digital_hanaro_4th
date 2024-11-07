type PersonInfo = {
    id: number;
    name: string;
    age: number;
    address: string;
};

let Person: {
    id: number;
    name: string;
    age: number;
    address: string;
};

const something = ({
    id,
    name,
    age,
    address,
}: {
    id: number;
    name: string;
    age: number;
    address: string;
}) => {
    //Do Something
};

const something2 = ({ id, name, age, address }: PersonInfo) => {
    //Do Something
};


