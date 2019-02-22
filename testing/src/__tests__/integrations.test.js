import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Fetch #1' }, { name: 'Fetch #2' }]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
	// attempt to render the entire app
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);
	// find the 'fetchComments' button and click it
	wrapper.find('.fetch-comments').simulate('click');

	// expect to find a list of comments
	moxios.wait(() => {
		wrapper.update();
		expect(wrapper.find('li').length).toEqual(2);
		done();
		wrapper.unmount();
	});
});
