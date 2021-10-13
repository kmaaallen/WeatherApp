import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Forecast from '../components/Forecast';
import { forecast } from '../setupTests';

describe('<Forecast />', () => {
    it('renders correctly when provided with valid data object', () => {
        const tree = renderer.create(<Forecast data={forecast} />).toJSON();
        expect(tree.children.length).toBe(7);
        expect(tree).toMatchSnapshot();
    });
    it('mini forecast components display 7 days of week', () => {
        const { getByText } = render(<Forecast data={forecast} />);
        const mon = getByText('Mon');
        const tue = getByText('Tue');
        const wed = getByText('Wed');
        const thur = getByText('Thur');
        const fri = getByText('Fri');
        const sat = getByText('Sat');
        const sun = getByText('Sun');
        expect(mon && tue && wed && thur && fri && sat && sun).toBeTruthy();
    })
});