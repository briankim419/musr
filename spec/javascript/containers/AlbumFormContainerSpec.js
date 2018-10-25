import AlbumsFormContainer from '../../../app/javascript/react/containers/AlbumsFormContainer';
import fetchMock from 'fetch-mock'

xdescribe('AlbumsFormContainer', () => {
  let wrapper;
  let genre;
  let data;

  beforeEach(() => {
    genre = {id: 1, name: 'Rock'}
    data = {id: 1, name: 'Test Album', artist: "Dr. Test", description: "Testing the Test", release_date: "04/04/2017", genre_id: genre.id, album_art: "fakeurl.com", genre: {id: 1, name: 'Rock'}}


    wrapper = mount(
      <AlbumsFormContainer />
    )
  })
  afterEach(fetchMock.restore)

  describe('Album Info', () => {

    it('Successfully adds new album', (done) => {
      console.log(wrapper.debug());
      fetchMock.post(`/api/v1/albums`, {
        status: 201,
        body: data
      });
      setTimeout(() => {
        wrapper.find('.button').simulate('submit')
        setTimeout(() => {
          console.log(wrapper.debug()) ;
          done()
        })
      }, 0)
    })
  })
})
