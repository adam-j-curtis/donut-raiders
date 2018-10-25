import DonutShow from '../../../app/javascript/react/containers/DonutShow'
import ReviewTile from '../../../app/javascript/react/components/ReviewTile'
import fetchMock from 'fetch-mock'

describe('DonutShow', () => {
  let data,
      wrapper;

  beforeEach(() => {
  data = {
    donut: {
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
  }
  fetchMock.get(`/api/v1/shops/13/donuts/9`, {
    status: 200,
    body: data
  })
    wrapper = mount(
      <DonutShow
        params = {{ id: [13, 9]}}
      />
    );
  });

  afterEach(fetchMock.restore)
    it('should render a review tile component', (done) => {
      setTimeout(() => {
          expect(wrapper.find(ReviewTile)).toBePresent();
          expect(wrapper.find('h3').first().text()).toEqual('Rating: 2')
          expect(wrapper.find('h3').at(1).text()).toEqual('Review: this is a very mediocre and not exciting donut')
          expect(wrapper.find('h3').last().text()).toEqual('Post Date: 2018-10-23T20:05:56.382Z')
          done()
      }, 0)
    });

    it('should render donut and shop information', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h2')).toBePresent()
        expect(wrapper.find('h1').first().text()).toEqual('Jelly Donut')
        expect(wrapper.find('h1').at(1).text()).toEqual('Honeydew Donuts')
        expect(wrapper.find('h4').at(0).text()).toEqual('1600 Pennsylvia Ave NW')
        expect(wrapper.find('h4').last().text()).toEqual('www.honeydewrules.org')
        done()
      }, 0)
    })
  });
