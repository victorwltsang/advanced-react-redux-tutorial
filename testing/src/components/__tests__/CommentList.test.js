import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
	const initialState = {
		comments: ['Comment 1', 'Comment 2']
	};
	wrapper = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

it('creates on li per comment', () => {
	expect(wrapper.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
	expect(wrapper.render().text()).toContain('Comment 1');
	expect(wrapper.render().text()).toContain('Comment 2');
});
