import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import TestComponent from '.'

Enzyme.configure({
  adapter: new Adapter(),
})

describe('TestComponent', () => {
  it('renders TestComponent', () => {
    const wrapper = mount(<TestComponent />)
    expect(wrapper).toMatchSnapshot()
  })
})
