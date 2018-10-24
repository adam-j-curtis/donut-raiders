import DonutShow from '../../app/javascript/react/containers/DonutShow'
import ReviewTile from '../../app/javascript/react/components/ReviewTile'

import fetchMock from 'fetch-mock'


describe("DonutShow", () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = {
      donut: {
        id: 2,
        name: "Maple Bacon Donut",
        reviews: [
          {
            id: 2,
            rating: 1,
            body: "this is not a good donut",
            price_range: "cheap AF",
            photo_url: null,
            donut_id: 2,
            created_at: "2018-10-19T14:49:15.475Z",
            updated_at: "2018-10-19T14:49:15.475Z",
            shop_id: 2
          },
          {
            id: 3,
            rating: 4,
            body: "i enjoy this",
            price_range: "reasonable",
            photo_url: null,
            donut_id: 2,
            created_at: "2018-10-19T15:14:27.003Z",
            updated_at: "2018-10-19T15:14:27.003Z",
            shop_id: 2
          }
        ],
        shop: {
          id: 2,
          name: "Dunkin'",
          address: "32 Main St.",
          city: "West Palm Beach",
          state: "Florida",
          url: "www.dunkinisbad.com",
          phone: "666-666-6666",
          created_at: "2018-10-17T13:39:28.050Z",
          updated_at: "2018-10-17T13:39:28.050Z"
        }
      }
    }

    fetchMock.get(`/api/v1/donuts/${donut.id}`, {
      status: 200,
      body: data
    });

    wrapper = mount(
      <DonutShow />
    );
  })


  afterEach(fetchMock.restore);

  describe('donut show container', () => {
    it('renders an h1', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1')).toBePresent()
        expect(wrapper.find('h1').text()).toEqual("Maple Bacon Donut")
        done()
      }, 0)
    })

    it('renders an h3 for each review returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h3').text()).toEqual(data.donuts[0].reviews.body)
        done()
      }, 0)
    })
  })
})
