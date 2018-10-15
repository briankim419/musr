require 'rails_helper'

feature "visitor sees a list of genres" do
  scenario "Sees a list of genres and links for genres" do
    rock = Genre.create(name:'Rock')

    visit genres_path

    expect(page).to have_content "Rock"

  end
  scenario "clicks link and is taken to show page for given genre" do
    rock = Genre.create(name:'Rock')

    visit genres_path

    click_link "Rock"

    expect(page).to have_content rock.name
  end
end
