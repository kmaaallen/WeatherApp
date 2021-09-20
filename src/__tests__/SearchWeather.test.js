import React from 'react';
import renderer from 'react-test-renderer';
import SearchWeather from '../components/SearchWeather';

// mock functions
const myCallBack = jest.fn();

describe('<SearchWeather />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SearchWeather callBackFromParent={myCallBack} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
