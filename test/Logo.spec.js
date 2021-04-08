import { mount } from '@vue/test-utils'
import L1Visa from '@/components/L1.vue'

describe('L1Visa', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(L1Visa, {
      propsData: {
        userDetails: {
          selfPetition: false,
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
