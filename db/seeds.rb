# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

genre_info = [
  {name: 'Rock'},
  {name: 'Hip Hop/R&B'},
  {name: 'Country'},
  {name: 'Electronic'},
  {name: 'Jazz'},
  {name: 'Classical'}
]

genre_info.each do |genre|
  Genre.create(genre)
end

  Album.create(name:"Scorpion", description:"hip-hop genius", artist:"Drake", release_date:"03/09/2018", genre_id:2)
  Album.create(name:"Red", description:"Not so genius", artist:"Taylor Swift", release_date:"03/09/2014", genre_id:1)
  Album.create(name:"Mothership", description:"First Album for Led Zeppelin", artist:"Led Zeppelin", release_date:"02/14/1971", genre_id:1)
