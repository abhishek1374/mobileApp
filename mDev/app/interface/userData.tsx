interface UserData {
    username: string;
    name: string;
    email: string;
    address: Address;
    phone: string;
    password: string;
}

interface Address {
    city: string;
    street: string;
    zipcode: string;
}