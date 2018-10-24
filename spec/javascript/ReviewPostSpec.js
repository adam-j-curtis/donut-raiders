import fetchMock from 'fetch-mock'

it('successfully adds to the reviews when a valid review is supplied', (done) => {
  fetchMock.post('/api/v1/reviews', {
    status: 201,
    body: {id: 4124, rating: 4, body: 'yummy', price_range: '$$'}
  });
  setTimeout(() => {
  let reviewCount = wrapper.find('li').length
  wrapper.find('.submit-button').simulate('submit')
  setTimeout(() => {
    expect(wrapper.find('li').length).toEqual(reviewCount + 1)
    done()
  })
}, 0)
})

// it('shows an error message when a 422 status is received', (done) => {
//   fetchMock.post('/api/v1/reviews', {
//     status: 422,
//     body: { errors: ["Body can't be blank"] }
//   });
//   wrapper.find('.submit-button').simulate('submit')
//   setTimeout(() => {
//     expect(wrapper.find('ul.errors')).toBePresent()
// //    expect(wrapper.find('ul.errors li').text()).toEqual("Body can't be blank")
//     done()
//   }, 0)
// })
