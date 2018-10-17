require 'rails_helper'

feature 'user visits donut index page' do
  scenario 'user sees a list of donuts' do

    Shop.create(name: "Dunkin' Donuts", address: "56 Westview Lane", city: "Pittsburgh", state: "PA", url:"www.google.com", phone:"123-456-7890")

    Shop.create(name: "Honeydew Donuts", address: "1600 Pennsylvia Ave NW", city: "Washington, DC", state: "DC", url:"www.honeydewrules.org", phone:"111-111-1112")

    Shop.create(name: "Union Square Donuts", address: "55 Bow Street", city: "Somerville", state: "MA", url:"www.donutsarecool.web", phone:"222-222-2222")

    Category.create(name: "Old-Fashioned")
    Category.create(name: "Filled")
    Category.create(name: "Seasonal")

    donut1 = Donut.create(name: "Sugar-Raised Donut", category_id: 1, shop_id: 3)
    donut2 = Donut.create(name: "Jelly Donut", category_id: 2, shop_id: 2)
    donut3 = Donut.create(name: "French Crueller", category_id: 3, shop_id: 1)


    title = "Donut Index"

    visit donuts_path

    expect(page).to have_content title

    expect(page).to have_content donut1.name
    expect(page).to have_content donut2.name
    expect(page).to have_content donut3.name

  end
end
