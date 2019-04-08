import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root'
let wrapped;
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>)
})
afterEach(() => {
    wrapped.unmount()
})

it('shows a comment box and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: 'new comment'}})
        // force immediate update
        wrapped.update()
    })

    it('allows a user to type in the comment box and to submit', () =>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('resets the textarea text on submit', () => {
        wrapped.find('form').simulate('submit', { target: {value: 'new submit'}})
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})