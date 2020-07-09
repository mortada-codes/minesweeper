/**
 * @format
 */

import 'react-native';
import React from 'react';
import GameEnd from '../src/screens/GameEnd';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render, wait } from '@testing-library/react-native';


 
it('renders correctly', () => {
    global.withAnimatedTimeTravelEnabled(() => { 
        global.timeTravel(1500);  
        const {asJSON} =  render(<GameEnd />);
        expect(asJSON()).toMatchSnapshot();

    })
});


it('Show win message', () => {
    global.withAnimatedTimeTravelEnabled(() => { 
        global.timeTravel(1500);  
        const {getByTestId} =  render(<GameEnd hasWin={true}/>);
        expect(getByTestId("GameEndMessage").props.children).toBe("YOU WON");

    })
});


it('Show lose message', () => {
    global.withAnimatedTimeTravelEnabled(() => { 
        global.timeTravel(1500);  
        const {getByTestId} =  render(<GameEnd hasWin={false}/>);
        expect(getByTestId("GameEndMessage").props.children).toBe("GAME OVER");

    })
});


it('Button title equals retry', () => {
    global.withAnimatedTimeTravelEnabled(() => { 
        global.timeTravel(1500);  
        const {getByTitle} =  render(<GameEnd hasWin={false}/>);
        expect(getByTitle("RETRY"));

    })
});
