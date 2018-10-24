import ShopShow from '../../../app/javascript/react/containers/ShopShow'
import DonutTile from '../../../app/javascript/react/components/DonutTile'
import fetchMock from 'fetch-mock'

describe('ShopShow', () => {
  let data,
      wrapper;
console.log(wrapper.debug())
  beforeEach(() => {
  data = {
  shop: {
    id: 13,
    name: "Honeydew Donuts",
    address: "1600 Pennsylvia Ave NW",
    city: "Washington, DC",
    state: "DC",
    url: "www.honeydewrules.org",
    phone: "111-111-1112",
    donuts: [
      {
        id: 9,
        name: "Jelly Donut",
        reviews: [
          {
            id: 6,
            rating: 2,
            body: "this is a very mediocre and not exciting donut",
            price_range: "2",
            photo_url: "https://www.theflavorbender.com/wp-content/uploads/2014/09/Simpsons-Doughnuts-4238-Copy-1.jpg",
            donut_id: 9,
            created_at: "2018-10-23T20:05:56.382Z",
            updated_at: "2018-10-23T20:05:56.382Z",
            shop_id: 12
          }
        ],
        shop: {
          id: 13,
          name: "Honeydew Donuts",
          address: "1600 Pennsylvia Ave NW",
          city: "Washington, DC",
          state: "DC",
          url: "www.honeydewrules.org",
          phone: "111-111-1112",
          created_at: "2018-10-23T20:05:14.954Z",
          updated_at: "2018-10-23T20:05:14.954Z"
        }
      }
    ],
    reviews: [
      {
        rating: 2,
        body: "this is a very mediocre and not exciting donut",
        price_range: "2",
        photo_url: "https://www.theflavorbender.com/wp-content/uploads/2014/09/Simpsons-Doughnuts-4238-Copy-1.jpg"
      }
    ]
  }
}
  fetchMock.get(`/api/v1/shop/1`, {
    status: 200,
    body: data
  })
    wrapper = mount(
      <ShopShow
        params = {{ id: [13, 9, 6]}}
      />
    );
  });

  afterEach(fetchMock.restore)

    it('should render a donut tile component', (done) => {
      setTimeout(() => {
          expect(wrapper.find(DonutTile)).toBePresent();
          done()
      }, 0)
    });

    it('should render an h1', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1')).toBePresent()
        expect(wrapper.find('h1').text()).toEqual('Store Name:')
        done()
      }, 0)
    })


  });
