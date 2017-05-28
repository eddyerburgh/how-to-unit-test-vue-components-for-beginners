import { expect } from 'chai';
import { mount } from 'avoriaz';
import Foo from '../app/components/Foo.vue';

describe('Foo.vue', () => {
   it('has a root element with class foo', () => {
     const wrapper = mount(Foo);
     expect(wrapper.is('.foo')).to.equal(true);
   });

  it('has a root element with class foo', () => {
    const passedProp = 'some text';
    const wrapper = mount(Foo, {propsData: {passedProp}});
    const p = wrapper.find('p')[0];
    expect(p.text()).to.equal(passedProp);
  });

  it('changes h1 text when #change-text is clicked', () => {
    const wrapper = mount(Foo);
    const changeMessage = wrapper.find('#change-message')[0];
    changeMessage.dispatch('click');
    const h1 = wrapper.find('h1')[0];

    expect(h1.text()).to.equal('new message');
  });
});
