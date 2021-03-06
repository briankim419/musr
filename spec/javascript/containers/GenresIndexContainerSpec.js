import GenresIndexContainer from '../../../app/javascript/react/containers/GenresIndexContainer';
import GenreTile from '../../../app/javascript/react/components/GenreTile'
import fetchMock from 'fetch-mock'

describe('GenresIndexContainer', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = {
      genres: [
        {id: 1, name: 'Rock'}
      ]
    }
    fetchMock.get('/api/v1/genres', {
      status: 200,
      body: data
    });
    wrapper = mount(
      <GenresIndexContainer />
    )
  })
  afterEach(fetchMock.restore)

  describe('Index Container', () => {
    it('renders an h1', () => {
      expect(wrapper.find('h1')).toBePresent()
      expect(wrapper.find('h1').text()).toEqual('Genres')
    })

    it('Should render a Genre Tile component', (done) => {
      setTimeout(() => {
        expect(wrapper.find('GenreTile')).toBePresent()
        done()
      }, 0)
    })

    it('renders the Genre Tile component with specific props', (done) => {
      setTimeout(() => {
        expect(wrapper.find('GenreTile').props()).toEqual({
          id: 1,
          name: 'Rock'
        })
        done()
      }, 0)
    })



    it('renders a p tag for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(data.genres[0].name)
        done()
      }, 0)
    })
  })
})
