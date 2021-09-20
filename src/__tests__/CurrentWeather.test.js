import React from 'react';
import renderer from 'react-test-renderer';
import CurrentWeather from '../components/CurrentWeather';
import { data } from '../setupTests';


describe('<App />', () => {
    it('renders correctly when provided with valid data object', () => {
        const tree = renderer.create(<CurrentWeather data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly when provided with empty data object', () => {
        const tree = renderer.create(<CurrentWeather data={[]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
