import { FC } from 'react';

type Props = {
    latitude: number|string;
    longitude: number|string;
}

const GeolocationPresentation: FC<Props>  = ({ latitude, longitude }) => {
    return (
        <div>
            <h1>Geolocation</h1>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
        </div>
    );
}

export default GeolocationPresentation;