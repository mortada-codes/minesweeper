/**
 * @format
 */

import 'react-native';
import React from 'react';
import Cell from '../src/components/Cell';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render, wait,  } from '@testing-library/react-native';


 
it('renders correctly', () => {
   const { container, asJSON } =  render(<Cell />);
   expect(asJSON()).toMatchSnapshot();

});

it('not visited cell text should be empty',  () => {
   const location = [0,0]
   const cell = {value:1,visited:false}
   const { container, getByTestId } =  render(<Cell location={location} cell={cell} />);
     
   expect( getByTestId("CellValue").props.children).toMatch('')

});


it(' visited cell text should equal 1 ',  () => {
   const location = [0,0]
   const cell = {value:1,visited:true}
   const { container, getByTestId } =  render(<Cell location={location} cell={cell} />);
   
   expect( getByTestId("CellValue").props.children).toBe(1)

});