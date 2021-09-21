import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import SearchWeather from '../components/SearchWeather';

// mock functions
const myCallBack = jest.fn();

describe('<SearchWeather />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SearchWeather callBackFromParent={myCallBack} />).toJSON();
        expect(tree).toMatchSnapshot();

        const { getByText, getByLabelText } = render(<SearchWeather callBackFromParent={myCallBack} />);
        const input = getByLabelText('City');
        const button = getByText('Search');
        expect(input && button).toBeTruthy();
    });
});
