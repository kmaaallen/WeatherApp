import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MiniForecast from '../components/MiniForecast';
import { forecast } from '../setupTests';

describe('<MiniForecast />', () => {
    it('renders correctly when provided with valid data object', () => {
        const tree = renderer.create(<MiniForecast day={forecast.daily[1]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders day, min and max temperatures', () => {
        const { getByText } = render(<MiniForecast day={forecast.daily[1]} />);
        const tue = getByText('Tue');
        const max = getByText('Max: 15°C');
        const min = getByText('Min: 9°C');
        expect(tue && max && min).toBeTruthy();
    })
});