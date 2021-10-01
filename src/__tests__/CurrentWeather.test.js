import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import CurrentWeather from '../components/CurrentWeather';
import { data, nightData } from '../setupTests';


describe('<CurrentWeather />', () => {
    it('renders correctly when provided with valid data object', () => {
        const tree = renderer.create(<CurrentWeather data={data} />).toJSON();
        expect(tree).toMatchSnapshot();

        const { getByText, getByTitle } = render(<CurrentWeather data={data} />);
        const display = getByText('Mountain View, US');
        const media = getByTitle('clear sky icon');
        const temp = getByText('283°C');
        const max = getByText('Max: 284°C');
        const min = getByText('Min: 280°C');
        const sunrise = getByText('Sunrise: 5:47 am');
        const sunset = getByText('Sunset: 8:29 pm');
        expect(display && media && temp && max && min && sunrise && sunset).toBeTruthy();
    });
    it('renders correctly when provided with empty data object', () => {
        const tree = renderer.create(<CurrentWeather data={[]} />).toJSON();
        expect(tree).toMatchSnapshot();

        const { getByText } = render(<CurrentWeather data={[]} />);
        const loading = getByText('Loading');
        expect(loading).toBeTruthy();
    });
    it('renders white text when weather locale is night time', () => {
        const { getByText } = render(<CurrentWeather data={nightData} />);
        const display = getByText('Mountain View, US').classList.toString();
        const temp = getByText('283°C').classList.toString();
        const max = getByText('Max: 284°C').classList.toString();
        const min = getByText('Min: 280°C').classList.toString();
        const sunrise = getByText('Sunrise: 5:47 am').classList.toString();
        const sunset = getByText('Sunset: 8:29 pm').classList.toString();
        expect(display && temp && max && min && sunrise && sunset).toContain('night');
    })
});
