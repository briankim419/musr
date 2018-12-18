# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

genre_info = [
  {name: 'Rock'},#1
  {name: 'Hip-Hop'},#2
  {name: 'Country'},#3
  {name: 'Electronic'},#4
  {name: 'Jazz'},#5
  {name: 'Classical'}#6
]
rock = Genre.create(genre_info[0])
hiphop = Genre.create(genre_info[1])
country = Genre.create(genre_info[2])
electronic = Genre.create(genre_info[3])
jazz = Genre.create(genre_info[4])
classical = Genre.create(genre_info[5])



Album.create(
  name:"Are You Experienced",
  description:"Are You Experienced is the debut studio album by English-American rock band the Jimi Hendrix Experience. Released in 1967, the LP was an immediate critical and commercial success, and it is widely regarded as one of the greatest debuts in the history of rock music.",
  artist:"The Jimi Hendrix Experience",
  release_date:"23/08/1967",
  genre_id: rock,
  remote_album_art_url: "https://musr-development.s3.amazonaws.com/uploads/album/album_art/13/511p5QqAyEL._SS500.jpg"
)
Album.create(
  name:"Back in Black",
  description:"Back in Black is the seventh studio album by Australian rock band AC/DC.  Lead singer Bon Scott died in February 1980, after recording for Back in Black had already started. Instead of disbanding, the group decided to continue on with new vocalist Brian Johnson.",
  artist:"AC/DC",
  release_date:"25/07/1980",
  genre_id:rock,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/14/61sJIfuUSiL._SL1500_.jpg"
)

Album.create(
  name:"Mothership",
  description:"Mothership is a greatest hits compilation album by English rock group Led Zeppelin, released by Atlantic Records and Rhino Entertainment on 12 November 2007 in the United Kingdom, and 13 November 2007 in the United States. The songs included were chosen by the surviving members of Led Zeppelin, Robert Plant, Jimmy Page and John Paul Jones, and represent the first eight of the band's nine studio albums.",
  artist:"Led Zeppelin",
  release_date:"12/11/2007",
  genre_id:rock,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/15/81vhXYdaAkL._SL1500_.jpg"
)

Album.create(
  name:"Illmatic",
  description:"Styled as a hardcore hip hop album, Illmatic features multi-syllabic internal rhymes and inner-city narratives based on Nas' experiences in Queensbridge, New York.",
  artist:"Nas",
  release_date:"19/04/1994",
  genre_id:hiphop,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/16/81oJg8R1C4L._SL1500_.jpg"
)

Album.create(
  name:"The Marshall Mathers LP",
  description:"Released a year after Eminem's breakout album The Slim Shady LP, the album features more introspective lyricism including the rapper's response to his sudden rise to fame and controversy surrounding his lyrics.",
  artist:"Eminem",
  release_date:"23/05/2000",
  genre_id:hiphop,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/17/67w0mk82qncrv3y7l79nk3nvn.800x800x1.jpg"
)

Album.create(
  name:"Scorpion",
  description:"Scorpion is the fifth studio album by Canadian rapper Drake. It was released on June 29, 2018 by Young Money Entertainment, Cash Money Records and Republic Records. Scorpion is a double album consisting of 25 tracks. Its A-side is primarily hip hop, whilst its B-side has been described as R&B and pop.",
  artist:"Drake",
  release_date:"29/06/2018",
  genre_id:hiphop,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/18/220px-Scorpion_by_Drake.jpg"
)

Album.create(
  name:"Red",
  description:"Red is the fourth studio album by American singer-songwriter Taylor Swift, and her last to feature a country sound. It was released on October 22, 2012, by Big Machine Records, as the follow-up to her third studio album, Speak Now. The album title was inspired by the semi-toxic relationships that Swift experienced during the process of conceiving this album, with Swift describing the emotions she felt as red emotions due to their intense and tumultuous nature. Red touches on Swift's signature themes of love and heartbreak, however, from a more mature perspective while exploring other themes such as fame and the pressure of being in the limelight.",
  artist:"Taylor Swift",
  release_date:"22/10/2012",
  genre_id:country,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/19/redcd_550x550.jpg"

)

Album.create(
  name:"Traveller",
  description:"Described by music publications as an old-school country, Southern rock record, Traveller received critical acclaim and earned Stapleton several awards. It was named Album of the Year at the 2015 Country Music Association Awards.",
  artist:"Chris Stapleton",
  release_date:"05/05/2015",
  genre_id:country,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/20/9b98dd54-bc08-40f2-8ca1-f411a0006920_1.bee25bc6bdf2fae48828d69ea16a7e6c.jpeg"
)

Album.create(
  name:"They Don't Know",
  description:"They Don't Know is the seventh studio album by American country music artist Jason Aldean. It was released on September 9, 2016 via Broken Bow Records. Its lead single, Lights Come On, was released on April 1, 2016 and has reached number one on the Country Airplay chart.",
  artist:"Jason Aldean",
  release_date:"09/09/2016",
  genre_id:country,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/21/9de40a387aa805a624bc1668e4e7e855.1000x1000x1.jpg"
)

Album.create(
  name:"Discovery",
  description:"Discovery is the second studio album by French electronic music duo Daft Punk, released on 26 February 2001 by Virgin Records. It marks a shift from the Chicago house sound prevalent on their first studio record, Homework (1997), to a house style more heavily inspired by disco, post-disco, garage house, and R&B.",
  artist:"Daft Punk",
  release_date:"26/02/2001",
  genre_id:electronic,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/22/R-136430-1481404839-1193.png.jpg"
)

Album.create(
  name:"Peace is the Mission",
  description:"Peace Is the Mission is the third studio album by American electronic dance music band Major Lazer. The album was preceded by the international hit single Lean On featuring DJ Snake and MØ. The single reached number one in Australia, New Zealand, Belgium, Denmark, Finland and the Netherlands and peaked within the top ten in an additional fourteen countries including the United Kingdom, the United States, and Germany.",
  artist:"Major Lazer",
  release_date:"01/06/2015",
  genre_id:electronic,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/23/1200x630bb.jpg"
)

Album.create(
  name:"New Energy",
  description:"New Energy follows a more uptempo, listener-friendly style than previous Four Tet records while containing elements of those albums and a variety of musical styles as well as virtual instrument replications of culturally-tinged instruments. The album garnered critical acclaim, landing on several year-end lists by publications such as PopMatters, Q, Uncut, The Guardian, and Pitchfork, and reached number 48 on the UK Albums Chart.",
  artist:"Four Tet",
  release_date:"29/09/2017",
  genre_id:electronic,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/24/a2586093619_10.jpg"
)

Album.create(
  name:"Kind of Blue",
  description:"Kind of Blue has been regarded by many critics as the greatest jazz record, Davis's masterpiece, and one of the best albums of all time. Its influence on music, including jazz, rock, and classical genres, has led writers to also deem it one of the most influential albums ever recorded.",
  artist:"Miles Davis",
  release_date:"17/08/1959",
  genre_id:jazz,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/25/81O-f8VghNL._SL1500_.jpg"
)

Album.create(
  name:"Blue Train",
  description:"Blue Train is a studio album by John Coltrane, released in 1958 on Blue Note Records, catalogue BLP 1577. Recorded at the Van Gelder Studio in Hackensack, New Jersey. It is the only Blue Note recording by Coltrane as session leader. It has been certified a gold record by the RIAA.",
  artist:"John Coltrane",
  release_date:"02/02/1958",
  genre_id:jazz,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/26/51_53sYbnlL.jpg"
)

Album.create(
  name:"The Epic",
  description:"The Epic is the second studio album by American jazz saxophonist Kamasi Washington. It was released on May 5, 2015, through the Brainfeeder record label and counts as his major label debut.",
  artist:"Kamasi Washington",
  release_date:"05/05/2015",
  genre_id:jazz,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/30/kamasi-washington-the-epicjpg.jpg"
)

Album.create(
  name:"Vivaldi's Cello",
  description:"Vivaldi’s Cello is a 2004 album of various arrangements taken from Antonio Vivaldi's operas and oratorios performed by Yo-Yo Ma and the Amsterdam Baroque Orchestra, Ton Koopman, conductor. The album was recorded on November 17-20, 2003 at De Stadsgehoorzaal, Leiden, The Netherlands.",
  artist:"Yo-Yo Ma",
  release_date:"04/04/2004",
  genre_id:classical,
  remote_album_art_url: "https://musr-development.s3.amazonaws.com/uploads/album/album_art/27/0002690672.jpg"
)

Album.create(
  name:"The Brandenburg Concertos, Nos. 4, 5, & 6",
  description:"This first-rate set of Brandenburg Concertos (with its companion containing Concertos 1, 2, and 3) offers stylish, mostly modern-instrument performances that remain faithful to the spirit of Bach's scores--recorders are used in No. 4, harpsichord in No. 5, and viols in No. 6--while exploiting the brilliant timbre of 20th century strings. In 1980, Sir Neville Marriner was one of the gods of Baroque and classical period music, and this disc shows why.",
  artist:"J.S. Bach and the Academy of St. Martin in the Fields",
  release_date:"02/08/1958",
  genre_id:classical,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/28/61B9qix_D5L._SX466_.jpg"
)

Album.create(
  name:"Mussorgsky: Pictures at an Exhibition",
  description:"It is possible that there may be better recorded performances of Mussorgsky's original piano version of Pictures at an Exhibition -- the coruscating Horowitz and the colossal Richter leap to mind -- and it's certain that there are recorded performances as good or better of Ravel's orchestral transcription of Pictures -- the mighty Reiner and the magnificent Szell among many others -- but there is now no finer coupling of Mussorgsky's original and Ravel's transcription than this one with Byron Janis for the original and Antal Dorati and the Minneapolis Symphony for the transcription. At the time the recording was made in 1961, Janis was at the peak of his career as an American super-virtuoso and his performance of the original is awe-inspiring.",
  artist:"Byron Janis & Minneapolis Symphony Orchestra & Antal Doráti",
  release_date:"12/12/1993",
  genre_id:classical,
  remote_album_art_url:"https://musr-development.s3.amazonaws.com/uploads/album/album_art/29/MI0001110794.jpg"
)
