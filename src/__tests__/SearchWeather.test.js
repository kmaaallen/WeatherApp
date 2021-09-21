import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import SearchWeather from '../components/SearchWeather';

// mock functions
const myCallBack = jest.fn();

describe('<SearchWeather />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SearchWeather callBackFromParent={myCallBack} />).toJSON();
        expect(tree).toMatchSnapshot();

        const { getByRole, getByLabelText } = render(<SearchWeather callBackFromParent={myCallBack} />);
        const input = getByLabelText('City');
        const button = getByRole('button');
        expect(input && button).toBeTruthy();
    });

    it('should trigger callback function for valid city search', async () => {
        const { getByRole, getByLabelText } = render(<SearchWeather callBackFromParent={myCallBack} />);
        const input = getByLabelText('City');
        const button = getByRole('button');
        fireEvent.input(input, 'Mountain View');
        fireEvent.click(button);
        expect(myCallBack).toHaveBeenCalled();
    });
});
