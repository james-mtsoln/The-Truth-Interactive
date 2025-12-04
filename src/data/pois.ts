export interface POI {
    name: string;
    lat: number;
    lon: number;
    description: string;
}

export const pois: POI[] = [
    {
        name: 'New York',
        lat: 40.7128,
        lon: -74.0060,
        description: 'A hub of creativity and innovation.',
    },
    {
        name: 'London',
        lat: 51.5074,
        lon: -0.1278,
        description: 'Where history meets modern design.',
    },
    {
        name: 'Tokyo',
        lat: 35.6762,
        lon: 139.6503,
        description: 'Technology and tradition in harmony.',
    },
    {
        name: 'Sydney',
        lat: -33.8688,
        lon: 151.2093,
        description: 'Vibrant visuals from down under.',
    },
    {
        name: 'Rio de Janeiro',
        lat: -22.9068,
        lon: -43.1729,
        description: 'Colorful and dynamic expressions.',
    }
];
