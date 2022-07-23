import nock from 'nock'
import { getCats, getNorris } from './cats'

describe('getCats', () => {
  const catArray = [
    {
      breeds: [],
      id: '7aj',
      url: 'https://cdn2.thecatapi.com/images/7aj.jpg',
      width: 500,
      height: 332,
    },
  ]
  const scope = nock('http://localhost')
    .get('/api/v1/cats')
    .reply(200, catArray)

  test('return image url', () => {
    expect.assertions(3)
    return getCats().then((cats) => {
      //console.log(cats, catArray[0].url)
      expect(cats).toEqual(catArray[0].url)
      expect(scope.isDone()).toBe(true)
      expect(typeof cats).toBe('string')
      return null
    })
  })
})

describe('getNorris', () => {
  const norrisArr = {
    categories: [],
    created_at: '2020-01-05 13:42:30.177068',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'rA3RdsMISqOvd5Vmsxpfxw',
    updated_at: '2020-01-05 13:42:30.177068',
    url: 'https://api.chucknorris.io/jokes/rA3RdsMISqOvd5Vmsxpfxw',
    value: 'Chuck Norris built the hostpital he was born in.',
  }

  const mockSuccess = nock('http://localhost')
    .get('/api/v1/norris')
    .reply(200, norrisArr)

  const mockFail = nock('http://localhost').get('/api/v1/norris').reply(500, {})

  let error = null
  it('returns a quote in a succesfull call', () => {
    expect.assertions(3)
    return getNorris().then((quote) => {
      expect(typeof quote).toBe('string')
      expect(mockSuccess.isDone()).toBe(true)
      expect(mockSuccess.isDone()).toBeTruthy()
    })
  })

  it('does not returns a quote when call fails', () => {
    expect.assertions(3)
    return getNorris()
      .catch((e) => {
        error = e
      })
      .finally(() => {
        expect(error).not.toBeNull()
        expect(error.message).toBe('Internal Server Error')
        expect(mockFail.isDone).toBeTruthy()
      })
  })
})

// {
//   "categories": [

//   ],
//   "created_at": "2020-01-05 13:42:30.177068",
//   "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//   "id": "rA3RdsMISqOvd5Vmsxpfxw",
//   "updated_at": "2020-01-05 13:42:30.177068",
//   "url": "https://api.chucknorris.io/jokes/rA3RdsMISqOvd5Vmsxpfxw",
//   "value": "Chuck Norris built the hostpital he was born in."
// }
