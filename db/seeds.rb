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
sugar_raised_us = Donut.create!(name: "Sugar-Raised Donut", category: old_fashioned, shop: union_square)
maple_bacon_us = Donut.create!(name: "Maple Bacon Donut", category: old_fashioned, shop: union_square)
vietnamese_us = Donut.create!(name: "Vietnamese Donut", category: old_fashioned, shop: union_square)
vanilla_bean_us = Donut.create!(name: "Vanilla Bean Donut", category: old_fashioned, shop: union_square)
honey_glazed_us = Donut.create!(name: "Honey Glaze Donut", category: old_fashioned, shop: union_square)
cinnamon_sugar_us = Donut.create!(name: "Cinnamon Sugar Donut", category: old_fashioned, shop: union_square)
pumpkin_spice_us = Donut.create!(name: "Pumpkin Spice Donut", category: seasonal, shop: union_square)
apple_cide_cake_us = Donut.create!(name: "Apple Cider Cake Donut", category: seasonal, shop: union_square)





kanes = Shop.create!(name: "Kane's Donuts", address: "90 Oliver St", city: "Boston", state: "MA", url:"www.kanesdonunts.com", phone:"857-317-2654")
honey_dip_kanes = Donut.create!(name: "Honey Dip Donut", category: old_fashioned, shop: kanes)
boston_cream_kanes = Donut.create!(name: "Boston Cream Donut", category: filled, shop: kanes)
chocolate_honey_dip_kanes = Donut.create!(name: "Chocolate Honey Dip Donut", category: old_fashioned, shop: kanes)
honey_dip_kanes = Donut.create!(name: "Honey Dip Donut", category: old_fashioned, shop: kanes)
butter_crunch_kanes = Donut.create!(name: "Butter Crunch Donut", category: old_fashioned, shop: kanes)
creme_brulee_kanes = Donut.create!(name: "Creme Brulee Donut", category: old_fashioned, shop: kanes)
raspberry_jelly_kanes = Donut.create!(name: "Raspberry Jelly Donut", category: filled, shop: kanes)
maine_blueberry_kanes = Donut.create!(name: "Maine Blueberry Donut", category: old_fashioned, shop: kanes)
almond_joy_kanes = Donut.create!(name: "Almond Joy Donut", category: seasonal, shop: kanes)
dark_cloud_kanes = Donut.create!(name: "Dark Cloud Donut", category: seasonal, shop: kanes)
blueberry_crumble_kanes = Donut.create!(name: "Blueberry Crumble Donut", category: seasonal, shop: kanes)
ginger_beer_kanes = Donut.create!(name: "Ginger Beer Donut", category: seasonal, shop: kanes)
pistachio_kanes = Donut.create!(name: "Pistachio Donut", category: seasonal, shop: kanes)










jelly = Donut.create!(name: "Jelly Donut", category: filled, shop: honeydew)

french_crueller = Donut.create!(name: "French Crueller", category: seasonal, shop: dunkin)

review1 = Review.create!(rating: 4, body: "this is the best donut i have ever tasted in my 7 years on this earth", price_range: "1", photo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1200px-Glazed-Donut.jpg", donut: sugar_raised, shop: union_square )

review2 = Review.create!(rating: 2, body: "this is a very mediocre and not exciting donut", price_range: "2", photo_url: "https://www.theflavorbender.com/wp-content/uploads/2014/09/Simpsons-Doughnuts-4238-Copy-1.jpg", donut: jelly, shop: dunkin)
