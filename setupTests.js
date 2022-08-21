import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';

const {JSDOM} = require('jsdom');

const jsdom = new JSDOM('...', {url: 'https://example.org/'});
const {window} = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

fetchMock.enableMocks();
global.fetch = require('jest-fetch-mock');
configure({adapter: new Adapter()});
