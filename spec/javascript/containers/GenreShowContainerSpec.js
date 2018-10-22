import GenreShowContainer from '../../../app/javascript/react/containers/GenreShowContainer';
import fetchMock from 'fetch-mock'

describe('GenreShowContainer', () => {
  let wrapper;
  let genre;

  beforeEach(() => {
    genre = {id: 1, name: 'Rock'}
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

  describe('Header', () => {

    it('renders a h1 tag for the genre name returned from the api call', (done) => {
      setTimeout(() => {
        console.log(wrapper.debug());
        expect(wrapper.find('h1')).toBePresent()
        expect(wrapper.find('h1').text()).toEqual('Rock')
        done()
      }, 0)
    })
  })
})
