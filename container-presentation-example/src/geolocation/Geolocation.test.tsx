import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GeolocationPresentation from './presentation';

describe('Geolocation', () => {
    describe('Static', () => {
        it('should render', () => {
            render(<GeolocationPresentation longitude={100} latitude={100} />);
            expect(screen.getByText('Geolocation')).toBeInTheDocument();
        });

        it('should render latitude', () => {
            render(<GeolocationPresentation longitude={100} latitude={100} />);
            expect(screen.getByText('Latitude: 100')).toBeInTheDocument();
        });

        it('should render longitude', () => {
            render(<GeolocationPresentation longitude={100} latitude={100} />);
            expect(screen.getByText('Longitude: 100')).toBeInTheDocument();
        });

        it('should render longitude shows decimal', () => {
            render(<GeolocationPresentation longitude={'100.00'} latitude={100} />);
            expect(screen.getByText('Longitude: 100.00')).toBeInTheDocument();
        });
    });
});
