import AlbumShowContainer from '../../../app/javascript/react/containers/AlbumShowContainer';
import fetchMock from 'fetch-mock'

describe('AlbumShowContainer', () => {
  let wrapper;
  let genre;
  let data;

  beforeEach(() => {
    genre = {id: 1, name: 'Rock'}
    data = {album: {id: 1, name: 'Test Album', artist: "Dr. Test", description: "Testing the Test", release_date: "04/04/2017", genre_id: genre.id, album_art: "fakeurl.com", genre: {id: 1, name: 'Rock'}}}
    fetchMock.get(`/api/v1/genres/${data.album.genre_id}/albums/${data.album.id}`, {
      status: 200,
      body: data
    });

    wrapper = mount(
      <AlbumShowContainer
      params={{ genre_id: 1, id: 1 }}
      />
    )
  })
  afterEach(fetchMock.restore)

  describe('Album Info', () => {

    it('renders the album information to the page', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(data.album.name)
        expect(wrapper.text()).toMatch(data.album.release_date)
        expect(wrapper.text()).toMatch(data.album.artist)
        expect(wrapper.text()).toMatch(data.album.description)
        expect(wrapper.find('img')).toBePresent()
        done()
      }, 0)
    })
  })
})
