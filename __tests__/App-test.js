/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render, wait } from '@testing-library/react-native';


 
it('renders correctly', () => {
   global.withAnimatedTimeTravelEnabled(() => {
   const {asJSON} =  render(<App />);
   
   });
});
