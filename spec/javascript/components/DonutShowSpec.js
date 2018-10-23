import DonutShow from '../../../app/javascript/react/containers/DonutShow'
import ReviewTile from '../../../app/javascript/react/components/ReviewTile'
import fetchMock from 'fetch-mock'

describe('DonutShow', () => {
  let data,
      wrapper;

  beforeEach(() => {
  data = {
    donut: {
        id: 1,
        name: "Chocolate Glazed",
        reviews: [
          {
            id: 1,
            rating: 0,
            body: "DIABATESA AAARFRR!!!",
            price_range: "ridic",
            photo_url: null,
            donut_id: 1,
            created_at: "2018-10-17T21:22:09.806Z",
            updated_at: "2018-10-17T21:22:09.806Z",
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
  fetchMock.get(`/api/v1/donuts/1`, {
    status: 200,
    body: data
  })
    wrapper = mount(
      <DonutShow
      params = {{id: 1}}
      />
    );
  });

  afterEach(fetchMock.restore)

    it('should render a review tile component', (done) => {
      setTimeout(() => {
          expect(wrapper.find(ReviewTile)).toBePresent();
          done()
      }, 0)
    });

    it('should render template test', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h2')).toBePresent()
        expect(wrapper.find('h2').text()).toEqual('Reviews:')
        done()
      }, 0)
    })

    

  });
