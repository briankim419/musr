import GenreShowContainer from '../../../app/javascript/react/containers/GenreShowContainer';
import fetchMock from 'fetch-mock'

xdescribe('GenreShowContainer', () => {
  let wrapper;
  let genre;
  let albums;

  beforeEach(() => {
    genre = {id: 1, name: 'Rock'}
    albums = {albums: [{id: 1, name: 'Test Album', artist: "Dr. Test", release_date: "04/04/2017", genre_id: genre.id}]}
    fetchMock.get(`/api/v1/genres/${genre.id}`, {
      status: 200,
      body: genre
    });
    fetchMock.get(`/api/v1/genres/${genre.id}/albums`, {
      status: 200,
      body: albums
    });
    wrapper = mount(
      <GenreShowContainer
      params={{id: 1}}/>
    )
  })
  console.log(wrapper.debug());
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
