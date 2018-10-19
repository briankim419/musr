require 'rails_helper'

RSpec.describe Album, :type => :model do

  before(:each) do
    genre = FactoryBot.create(:genre, name: "Rap")
  end

  subject {
    described_class.new(name: "All Eyez on Me", artist: "Tupac", description: "lorem ipsum", release_date: DateTime.now, genre_id: Genre.first.id)
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "should not be valid without a name" do
    subject.name = nil
    expect(subject).to_not be_valid
    subject.name = ""
    expect(subject).to_not be_valid
  end

  it "should not be valid without an artist" do
    subject.artist = nil
    expect(subject).to_not be_valid
    subject.artist = ""
    expect(subject).to_not be_valid
  end

  it "should not be valid without a description" do
    subject.description = nil
    expect(subject).to_not be_valid
    subject.description = ""
    expect(subject).to_not be_valid
  end

  it "should not be valid without a release date" do
    subject.release_date = nil
    expect(subject).to_not be_valid
    subject.release_date = ""
    expect(subject).to_not be_valid
  end

  it "should not be valid without an associated genre" do
    subject.genre_id = nil
    expect(subject).to_not be_valid
    subject.genre_id = ""
    expect(subject).to_not be_valid
  end

end
