export type Resident = {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
};

export type Location = {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: Resident[];
};

export type LoaderData = {
    locations: Location[];
};
