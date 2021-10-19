import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();

        const { getByText } = render(<App />);
        const message = getByText('Please share your location to see local weather, or use the search bar');
        expect(message).toBeTruthy();
    });
    it('should show local weather on load from users coordinates', () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn()
                .mockImplementationOnce((success) => Promise.resolve(success({
                    coords: {
                        latitude: 37.39,
                        longitude: -122.08
                    }
                })))
        };
        global.navigator.geolocation = mockGeolocation;
        const { findByText, queryByText } = render(<App />);
        waitForElementToBeRemoved(queryByText('Loading')).then(() =>
            expect(findByText('Mountain View, US')).toBeTruthy(),
        )
    });
});
