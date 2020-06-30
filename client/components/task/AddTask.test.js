import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AddTask from './AddTask.jsx'

describe('AddTask', () => {
    beforeEach(()=> {

    })


    it('should render with correct defaults', () => {
        const elem = shallow(<AddTask />);
        expect(elem.find('TextField').prop('value')).toBe('')
    });

    it('should not save the task when user presses the carriage return key with no text in the input field', () => {
        const fn = jest.fn();
        const elem = mount(<MuiThemeProvider><AddTask onAdd={fn}/></MuiThemeProvider>);
        const input = elem.find('input').first();
        input.simulate('change', { target: { value: '' } });
        input.simulate('keyPress', {key: 'Enter'});
        expect(fn).not.toHaveBeenCalled();
    });

    it('should save the task when user enters some text into the input field and presses the carriage return key', () => {
        const fn = jest.fn();
        const elem = mount(<MuiThemeProvider><AddTask onAdd={fn}/></MuiThemeProvider>);
        const input = elem.find('input').first();
        input.simulate('change', { target: { value: 'feed the fish' } });
        input.simulate('keyPress', {key: 'Enter'});
        expect(fn.mock.calls.length).toBe(1);
        expect(fn).toBeCalledWith('feed the fish');
    });
});