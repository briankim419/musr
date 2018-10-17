import GenresIndexContainer from '../../../app/javascript/react/containers/GenresIndexContainer';
import fetchMock from 'fetch-mock'

fdescribe('GenresIndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    genres = [
      {id: 1, name: 'Rock'},
      {id: 2, name: 'Classical'},
      {id: 3, name: 'Jazz'}
    ]
    fetchMock.get('api/v1/genres', {
      status: 200,
      body: genres
    });
    wrapper = mount(
      <GenresIndexContainer />
    )
  })
  afterEach(fetchMock.restore)

  it('renders an h1', () => {
    expect(wrapper.find('h1')).toBePresent()
    expect(wrapper.find('h1').text()).toEqual('Genres')
  })

  it('renders a p tag for each item returned from the api call', (done) => {
    setTimeout(() => {
      expect(wrapper.find('p').length).toEqual(genres.length)
      expect(wrapper.find('p').text()).toEqual(genres[0].name)
      expect(wrapper.find('p').text()).toEqual(genres[1].name)
      done()
    }, 0)
  })
})
