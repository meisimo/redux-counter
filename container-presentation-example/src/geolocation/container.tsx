import { useEffect, useState } from "react";
import GeolocationPresentation from "./presentation";

type Position = {
    coords: {
        latitude: number;
        longitude: number;
    }
};

const GeolocationContainer = () => {
    const [latitude, setLatittude] = useState<number|null>(null);
    const [longitude, setLongitude] = useState<number|null>(null);

    const handleSuccess = ({coords: { latitude, longitude }}: Position) => {
        setLatittude(latitude);
        setLongitude(longitude);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess);
        }
    });

    if (latitude === null || longitude === null) {
        return <h2>Loading...</h2>
    }

    return <GeolocationPresentation longitude={longitude} latitude={latitude}/>;
}

export default GeolocationContainer;