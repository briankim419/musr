import GenreShowContainer from '../../../app/javascript/react/containers/GenreShowContainer';
import fetchMock from 'fetch-mock'

describe('GenreShowContainer', () => {
  let wrapper;
  let genre;

  beforeEach(() => {
    genre: [
      {id: 1, name: 'Rock'}
    ]
    fetchMock.get(`/api/v1/genres/1`, {
      status: 200,
      body: genre
    });
    wrapper = mount(
      <GenreShowContainer
      params={{id: 1}}/>
    )
  })
  afterEach(fetchMock.restore)

  describe('header', () => {
    it('renders an h1', () => {
      console.log(wrapper.debug());
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
