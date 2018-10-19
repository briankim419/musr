import GenresIndexContainer from '../../../app/javascript/react/containers/GenresIndexContainer';
import GenreTile from '../../../app/javascript/react/components/GenreTile'
import fetchMock from 'fetch-mock'

describe('GenresIndexContainer', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = {
      genres: [
        {id: 1, name: 'Rock'},
        {id: 2, name: 'Classical'},
        {id: 3, name: 'Jazz'}
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

  describe('header', () => {
    it('renders an h1', () => {
      expect(wrapper.find('h1')).toBePresent()
      expect(wrapper.find('h1').text()).toEqual('Genres')
    })

    it('renders a p tag for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(data.genres[0].name)
        expect(wrapper.text()).toMatch(data.genres[1].name)
        expect(wrapper.text()).toMatch(data.genres[2].name)
        done()
      }, 0)
    })
  })
})
