import renderer from 'react-test-renderer'
import Index from './index.b'

describe('Test Index Page', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
