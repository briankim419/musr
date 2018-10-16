require 'rails_helper'

feature "visitor sees a list of genres" do
  let!(:rock) { Genre.create(name:'Rock') }
  let!(:classical) { Genre.create(name: 'Classical') }

  scenario "Sees a list of genres and links for genres" do

    visit genres_path

    expect(page).to have_content "Rock"
    expect(page).to have_content "Classical"

  end
  scenario "clicks link and is taken to show page for given genre" do

    visit genres_path

    expect(page).to have_link('Rock')
    expect(page).to have_link('Classical')

  end
end
