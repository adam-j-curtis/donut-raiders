# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
old_fashioned = Category.create!(name: "Old-Fashioned")
filled = Category.create!(name: "Filled")
seasonal = Category.create!(name: "Seasonal")

dunkin = Shop.create!(name: "Dunkin' Donuts", address: "56 Westview Lane", city: "Pittsburgh", state: "PA", url:"www.google.com", phone:"123-456-7890")

honeydew = Shop.create!(name: "Honeydew Donuts", address: "1600 Pennsylvia Ave NW", city: "Washington, DC", state: "DC", url:"www.honeydewrules.org", phone:"111-111-1112")

union_square = Shop.create!(name: "Union Square Donuts", address: "55 Bow Street", city: "Somerville", state: "MA", url:"www.donutsarecool.web", phone:"222-222-2222")

sugar_raised = Donut.create!(name: "Sugar-Raised Donut", category: old_fashioned, shop: union_square)

jelly = Donut.create!(name: "Jelly Donut", category: filled, shop: honeydew)

french_crueller = Donut.create!(name: "French Crueller", category: seasonal, shop: dunkin)

review1 = Review.create!(rating: 4, body: "this is the best donut i have ever tasted in my 7 years on this earth", price_range: "1", photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1200px-Glazed-Donut.jpg", donut: sugar_raised, shop: union_square )

review2 = Review.create!(rating: 2, body: "this is a very mediocre and not exciting donut", price_range: "2", photo_url: "https://www.theflavorbender.com/wp-content/uploads/2014/09/Simpsons-Doughnuts-4238-Copy-1.jpg", donut: jelly, shop: dunkin)
