const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};

type T1 = "X" | "Y" | "Z";


type T2 = keyof typeof cart;

