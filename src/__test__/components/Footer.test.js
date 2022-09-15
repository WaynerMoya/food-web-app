
import React from 'react';

import 'jsdom-global/register'; //at the top of file , even  , before importing react

import { mount, shallow } from 'enzyme';

import Footer from '../../components/Footer/Footer';

describe('Testing <Footer />', () => {

    test('Render of the component Footer', () => {
        const footer = shallow(<Footer />);
        /* mount the component in the dom html */
        expect(footer.length).toEqual(1);
    });

    test('Render of title', () => {

        const footer = mount(<Footer />)

        expect(footer.find(".footer-name").text()).toEqual("Wayner Moya");
    });

});
