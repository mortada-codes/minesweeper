/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../src/components/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render, wait } from '@testing-library/react-native';


 
it('renders correctly', () => {
   const {asJSON} =  render(<Header />);
   expect(asJSON()).toMatchSnapshot();

});
