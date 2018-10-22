import AlbumShowContainer from '../../../app/javascript/react/containers/AlbumShowContainer';
import fetchMock from 'fetch-mock'

describe('AlbumShowContainer', () => {
  let wrapper;
  let genre;
  let album;

  beforeEach(() => {
    genre = {id: 1, name: 'Rock'}
    album = {album: {id: 1, name: 'Test Album', artist: "Dr. Test", release_date: "04/04/2017", genre_id: genre.id, genre: {id: 1, name: 'Rock'}}}
    fetchMock.get(`/api/v1/genres/${album.album.genre_id}/albums/${album.album.id}`, {
      status: 200,
      body: album
    });

    wrapper = mount(
      <AlbumShowContainer
      params={{ genre_id: 1, id: 1 }}/>
    )
  })
  afterEach(fetchMock.restore)

  describe('Header', () => {

    it('renders the album name to the page', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(album.album.name )
        done()
      }, 0)
    })
  })
})
