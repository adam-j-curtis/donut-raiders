import ShopShow from '../../../app/javascript/react/containers/ShopShow'
import DonutTile from '../../../app/javascript/react/components/DonutTile'
import fetchMock from 'fetch-mock'

describe('ShopShow', () => {
  let data,
      wrapper;

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
          },
          category: {
            id: 12,
            name: "Seasonal",
            created_at: "2018-10-23T20:05:02.679Z",
            updated_at: "2018-10-23T20:05:02.679Z"
            }
          }
        ],
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
        ]
    }
  }
  fetchMock.get('/api/v1/shops/13', {
    status: 200,
    body: data
  })
    wrapper = mount(
      <ShopShow
        params = {{ id: 13}}
      />
    );
  });

  afterEach(fetchMock.restore)
    it('should render shop show information', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1')).toBePresent()
        expect(wrapper.find('h1').first().text()).toEqual("Honeydew Donuts");
        expect(wrapper.find('h3').first().text()).toEqual("1600 Pennsylvia Ave NW");
        expect(wrapper.find('a').last().text()).toEqual("Jelly Donut");
        done()
      }, 0)
    })

    it('should render a donut tile component', (done) => {
      setTimeout(() => {
          expect(wrapper.find(DonutTile)).toBePresent();
          expect(wrapper.find('h1')).toBePresent()
          expect(wrapper.find('h2').text()).toEqual('Donuts:')
          done()
      }, 0)
    });
  });
