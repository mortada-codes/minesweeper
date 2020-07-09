/**
 * @format
 */

import 'react-native';
import React from 'react';
import Board from '../src/screens/Board';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render, wait } from '@testing-library/react-native';


 
it('renders correctly', () => {
   const {asJSON} =  render(<Board />);
   expect(asJSON()).toMatchSnapshot();

});
