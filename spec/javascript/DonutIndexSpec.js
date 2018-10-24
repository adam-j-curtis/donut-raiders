// import DonutIndex from '../../app/javascript/react/containers/DonutIndex'
// import DonutTile from '../../app/javascript/react/components/DonutTile'
//
// import fetchMock from 'fetch-mock'
//
//
//
// describe("DonutIndex", () => {
//   let wrapper;
//   let data;
//
//   beforeEach(() => {
//     data = {
//       donuts: [
//         {
//           id: 1,
//           name: "Chocolate Glazed",
//           reviews: [
//             {
//               id: 1,
//               rating: 0,
//               body: "DIABATESA AAARFRR!!!",
//               price_range: "ridic",
//               photo_url: null,
//               donut_id: 1,
//               created_at: "2018-10-17T21:22:09.806Z",
//               updated_at: "2018-10-17T21:22:09.806Z",
//               shop_id: 2
//             }
//           ],
//           shop: {
//             id: 2,
//             name: "Dunkin'",
//             address: "32 Main St.",
//             city: "West Palm Beach",
//             state: "Florida",
//             url: "www.dunkinisbad.com",
//             phone: "666-666-6666",
//             created_at: "2018-10-17T13:39:28.050Z",
//             updated_at: "2018-10-17T13:39:28.050Z"
//           }
//         }
//       ]
//     }
//
//     fetchMock.get('/api/v1/donuts', {
//       status: 200,
//       body: data
//     });
//
//     wrapper = mount(
//       <DonutIndex />
//     );
//   })
//
//
//   afterEach(fetchMock.restore);
//
//   describe('donut index container', () => {
//     it('renders an h1', (done) => {
//       setTimeout(() => {
//         expect(wrapper.find('h1')).toBePresent()
//         expect(wrapper.find('h1').text()).toEqual('Chocolate Glazed')
//         done()
//       }, 0)
//     })
//
//     it('renders an h4 for each item returned from the api call', (done) => {
//       setTimeout(() => {
//         expect(wrapper.find('h4').text()).toEqual(data.donuts[0].shop.name)
//         done()
//       }, 0)
//     })
//   })
// })
