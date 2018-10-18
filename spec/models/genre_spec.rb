require 'spec_helper'

RSpec.describe Genre, :type => :model do

  subject {
    described_class.new(name: "Rock")
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
end
