// Add a restaurant by copying an object.
// cuisine values become food filters. meals use breakfast, brunch, lunch, dinner, drinks.
// Within one row, any selected tag matches. Across the two rows, both have to match.

const restaurants = [
  {
    name: "L’Échelle",
    neighborhood: "Richmond",
    cuisine: ["French"],
    meals: ["brunch", "dinner"],
    note: "French bistro on Division. Brunch is two seatings, Saturday and Sunday. Dinner is Wednesday through Sunday.",
    website: "https://www.lechellepdx.com/",
    image: "photos/lechelle.jpg",
    alt: "Brick corner bistro with a blue L’Échelle sign at SE Division and 46th.",
    spots: [{ address: "4537 SE Division St", city: "Portland, OR 97206" }],
  },
  {
    name: "Silk Road",
    neighborhood: "Pearl District",
    cuisine: ["Chinese", "Cocktails"],
    meals: ["dinner", "drinks"],
    note: "Cocktail bar with a Chinese American kitchen, open from late afternoon into the night. Closed Monday and Tuesday.",
    website: "https://silkroadpdx.com/",
    image: "photos/silk.jpg",
    alt: "Backbar at Silk Road, bottles lit on curved shelves above a marble counter.",
    spots: [{ address: "1230 NW Hoyt St, Suite B", city: "Portland, OR 97209" }],
  },
  {
    name: "Andina",
    neighborhood: "Pearl District",
    cuisine: ["Peruvian", "Tapas", "Wine Bar"],
    meals: ["brunch", "dinner", "drinks"],
    note: "Modern Peruvian cooking since 2003, with tapas, a wine list, and a lounge. Sunday brunch, dinner every night.",
    website: "https://www.andinarestaurant.com/",
    image: "photos/andina.jpg",
    alt: "Dim dining room at Andina, with hanging plants and paper lanterns.",
    spots: [{ address: "1314 NW Glisan St", city: "Portland, OR 97209" }],
  },
  {
    name: "Bamboo Sushi",
    neighborhood: "Four Portland rooms",
    cuisine: ["Sushi"],
    meals: ["lunch", "dinner", "drinks"],
    note: "Sustainable sushi. Alberta and downtown serve lunch every day. The SE 28th and NW 23rd rooms serve lunch Friday through Sunday, and open at 4 the other days.",
    website: "https://bamboosushi.com/",
    image: "photos/bamboo.jpg",
    alt: "Bamboo Sushi at dusk, diners in the window under a green sign.",
    spots: [
      { label: "Buckman", address: "310 SE 28th Ave", city: "Portland, OR 97214" },
      { label: "Alberta", address: "1409 NE Alberta St", city: "Portland, OR 97211" },
      { label: "Nob Hill", address: "836 NW 23rd Ave", city: "Portland, OR 97210" },
      { label: "Downtown", address: "404 SW 12th Ave", city: "Portland, OR 97205" },
    ],
  },
  {
    name: "Lilia Comedor",
    neighborhood: "North Park Blocks",
    cuisine: ["Mexican"],
    meals: ["dinner", "drinks"],
    note: "Hyper-seasonal Mexican from chef Juan Gomez, with a wine and cocktail list. Dinner Tuesday through Saturday.",
    website: "https://liliapdx.com/",
    image: "photos/lilia.jpg",
    alt: "A bowl of fried seafood over green sauce, with cheese and edible flowers.",
    spots: [{ address: "422 NW 8th Ave", city: "Portland, OR 97209" }],
  },
  {
    name: "Ava Gene’s",
    neighborhood: "Richmond",
    cuisine: ["Italian"],
    meals: ["dinner", "drinks"],
    note: "Roman-inspired Italian on Division, with a regional wine list and cocktails. Dinner every night.",
    website: "https://www.avagenes.com/",
    image: "photos/ava.jpg",
    alt: "Hands nesting fresh fettuccine on a wooden board.",
    spots: [{ address: "3377 SE Division St", city: "Portland, OR 97202" }],
  },
  {
    name: "Mediterranean Exploration Company",
    neighborhood: "Pearl District",
    cuisine: ["Mediterranean"],
    meals: ["dinner", "drinks"],
    note: "Hearth-fired Mediterranean cooking and a bar program in the industrial Pearl. Dinner every day.",
    website: "https://www.sesamecollective.com/mec",
    image: "photos/mec.jpg",
    alt: "Dining room with wood tables, white chairs, and a blue floral mural.",
    spots: [{ address: "333 NW 13th Ave", city: "Portland, OR 97209" }],
  },
  {
    name: "Han Oak",
    neighborhood: "Kerns",
    cuisine: ["Korean"],
    meals: ["dinner", "drinks"],
    note: "Communal Korean dinner at NE 24th and Glisan. Wednesday through Saturday, last seating 9:30.",
    website: "https://www.hanoakpdx.com/",
    image: "photos/han-oak.jpg",
    alt: "Han Oak’s open kitchen seen through a wood slat screen, with the bar in front.",
    spots: [{ address: "511 NE 24th Ave", city: "Portland, OR 97232" }],
  },
  {
    name: "Davenport",
    neighborhood: "Buckman",
    cuisine: ["Seafood"],
    meals: ["dinner", "drinks"],
    note: "Seafood and a serious wine list. Dinner Wednesday through Saturday, 5 to 9. Closed Sunday through Tuesday.",
    website: "https://www.davenportpdx.com/",
    image: "photos/davenport.jpg",
    alt: "A pale plate of green dumplings in broth, with pink tulips on the table.",
    spots: [{ address: "2215 E Burnside St", city: "Portland, OR 97214" }],
  },
  {
    name: "Angel Face",
    neighborhood: "Kerns",
    cuisine: ["Cocktails", "French"],
    meals: ["dinner", "drinks"],
    note: "French plates and cocktails. No reservations. Sunday through Thursday 4:30 to 11, Friday and Saturday until midnight.",
    website: "https://www.angelfaceportland.com/",
    images: [
      { src: "photos/angel.jpg", alt: "The Angel Face bar, pink floral wallpaper beside a round marble counter." },
      { src: "photos/angel-2.jpg", alt: "A wooden board of radishes, tomato, and a glass of white wine." },
      { src: "photos/angel-3.jpg", alt: "Sliced steak and fries on a white plate." },
    ],
    spots: [{ address: "14 NE 28th Ave", city: "Portland, OR 97232" }],
  },
  {
    name: "Lovely’s Fifty Fifty",
    neighborhood: "Boise",
    cuisine: ["Pizza"],
    meals: ["dinner"],
    note: "Pizza on Mississippi. Dinner nightly, about 5 to 10.",
    website: "https://www.lovelys5050.com/",
    image: "photos/lovelys.jpg",
    alt: "A blistered pizza with tomatoes, greens, and yellow petals.",
    spots: [{ address: "4039 N Mississippi Ave", city: "Portland, OR 97227" }],
  },
  {
    name: "Eem",
    neighborhood: "Boise",
    cuisine: ["Thai", "Barbecue"],
    meals: ["lunch", "dinner", "drinks"],
    note: "Thai barbecue. Lunch every day 11 to 4. Dinner until 9, and until 10 Friday and Saturday.",
    website: "https://www.eempdx.com/",
    image: "photos/eem.jpg",
    alt: "A salad on a patterned plate beside a bowl of yellow curry.",
    spots: [{ address: "3808 N Williams Ave, Suite 127", city: "Portland, OR 97227" }],
  },
  {
    name: "Tartuca",
    neighborhood: "Boise",
    cuisine: ["Italian", "Pizza"],
    meals: ["dinner", "drinks"],
    note: "Italian pizza and wine. Closed Monday. Tuesday through Thursday from 5, Friday through Sunday from 4:30.",
    website: "https://www.tartucapdx.com/",
    image: "photos/tartuca.jpg",
    alt: "A Tartuca menu on a dark table.",
    spots: [{ address: "3951 N Mississippi Ave", city: "Portland, OR 97227" }],
  },
  {
    name: "Khao Moo Dang",
    neighborhood: "Sunnyside",
    cuisine: ["Thai"],
    meals: ["lunch", "dinner"],
    note: "Counter-service Thai, walk-in. Daily from 11 to 9, Friday and Saturday until 9:30.",
    website: "https://www.kmdpdx.com/",
    image: "photos/khao.jpg",
    alt: "Bowls of rice, noodles, pork, and eggs on a red checked table.",
    spots: [{ address: "3145 SE Hawthorne Blvd", city: "Portland, OR 97214" }],
  },
  {
    name: "Bao Bao",
    neighborhood: "Kerns",
    cuisine: ["Chinese"],
    meals: ["lunch", "dinner"],
    note: "Fast Chinese, counter service. Daily 11 to 8.",
    image: "photos/baobao.jpg",
    alt: "Two steamed buns in a bamboo steamer, with a dish of chili sauce.",
    spots: [{ address: "545 NE Couch St", city: "Portland, OR 97232" }],
  },
  {
    name: "Flying Fish Company",
    neighborhood: "Kerns",
    cuisine: ["Seafood"],
    meals: ["lunch", "dinner", "drinks"],
    note: "Seafood market and oyster bar. Thursday through Monday. Market from 10, restaurant from 11:30. Closed Tuesday and Wednesday.",
    website: "https://flyingfishpdx.com/",
    image: "photos/flying-fish.jpg",
    alt: "The blue Flying Fish storefront, with Fish Market and Restaurant Oyster Bar signs.",
    spots: [{ address: "3004 E Burnside St", city: "Portland, OR 97214" }],
  },
  {
    name: "Hey Love",
    neighborhood: "Buckman",
    cuisine: ["Cocktails"],
    meals: ["brunch", "dinner", "drinks"],
    note: "Cocktail bar inside Jupiter NEXT. Weekdays from 3. Saturday and Sunday from late morning. The kitchen is Machetes, Mexico City street food.",
    website: "https://www.heylovepdx.com/",
    image: "photos/hey-love.jpg",
    alt: "Woven lamps and hanging plants over the backbar at Hey Love.",
    spots: [{ address: "920 E Burnside St", city: "Portland, OR 97214" }],
  },
  {
    name: "Interurban",
    neighborhood: "Boise",
    cuisine: ["Bar", "New American"],
    meals: [],
    closed: "Closed January 2026",
    note: "Last day was January 18, 2026. It was a bar with a New American kitchen on Mississippi.",
    spots: [{ address: "4057 N Mississippi Ave", city: "Portland, OR 97217" }],
  },
  {
    name: "Breakside Brewery",
    neighborhood: "Two Portland pubs",
    cuisine: ["Brewery"],
    meals: ["lunch", "dinner", "drinks"],
    note: "The Dekum and Slabtown pubs, both daily 11:30 to 9. The Milwaukie brewery and the suburban rooms are left off this card.",
    website: "https://breakside.com/",
    image: "photos/breakside.jpg",
    alt: "Breakside Pilsner and Salted Caramel Stout bottles between pint glasses.",
    spots: [
      { label: "Woodlawn", address: "820 NE Dekum St", city: "Portland, OR 97211" },
      { label: "Slabtown", address: "1570 NW 22nd Ave", city: "Portland, OR 97210" },
    ],
  },
  {
    name: "Lúa",
    neighborhood: "Boise",
    cuisine: ["Vietnamese"],
    meals: [],
    closed: "Closed May 2026",
    note: "Raymond Chau closed Lúa in May 2026. The room on Williams is no longer the restaurant.",
    spots: [{ address: "3971 N Williams Ave, Suite 103", city: "Portland, OR 97227" }],
  },
  {
    name: "Harlow",
    neighborhood: "Division and Northwest",
    cuisine: ["Vegan"],
    meals: ["breakfast", "lunch", "dinner"],
    note: "Vegan, and gluten-free. Both rooms daily 8:30 to 7:30. The drinks are juice, not a bar.",
    website: "https://www.harlowpdx.com/",
    image: "photos/harlow.jpg",
    alt: "A grain bowl with avocado, carrots, and kimchi, beside a pink smoothie.",
    spots: [
      { label: "Richmond", address: "3715 SE Division St", city: "Portland, OR 97202" },
      { label: "Nob Hill", address: "505 NW 23rd Ave", city: "Portland, OR 97210" },
    ],
  },
  {
    name: "Janken",
    neighborhood: "Pearl District",
    cuisine: ["Japanese"],
    meals: ["dinner", "drinks"],
    note: "Japanese cooking with a Korean streak, and a bar. Closed Monday. Tuesday through Thursday from 5, Friday and Saturday from 4, Sunday from 5.",
    website: "https://www.jankenrestaurant.com/",
    image: "photos/janken.jpg",
    alt: "A pale cocktail in a coupe, garnished with a gold leaf.",
    spots: [{ address: "250 NW 13th Ave", city: "Portland, OR 97209" }],
  },
  {
    name: "Lawless Barbecue",
    neighborhood: "Buckman",
    cuisine: ["Barbecue"],
    meals: ["lunch", "dinner"],
    note: "Kansas City barbecue. Daily from 11:30 until 8, or until the meat is gone.",
    website: "https://www.lawlessq.com/",
    image: "photos/lawless.jpg",
    alt: "A tray of loaded nachos under a Lawless Barbecue title card.",
    spots: [{ address: "1520 SE 7th Ave", city: "Portland, OR 97214" }],
  },
  {
    name: "Kinnamōns",
    neighborhood: "Downtown",
    cuisine: ["Bakery"],
    meals: ["lunch", "dinner"],
    note: "Cinnamon rolls inside Baes Hot Chicken, daily 11 to 8. There is also a stand at the Moda Center during events.",
    website: "https://www.kinnamons.com/",
    image: "photos/kinnamons.jpg",
    alt: "Cinnamon rolls in a hotel pan, one being lifted off the tray.",
    spots: [{ address: "225 SW Ash St", city: "Portland, OR 97204" }],
  },
  {
    name: "Obon Shokudo",
    neighborhood: "Buckman",
    cuisine: ["Japanese"],
    meals: ["lunch", "dinner"],
    note: "Japanese home cooking, with vegan plates. Wednesday through Monday, 11:30 to 9. Closed Tuesday.",
    website: "https://www.obonpdx.com/",
    spots: [{ address: "720 SE Grand Ave", city: "Portland, OR 97214" }],
  },
  {
    name: "Toki",
    neighborhood: "Downtown",
    cuisine: ["Korean", "Tapas"],
    meals: [],
    closed: "Closed May 2024",
    note: "Peter Cho’s Korean tapas bar closed May 26, 2024. Han Oak is the room that is still open.",
    spots: [{ address: "580 SW 12th Ave", city: "Portland, OR 97205" }],
  },
  {
    name: "Double Dragon",
    neighborhood: "Hosford-Abernethy",
    cuisine: ["Sandwiches", "Ramen", "Cocktails"],
    meals: ["lunch", "dinner", "drinks"],
    note: "A Vietnamese-leaning bar with sandwiches, noodles, and cocktails. Sunday through Thursday noon to midnight, Friday and Saturday until 1.",
    website: "https://www.doubledragonpdx.com/",
    image: "photos/double-dragon.jpg",
    alt: "Two crushed-ice cocktails held over the bar.",
    spots: [{ address: "1235 SE Division St", city: "Portland, OR 97202" }],
  },
  {
    name: "Bastion",
    neighborhood: "Sellwood",
    cuisine: ["Breakfast"],
    meals: ["breakfast", "brunch", "lunch"],
    note: "Breakfast in Westmoreland. Wednesday through Sunday, 9 to 4. Closed Monday and Tuesday.",
    website: "https://www.bastionpdx.com/",
    image: "photos/bastion.jpg",
    alt: "Two halves of a dark seeded loaf.",
    spots: [{ address: "6116 SE Milwaukie Ave", city: "Portland, OR 97202" }],
  },
  {
    name: "Honeycuspe",
    neighborhood: "Buckman",
    cuisine: ["Breakfast"],
    meals: ["breakfast", "brunch", "lunch"],
    note: "Waffle cart at the WonderLove pod. Weekdays 9 to 2, weekends 9 to 6.",
    website: "https://wonderlovepdx.com/",
    image: "photos/honeycuspe.jpg",
    alt: "The WonderLove patio at sunset, picnic tables under a teal sail.",
    spots: [{ address: "262 SE Main St", city: "Portland, OR 97214" }],
  },
  {
    name: "Jam on Hawthorne",
    neighborhood: "Sunnyside",
    cuisine: ["Breakfast"],
    meals: ["breakfast", "brunch", "lunch"],
    note: "Breakfast through the early afternoon. Weekdays from 8 to 2. Weekends from 8, a little later.",
    website: "https://www.jamonhawthorne.com/",
    image: "photos/jam.jpg",
    alt: "A stack of pancakes under caramel sauce.",
    spots: [{ address: "2239 SE Hawthorne Blvd", city: "Portland, OR 97214" }],
  },
  {
    name: "Broder Café",
    neighborhood: "Clinton and Mississippi",
    cuisine: ["Breakfast"],
    meals: ["breakfast", "brunch", "lunch"],
    note: "Scandinavian breakfast. Both Portland rooms daily 9 to 3. The Garden Home room is left off this card.",
    website: "https://www.broderpdx.com/",
    image: "photos/broder.jpg",
    alt: "Aebleskiver, eggs, and a Scandinavian breakfast board.",
    spots: [
      { label: "Hosford-Abernethy", address: "2508 SE Clinton St", city: "Portland, OR 97202" },
      { label: "Boise", address: "3765 N Mississippi Ave", city: "Portland, OR 97227" },
    ],
  },
  {
    name: "Pine State Biscuits",
    neighborhood: "Four Portland shops",
    cuisine: ["Breakfast"],
    meals: ["breakfast", "brunch", "lunch"],
    note: "Biscuits, 8 to 2. The Reno shop is left off this card.",
    website: "https://pinestatebiscuits.com/",
    image: "photos/pine-state.jpg",
    alt: "A tray of biscuits in the Pine State kitchen.",
    spots: [
      { label: "Nob Hill", address: "1717 NW 23rd Ave", city: "Portland, OR 97210" },
      { label: "Alberta", address: "2204 NE Alberta St", city: "Portland, OR 97211" },
      { label: "Division", address: "1100 SE Division St, Suite 100", city: "Portland, OR 97202" },
      { label: "Irvington", address: "125 NE Schuyler St", city: "Portland, OR 97212" },
    ],
  },
  {
    name: "ōkta",
    neighborhood: "McMinnville",
    cuisine: ["Fancy"],
    meals: ["dinner", "drinks"],
    note: "Tasting-menu dining room inside the Tributary Hotel. Thursday through Sunday, 5 to 9, in season from April through December.",
    website: "https://www.tributaryhotel.com/dining",
    image: "photos/okta.jpg",
    alt: "The ōkta dining room, wood tables set with wine glasses under a thread chandelier.",
    spots: [{ address: "618 NE 3rd St", city: "McMinnville, OR 97128" }],
  },
  {
    name: "Fifty Licks",
    neighborhood: "Clinton and Northwest",
    cuisine: ["Ice Cream"],
    meals: ["lunch", "dinner"],
    note: "Ice cream. Weekdays from 4, weekends from 1. The Burnside shop is closed after a fire.",
    website: "https://www.fifty-licks.com/",
    image: "photos/fifty-licks.jpg",
    alt: "The Fifty Licks shopfront, sign over the door and a striped awning.",
    spots: [
      { label: "Hosford-Abernethy", address: "2021 SE Clinton St", city: "Portland, OR 97202" },
      { label: "Nob Hill", address: "1647 NW 21st Ave", city: "Portland, OR 97209" },
    ],
  },
  {
    name: "Eb & Bean",
    neighborhood: "Three shops",
    cuisine: ["Ice Cream"],
    meals: ["lunch", "dinner"],
    note: "Ice cream and frozen yogurt. Monday through Thursday from 2, Friday through Sunday from 1.",
    website: "https://www.ebandbean.com/",
    image: "photos/eb-bean.jpg",
    alt: "Topping bins of candy, nuts, and sprinkles.",
    spots: [
      { label: "Sullivan’s Gulch", address: "1425 NE Broadway", city: "Portland, OR 97232" },
      { label: "Richmond", address: "3040 SE Division St", city: "Portland, OR 97202" },
      { label: "Nob Hill", address: "645 NW 21st Ave", city: "Portland, OR 97209" },
    ],
  },
  {
    name: "Otto’s Sausage Kitchen",
    neighborhood: "Woodstock",
    cuisine: ["Sausages"],
    meals: ["lunch", "drinks"],
    note: "Sausages, deli sandwiches, beer, and wine. The sidewalk grill runs 11 to 5 in the summer.",
    website: "https://www.ottossausage.com/",
    image: "photos/ottos.jpg",
    alt: "The Otto’s Sausage Kitchen storefront on Woodstock.",
    spots: [{ address: "4138 SE Woodstock Blvd", city: "Portland, OR 97206" }],
  },
  {
    name: "Midslumber",
    neighborhood: "Alberta",
    cuisine: [],
    meals: [],
    note: "A horror bookstore and video store, not a kitchen. Thursday through Sunday, noon to 6.",
    website: "https://www.midslumbermedia.com/",
    image: "photos/midslumber.jpg",
    alt: "Midslumber Media’s storefront, spiral eyes painted on the window.",
    spots: [{ address: "1609 NE Alberta St", city: "Portland, OR 97211" }],
  },
  {
    name: "Foxtrot",
    neighborhood: "Sunnyside",
    cuisine: ["Bar"],
    meals: ["brunch", "lunch", "dinner", "drinks"],
    note: "Bar and cafe on Belmont. Wednesday, Thursday, and Sunday 10 to 10. Friday and Saturday until midnight. Closed Monday and Tuesday.",
    website: "https://www.instagram.com/foxtrotpdx/",
    spots: [{ address: "3244 SE Belmont St", city: "Portland, OR 97214" }],
  },
  {
    name: "Sandy Jug",
    neighborhood: "Roseway",
    cuisine: ["Bar"],
    meals: ["dinner", "drinks"],
    note: "Tavern in the jug building. Burgers and sandwiches. Daily from 2 in the afternoon until 2:30 at night.",
    image: "photos/sandy-jug.jpg",
    alt: "The jug-shaped building on NE Sandy Boulevard.",
    spots: [{ address: "7417 NE Sandy Blvd", city: "Portland, OR 97213" }],
  },
  {
    name: "Ben’s Place Bar",
    neighborhood: "Spray",
    cuisine: ["Bar"],
    meals: ["lunch", "dinner", "drinks"],
    note: "A grain-silo bar on the John Day River, with Topwater Pizza next door. Thursday through Sunday, April through October. Not a Portland room.",
    website: "http://www.bensplacebar.com/",
    image: "photos/bens.jpg",
    alt: "A corrugated grain-silo bar beside the river, with a picnic table under a wood shelter.",
    spots: [{ address: "938 Willow St", city: "Spray, OR 97874" }],
  },
  {
    name: "The Stazione",
    neighborhood: "Buckman",
    cuisine: ["Wine Bar"],
    meals: ["lunch", "dinner", "drinks"],
    note: "Italian wine bar. Wednesday and Thursday 11:30 to 9, Friday and Saturday until 10. Closed Sunday through Tuesday.",
    website: "https://www.thestazione.com/",
    image: "photos/stazione.jpg",
    alt: "The Stazione at night, warm windows in a dark stucco wall.",
    spots: [{ address: "133 SE Salmon St, Suite B", city: "Portland, OR 97214" }],
  },
  {
    name: "BBQ @ Von Ebert",
    neighborhood: "Boise",
    cuisine: ["Barbecue"],
    meals: ["lunch", "dinner", "drinks"],
    note: "The Williams taproom is gone. HarBQ parks in the lot at Von Ebert Mississippi, Friday through Sunday. The brewery itself is open daily.",
    website: "https://www.vonebertbrewing.com/",
    images: [
      { src: "photos/bbq.jpg", alt: "A barbecue tray with brisket, chicken, white bread, corn, and mac and cheese." },
      { src: "photos/bbq-2.jpg", alt: "The white and yellow HarBQ truck parked by picnic tables." },
    ],
    spots: [{ address: "825 N Cook St", city: "Portland, OR 97227" }],
  },
  {
    name: "Milki Ethiopian Cafe",
    neighborhood: "Rose City Park",
    cuisine: ["Ethiopian"],
    meals: ["breakfast", "lunch", "dinner"],
    note: "Ethiopian coffee and food at 5730 NE Sandy. Monday through Friday 7 to 6, Saturday and Sunday 8 to 7.",
    website: "https://www.milkicafe.com/",
    spots: [{ address: "5730 NE Sandy Blvd", city: "Portland, OR 97213" }],
  },
  {
    name: "Company",
    neighborhood: "Sunnyside",
    cuisine: ["Wine Bar"],
    meals: ["lunch", "dinner", "drinks"],
    note: "Wine bar. Monday through Friday from 4. Saturday and Sunday from noon.",
    website: "https://companybar.co/",
    image: "photos/company.jpg",
    alt: "The Company room, stools under a beam that says stay for the drinks.",
    spots: [{ address: "916 SE 34th Ave", city: "Portland, OR 97214" }],
  },
  {
    name: "Nong’s Khao Man Gai",
    neighborhood: "Ankeny and downtown",
    cuisine: ["Jake Food", "Thai", "Chicken Soup"],
    meals: ["breakfast", "lunch", "dinner"],
    note: "Chicken and rice, tofu and rice, and the chicken soup. Ankeny is daily 9 to 9. Downtown is daily 9 to 8.",
    website: "https://khaomangai.com/",
    image: "photos/nongs.jpg",
    alt: "Nong’s chicken and rice, sauce, ginger, and rice laid out on a table.",
    spots: [
      { label: "Buckman", address: "609 SE Ankeny St, Suite C", city: "Portland, OR 97214" },
      { label: "Downtown", address: "417 SW 13th Ave", city: "Portland, OR 97205" },
    ],
  },
  {
    name: "Dimo’s Apizza",
    neighborhood: "Buckman",
    cuisine: ["Pizza"],
    meals: ["lunch", "dinner", "drinks"],
    note: "Wood-fired apizza and a drinks list. Monday through Wednesday 4 to 9. Thursday through Sunday 11 to 9.",
    website: "https://www.dimosapizza.com/",
    image: "photos/dimos.jpg",
    alt: "A charred apizza on a checked tablecloth, with wine glasses.",
    spots: [{ address: "701 E Burnside St", city: "Portland, OR 97214" }],
  },
  {
    name: "Cibo",
    neighborhood: "Richmond",
    cuisine: ["Italian", "Pizza"],
    meals: ["dinner", "drinks"],
    note: "Wood-fired pizza and Italian plates. Nightly from 5. Friday and Saturday until 10:30, Sunday until 9:30.",
    website: "https://www.cibopdx.com/",
    image: "photos/cibo.jpg",
    alt: "A pizza on the deck of Cibo’s wood oven.",
    spots: [{ address: "3539 SE Division St", city: "Portland, OR 97202" }],
  },
  {
    name: "Apizza Scholls",
    neighborhood: "Sunnyside",
    cuisine: ["Pizza"],
    meals: ["dinner"],
    note: "In-house and takeout daily 5 to 9, or until sold out. Last seating 8:45. Weekends go first.",
    website: "https://www.apizzascholls.com/",
    image: "photos/scholls.jpg",
    alt: "The yellow Apizza Scholls building on SE Hawthorne.",
    spots: [{ address: "4741 SE Hawthorne Blvd", city: "Portland, OR 97215" }],
  },
  {
    name: "Ken’s Artisan Pizza",
    neighborhood: "Buckman",
    cuisine: ["Pizza"],
    meals: ["dinner", "drinks"],
    note: "Wood-fired pizza. Closed Monday. Tuesday through Thursday 5 to 9, Friday and Saturday until 10, Sunday from 4:30. The Bend room is left off this card.",
    website: "https://kensartisanpizza.com/pizza",
    image: "photos/kens.jpg",
    alt: "A charred pizza with burrata and basil.",
    spots: [{ address: "304 SE 28th Ave", city: "Portland, OR 97214" }],
  },
  {
    name: "Scottie’s Pizza Parlor",
    neighborhood: "Division and Northwest",
    cuisine: ["Pizza"],
    meals: ["lunch", "dinner"],
    note: "Sourdough pies and slices. Both rooms Tuesday through Saturday, 11:30 to 8:30. Closed Sunday and Monday.",
    website: "https://www.scottiespizzaparlor.com/",
    image: "photos/scotties.jpg",
    alt: "Scottie’s Pizza Parlor on SE Division, orange sign over picnic tables.",
    spots: [
      { label: "Hosford-Abernethy", address: "2128 SE Division St", city: "Portland, OR 97202" },
      { label: "Nob Hill", address: "685 NW 21st Ave", city: "Portland, OR 97209" },
    ],
  },
  {
    name: "Abyssinian Kitchen",
    neighborhood: "Alberta",
    cuisine: ["Ethiopian"],
    meals: ["dinner"],
    note: "Ethiopian and Eritrean. Doro wat is the one to get. Wednesday through Saturday, 5 to 9.",
    website: "https://abyssiniankitchen.com/",
    images: [
      { src: "photos/abyssinian.jpg", alt: "A plate of stewed lentils, greens, and rolled injera." },
      { src: "photos/abyssinian-2.jpg", alt: "A red cocktail with ice, a fig slice, and a green leaf." },
    ],
    spots: [{ address: "2940 NE Alberta St", city: "Portland, OR 97211" }],
  },
  {
    name: "Ajisai",
    neighborhood: "Beaverton",
    city: "Beaverton",
    cuisine: ["Hibachi", "Sushi"],
    meals: ["dinner"],
    note: "Sushi and hibachi in Beaverton.",
    website: "https://www.yelp.com/biz/ajisai-sushi-and-steak-beaverton",
    images: [
      { src: "photos/ajisai.jpg", alt: "A long sushi roll topped with microgreens, roe, and a dark sauce." },
      { src: "photos/ajisai-2.jpg", alt: "Sliced steak, shrimp, and grilled vegetables on a blue plate, with rice and two sauces." },
    ],
    spots: [{ address: "4050 SW 114th Ave", city: "Beaverton, OR 97005" }],
  },
  {
    name: "Akadi",
    neighborhood: "Hosford-Abernethy",
    cuisine: ["West African"],
    meals: ["dinner"],
    note: "Corn fritters were excellent with a crisp lager. Jollof with the chicken stew was delicious. The drinks were good and sweet.",
    website: "https://www.akadipdx.com/",
    image: "photos/akadi.jpg",
    alt: "The Akadi dining room, hanging plants and string lights over a full house.",
    spots: [{ address: "1001 SE Division St", city: "Portland, OR 97202" }],
  },
  {
    name: "Amelia’s",
    neighborhood: "Hillsboro",
    city: "Hillsboro",
    cuisine: ["Mexican"],
    meals: ["lunch", "dinner"],
    note: "The saved note was the food cart: burrito is cheap and a normal size, taco plate is mid and a little greasy. These are the two Hillsboro rooms.",
    website: "https://ameliasmexicanfood.com/",
    image: "photos/amelias.jpg",
    alt: "The lime-green Amelia’s food cart, with a customer at the window.",
    spots: [
      { label: "4th Ave", address: "105 NE 4th Ave", city: "Hillsboro, OR 97124" },
      { label: "Griffin Oaks", address: "2130 NE Griffin Oaks St, Suite 200", city: "Hillsboro, OR 97124" },
    ],
  },
  {
    name: "Bluto’s",
    neighborhood: "Sunnyside",
    cuisine: ["Greek"],
    meals: ["lunch"],
    website: "https://www.blutospdx.com/",
    images: [
      { src: "photos/blutos.jpg", alt: "A bowl of grains, beets, and herbs." },
      { src: "photos/blutos-2.jpg", alt: "A row of iced drinks in the window light." },
    ],
    spots: [{ address: "2838 SE Belmont St", city: "Portland, OR 97214" }],
  },
  {
    name: "Devil’s Dill",
    neighborhood: "Hawthorne and Killingsworth",
    cuisine: ["Sandwiches"],
    meals: ["lunch", "dinner"],
    note: "Sandwich shop. Hawthorne runs later. Killingsworth is 11 to 10. No Fun Bar is attached to the Hawthorne room.",
    website: "https://www.devilsdill.com/",
    images: [
      { src: "photos/devils.jpg", alt: "An Italian sandwich cut in half, piled with kale and ham." },
      { src: "photos/devils-2.jpg", alt: "Roasted red peppers in a steel bowl." },
    ],
    spots: [
      { label: "Buckman", address: "1711 SE Hawthorne Blvd", city: "Portland, OR 97214" },
      { label: "Killingsworth", address: "1620 NE Killingsworth St", city: "Portland, OR 97211" },
    ],
  },
  {
    name: "El Pilón",
    neighborhood: "Downtown",
    meals: [],
    cuisine: [],
    website: "https://www.yelp.com/biz/el-pil%C3%B3n-portland",
    images: [
      { src: "photos/pilon.jpg", alt: "An arepa and an empanada in a paper tray, with a yellow El Pilón cup." },
      { src: "photos/pilon-2.jpg", alt: "The red El Pilón cart, with arepa and empanada menus along the side." },
    ],
    spots: [{ address: "431 SW Harvey Milk St", city: "Portland, OR 97204" }],
  },
  {
    name: "Farmhouse Kitchen",
    neighborhood: "Richmond",
    cuisine: ["Thai"],
    meals: ["dinner"],
    note: "Been.",
    website: "https://www.yelp.com/biz/farmhouse-kitchen-thai-cuisine-portland-2",
    image: "photos/farmhouse.jpg",
    alt: "The Farmhouse Kitchen house on Hawthorne, porch behind a purple fence.",
    spots: [{ address: "3354 SE Hawthorne Blvd", city: "Portland, OR 97214" }],
  },
  {
    name: "Happy Lamb Hot Pot",
    neighborhood: "Beaverton",
    city: "Beaverton",
    cuisine: ["Hot Pot"],
    meals: ["lunch", "dinner"],
    website: "https://happylambhotpot.com/",
    image: "photos/happylamb.jpg",
    alt: "A Happy Lamb spread of sliced meat, seafood, and vegetables around the pot.",
    spots: [{ address: "3861 SW 117th Ave", city: "Beaverton, OR 97005" }],
  },
  {
    name: "The Heist",
    neighborhood: "",
    cuisine: [],
    meals: [],
    note: "Saved with no address.",
    spots: [],
  },
  {
    name: "Jade Rabbit",
    neighborhood: "Richmond",
    cuisine: ["Asian Fusion"],
    meals: ["brunch", "lunch", "dinner"],
    note: "Vegan dim sum and pan-Asian plates. It popped up at the Emerald Room, and now it is on Hawthorne. Weekdays from noon, weekends from 11.",
    website: "https://www.jaderabbitpdx.com/",
    images: [
      { src: "photos/jade.jpg", alt: "Dumplings in chili oil, in a dark ceramic bowl." },
      { src: "photos/jade-3.jpg", alt: "Three steamed buns shaped like rabbits." },
      { src: "photos/jade-2.jpg", alt: "Tea poured from a gaiwan into a glass server." },
    ],
    spots: [{ address: "3632 SE Hawthorne Blvd", city: "Portland, OR 97214" }],
  },
  {
    name: "Keys Lounge",
    neighborhood: "King",
    cuisine: ["Cocktails"],
    meals: ["dinner", "drinks"],
    note: "Cocktail lounge in an old locksmith shop. Lobster rolls on Wednesday. Opens at 3.",
    website: "https://www.keyspdx.com/",
    images: [
      { src: "photos/keys.jpg", alt: "Keys Lounge at night, a big KEYS sign and a red neon lounge sign." },
      { src: "photos/keys-2.jpg", alt: "The backbar, bottles lit on open shelves." },
    ],
    spots: [{ address: "533 NE Killingsworth St", city: "Portland, OR 97211" }],
  },
  {
    name: "Ki’ikibáa",
    neighborhood: "NE 82nd",
    cuisine: ["Mexican"],
    meals: ["lunch", "dinner"],
    note: "Yucatecan cooking. Pozole rojo and verde. Closed Monday. Sunday until 5, other days 11 to 8.",
    website: "https://www.instagram.com/kiikibaapdx/",
    spots: [{ address: "3244 NE 82nd Ave", city: "Portland, OR 97220" }],
  },
  {
    name: "La Bonita",
    neighborhood: "Three rooms",
    cuisine: ["Mexican"],
    meals: ["lunch", "dinner"],
    note: "BOGO chicken burritos are big. Guac is great. Tacos and chips were enough, with a little burrito left over.",
    website: "https://www.labonitapdx.com/",
    images: [
      { src: "photos/labonita.jpg", alt: "A table of tacos, enchiladas, rice, and beans on bright plates." },
      { src: "photos/labonita-2.jpg", alt: "An enchilada in red sauce, surrounded by tacos and rice." },
    ],
    spots: [
      { label: "Alberta", address: "2839 NE Alberta St", city: "Portland, OR 97211" },
      { label: "Overlook", address: "2710 N Killingsworth St", city: "Portland, OR 97217" },
      { label: "Hosford-Abernethy", address: "2138 SE Division St", city: "Portland, OR 97202" },
    ],
  },
  {
    name: "Lulu",
    neighborhood: "Troutdale",
    city: "Troutdale",
    cuisine: ["Hawaiian", "Food Cart"],
    meals: ["lunch", "dinner"],
    note: "Hawaiian plates. Thursday through Sunday, 11:30 to 8, or until sold out.",
    website: "https://www.lulufoodtruck.com/",
    image: "photos/lulu.jpg",
    alt: "Scallion pancakes in a takeout box, with a cup of green sauce.",
    spots: [{ address: "149 S Buxton Rd", city: "Troutdale, OR 97060" }],
  },
  {
    name: "Magna Kusina",
    neighborhood: "Hosford-Abernethy",
    cuisine: ["Filipino"],
    meals: ["dinner"],
    note: "Filipino dinner. Wednesday through Saturday, 5 to 9.",
    website: "https://www.magnapdx.com/",
    image: "photos/magna.jpg",
    alt: "A spread of Filipino plates, crispy pata and lumpia among them.",
    spots: [{ address: "2525 SE Clinton St", city: "Portland, OR 97202" }],
  },
  {
    name: "Mexico Linda",
    neighborhood: "",
    cuisine: ["Mexican", "Food Cart"],
    meals: [],
    note: "Skip it. Beans aren’t great, the burrito is mid, and the meat is gristly.",
    spots: [],
  },
  {
    name: "Mole Mole",
    neighborhood: "Alberta",
    cuisine: ["Mexican"],
    meals: ["lunch", "dinner"],
    note: "Closed Wednesday. Sunday until 7, other open days 11 to 9.",
    website: "https://molemolepdx.com/",
    images: [
      { src: "photos/mole.jpg", alt: "Salmon in a red mole on a painted plate, with an orchid." },
      { src: "photos/mole-2.jpg", alt: "A bowl of shrimp soup with avocado, on a Mole Mole plate." },
    ],
    spots: [{ address: "2231 NE Alberta St", city: "Portland, OR 97211" }],
  },
  {
    name: "Nimblefish",
    neighborhood: "Buckman",
    cuisine: ["Sushi"],
    meals: ["dinner"],
    website: "https://www.nimblefishpdx.com/",
    spots: [{ address: "1524 SE 20th Ave", city: "Portland, OR 97214" }],
  },
  {
    name: "Nodoguro",
    neighborhood: "Downtown",
    cuisine: ["Japanese"],
    meals: ["dinner", "drinks"],
    note: "Open Thursday through Sunday.",
    website: "https://www.nodoguropdx.com/",
    image: "photos/nodoguro.jpg",
    alt: "A small bowl of sashimi and herbs on a patterned tray.",
    spots: [{ address: "515 SW Broadway", city: "Portland, OR 97205" }],
  },
  {
    name: "Ox",
    neighborhood: "Eliot",
    cuisine: ["Argentinian"],
    meals: ["dinner"],
    website: "https://www.oxpdx.com/",
    image: "photos/ox.jpg",
    alt: "A cook at the wood grill, sparks rising over the steaks.",
    spots: [{ address: "2225 NE Martin Luther King Jr Blvd", city: "Portland, OR 97212" }],
  },
  {
    name: "Pan Roast",
    neighborhood: "",
    cuisine: [],
    meals: [],
    note: "Saved with no address.",
    spots: [],
  },
  {
    name: "Phở Hùng on Powell",
    neighborhood: "Creston-Kenilworth",
    cuisine: ["Vietnamese"],
    meals: ["breakfast", "lunch", "dinner"],
    note: "Pho. Closed Thursday. Weekdays from 10, weekends from 9, until 9.",
    website: "https://phohungonpowell.com/",
    image: "photos/pho.jpg",
    alt: "The blue Phở Hùng on Powell building, open sign in the window.",
    spots: [{ address: "4717 SE Powell Blvd", city: "Portland, OR 97206" }],
  },
  {
    name: "Saint Burrito",
    neighborhood: "",
    cuisine: ["Mexican"],
    meals: [],
    note: "Saved as Portland, with no street.",
    spots: [],
  },
  {
    name: "Screen Door",
    neighborhood: "Pearl and Burnside",
    cuisine: ["Southern"],
    meals: ["breakfast", "brunch", "lunch", "dinner", "drinks"],
    note: "Southern comfort food. Brunch 8:30 to 2, dinner 4:30 to 9, both rooms every day. Happy hour is worth it.",
    website: "https://screendoorrestaurant.com/",
    images: [
      { src: "photos/screen.jpg", alt: "Chicken and waffles held over a table of brunch drinks." },
      { src: "photos/screen-2.jpg", alt: "The Screen Door host stand, pickle jars in an arched shelf." },
    ],
    spots: [
      { label: "Pearl District", address: "1131 NW Couch St", city: "Portland, OR 97209" },
      { label: "Buckman", address: "2337 E Burnside St", city: "Portland, OR 97214" },
    ],
  },
  {
    name: "Smak Dabs",
    neighborhood: "",
    cuisine: [],
    meals: [],
    note: "Decent burgers, regular size. Crinkle fries were okay, undercooked, and plain.",
    spots: [],
  },
  {
    name: "Southbound Smoke",
    neighborhood: "Central Eastside",
    cuisine: ["Barbecue"],
    meals: ["dinner"],
    note: "Super mid.",
    spots: [{ address: "1135 SE Grand Ave", city: "Portland, OR 97214" }],
  },
  {
    name: "Stella’s Sandwiches and Bowls",
    neighborhood: "Downtown",
    cuisine: ["Sandwiches"],
    meals: ["lunch"],
    note: "Cuban sandwiches. Also saved as the Cuban sandwich cart.",
    website: "https://www.yelp.com/biz/stellas-sandwiches-and-bowls-portland",
    spots: [{ address: "431 SW Harvey Milk St", city: "Portland, OR 97204" }],
  },
  {
    name: "Sumo Sushi",
    neighborhood: "Downtown",
    cuisine: ["Sushi", "Food Cart"],
    meals: ["lunch"],
    note: "Sushi burritos at the downtown cart, weekdays about 11 to 6. Other carts were mentioned and are not listed here.",
    website: "https://sumosushipdx.square.site",
    spots: [{ address: "1881 SW 5th Ave", city: "Portland, OR 97201" }],
  },
  {
    name: "Super Tacos Ocha",
    neighborhood: "",
    cuisine: ["Mexican"],
    meals: [],
    note: "Skip. Tacos are fine and nothing special. Enchiladas aren’t.",
    spots: [],
  },
  {
    name: "Tight Tacos",
    neighborhood: "Richmond",
    cuisine: ["Mexican"],
    meals: ["lunch", "dinner"],
    note: "Tacos, the burrito, and the churro bites were good.",
    website: "https://www.yelp.com/biz/tight-tacos-portland-3",
    image: "photos/tight.jpg",
    alt: "The Tight Tacos room, papel picado strung over the counter.",
    spots: [{ address: "3060 SE Division St", city: "Portland, OR 97202" }],
  },
  {
    name: "Tokyo Sando",
    neighborhood: "Homestead",
    cuisine: ["Japanese", "Sandwiches"],
    meals: ["lunch", "dinner"],
    website: "https://www.yelp.com/biz/tokyo-sando-portland-3",
    spots: [{ address: "726 S Gaines St", city: "Portland, OR 97239" }],
  },
  {
    name: "Too Soon",
    neighborhood: "Kerns",
    cuisine: ["Cocktails"],
    meals: ["dinner", "drinks"],
    note: "Cocktail bar. Food is from Dear Lola. Monday through Saturday, 5 to 1.",
    website: "https://toosoonpdx.com/",
    spots: [{ address: "18 NE 28th Ave", city: "Portland, OR 97232" }],
  },
  {
    name: "University Station Food Carts",
    neighborhood: "Downtown",
    cuisine: ["Food Cart"],
    meals: ["lunch", "dinner"],
    note: "A pod by Portland State. Pizza, gyros, Indian, pho, Thai, and tacos among the carts.",
    website: "https://universitystationfoodcarts.com/",
    spots: [{ address: "616 SW College St", city: "Portland, OR 97201" }],
  },
  {
    name: "Urdaneta",
    neighborhood: "Alberta",
    cuisine: ["Spanish", "Tapas"],
    meals: ["dinner"],
    website: "https://www.urdanetapdx.com/",
    images: [
      { src: "photos/urdaneta.jpg", alt: "Five pintxos lined up on a stone slab." },
      { src: "photos/urdaneta-2.jpg", alt: "Two fried croquettes with herbs on a white plate." },
      { src: "photos/urdaneta-3.jpg", alt: "The Urdaneta dining room, a live-edge bar and a full house." },
    ],
    spots: [{ address: "3033 NE Alberta St", city: "Portland, OR 97211" }],
  },
  {
    name: "Arden",
    neighborhood: "Pearl District",
    cuisine: ["New American", "Wine Bar"],
    meals: ["dinner", "drinks"],
    note: "Seasonal Pacific Northwest cooking and a deep wine list. À la carte, or a four-course prix fixe for the table. Tuesday through Saturday from 5. Closed Sunday and Monday.",
    website: "https://ardenpdx.com/",
    images: [
      { src: "photos/arden.jpg", alt: "A table of plates: a cutlet with mango, carrots, cucumbers, and a glass of white wine." },
      { src: "photos/arden-2.jpg", alt: "Arden’s bar, a wood front and metal stools, with wine bottles and open shelves." },
    ],
    spots: [{ address: "417 NW 10th Ave", city: "Portland, OR 97209" }],
  },
  {
    name: "Bauman's on Oak",
    neighborhood: "Buckman",
    cuisine: ["Pizza", "Cider"],
    meals: ["lunch", "dinner", "drinks"],
    note: "The margherita was great, and the side sauces were amazing. Caramelized onion dip was fire. The ciders are all delicious, and it's pretty cheap. Wednesday through Friday 4 to 9. Saturday noon to 9. Sunday noon to 7. Happy hour 4 to 5.",
    website: "https://www.baumanscider.com/baumansonoak",
    images: [
      { src: "photos/baumans.jpg", alt: "Bauman’s taproom, long wood tables facing a green bar and a row of taps." },
      { src: "photos/baumans-2.jpg", alt: "Two glasses of cider beside a toasted sandwich on a gold-rimmed plate." },
      { src: "photos/baumans-3.jpg", alt: "A blistered pizza with crab and greens, beside two ramekins of sauce." },
    ],
    spots: [{ address: "930 SE Oak St", city: "Portland, OR 97214" }],
  },
  {
    name: "Gumba",
    neighborhood: "Alberta",
    cuisine: ["Italian"],
    meals: ["dinner"],
    note: "Pasta parlor, pronounced GOOM-bah. It started as a cart in 2016 and now has a room on Alberta. Dinner from about 4:30.",
    website: "https://gumba-pdx.com/",
    spots: [{ address: "2203 NE Alberta St", city: "Portland, OR 97211" }],
  },
  {
    name: "Javelina",
    neighborhood: "Cully",
    cuisine: ["Indigenous"],
    meals: ["brunch", "dinner", "drinks"],
    note: "Indigenous cooking from chef Alexa Numkena-Anderson. Fry bread, the Powwow Burger, bison. Brunch into the afternoon most days, dinner from 4 to 9. Tuesday and Wednesday are dinner only.",
    website: "https://javelinapdx.com/",
    spots: [{ address: "4636 NE 42nd Ave", city: "Portland, OR 97218" }],
  },
  {
    name: "Luce",
    neighborhood: "Buckman",
    cuisine: ["Italian"],
    meals: ["dinner", "drinks"],
    note: "Italian small plates and pasta, pronounced LOO-che. Every day 4 to 10. No reservations. The bar is Bar Martina.",
    website: "https://www.luceportland.com/",
    spots: [{ address: "2140 E Burnside St", city: "Portland, OR 97214" }],
  },
  {
    name: "Måurice",
    neighborhood: "Downtown",
    cuisine: ["French", "Bakery"],
    meals: ["breakfast", "lunch"],
    note: "Norwegian and French pastry luncheonette. Wednesday through Saturday, 10 to 4. Fika and quiche until 11, then the lunch menu.",
    website: "https://www.mauricepdx.com/",
    spots: [{ address: "921 SW Oak St", city: "Portland, OR 97205" }],
  },
  {
    name: "República",
    neighborhood: "Pearl District",
    cuisine: ["Mexican"],
    meals: ["brunch", "lunch", "drinks"],
    note: "Mexico-forward cooking, mole, and a mezcal bar. Thursday through Sunday, 10 to 3. Evenings are private events.",
    website: "https://www.mexico-forward.com/",
    spots: [{ address: "100 NW 10th Ave", city: "Portland, OR 97209" }],
  },
  {
    name: "Walter French's",
    neighborhood: "Alberta",
    cuisine: ["Food Cart"],
    meals: ["lunch"],
    note: "Fine foods at the Alberta Carts pod. Wednesday through Sunday, noon until sold out. Closed Monday and Tuesday.",
    website: "https://www.walterfrench.com/",
    spots: [{ address: "1027 NE Alberta St", city: "Portland, OR 97211" }],
  },
  {
    name: "Buvons",
    neighborhood: "Buckman",
    cuisine: ["Wine Bar"],
    meals: ["dinner", "drinks"],
    note: "Sparkling wine bar from the L’Orange team. Walk-ins. Wednesday through Saturday 5 to 11, Sunday 3 to 9. Closed Monday and Tuesday.",
    website: "https://www.buvonspdx.com/",
    images: [
      { src: "photos/buvons.jpg", alt: "The Buvons bar, brown stools against a navy wall of paintings and a row of glasses." },
      { src: "photos/buvons-2.jpg", alt: "Toast with pâté and a jar of yellow jam on a gold-rimmed plate." },
    ],
    spots: [{ address: "1120 SE Belmont St", city: "Portland, OR 97214" }],
  },
  {
    name: "Jacqueline",
    neighborhood: "Hosford-Abernethy",
    cuisine: ["Seafood"],
    meals: ["dinner", "drinks"],
    note: "Seafood and an oyster bar on Clinton. They moved here, at 25th, in November 2024. Every day 5 to 9, with dollar oysters from 5 to 6.",
    website: "https://jacquelinepdx.com/",
    images: [
      { src: "photos/jacqueline.jpg", alt: "Jacqueline’s dining room, wood tables along a window seat and an amber lamp." },
      { src: "photos/jacqueline-2.jpg", alt: "A platter of oysters on ice, with hot sauce being poured over them." },
    ],
    spots: [{ address: "2500 SE Clinton St", city: "Portland, OR 97202" }],
  },
];

const nurseries = [
  {
    name: "Hammer + Vine",
    neighborhood: "Nob Hill",
    note: "A plant shop on West Burnside.",
    website: "https://hammerandvine.com/",
    image: "photos/hammer.jpg",
    alt: "Hammer + Vine’s floor, packed with potted plants and hanging baskets.",
    spots: [
      { address: "2190 W Burnside St, Suite B", city: "Portland, OR 97210" },
    ],
  },
  {
    name: "Pistils",
    neighborhood: "Mississippi and Slabtown",
    note: "Two plant shops.",
    website: "https://pistilsnursery.com/",
    image: "photos/pistils.jpg",
    alt: "Staghorn ferns mounted on a white wall beside a greenhouse window.",
    spots: [
      { label: "Mississippi", address: "3811 N Mississippi Ave", city: "Portland, OR 97227" },
      { label: "Slabtown", address: "2139 NW Raleigh St", city: "Portland, OR 97210" },
    ],
  },
  {
    name: "Arium Botanicals",
    neighborhood: "Eliot",
    note: "A greenhouse of houseplants on MLK.",
    website: "https://ariumbotanicals.com/",
    image: "photos/arium.jpg",
    alt: "Arium’s bright greenhouse, cacti and hanging plants along a concrete aisle.",
    spots: [
      { address: "2046 NE Martin Luther King Jr Blvd", city: "Portland, OR 97212" },
    ],
  },
];

const misc = [
  {
    name: "Art Galleries",
    neighborhood: "Pearl District",
    hoods: ["Pearl District"],
    cuisine: ["Art"],
    meals: [],
    note: "Four rooms in the Pearl.",
    spots: [
      { label: "Laura Vincent", address: "824 NW Davis St", city: "Portland, OR 97209" },
      { label: "Waterstone", address: "124 NW 9th Ave", city: "Portland, OR 97209" },
      { label: "Blackfish", address: "938 NW Everett St", city: "Portland, OR 97209" },
      { label: "Elizabeth Leach", address: "417 NW 9th Ave", city: "Portland, OR 97209" },
    ],
  },
  {
    name: "Black Tomato",
    neighborhood: "Canada",
    city: "Canada",
    cuisine: ["Vacation"],
    meals: [],
    note: "Vancouver, Banff, and Calgary. An iconic Canadian adventure.",
    website: "https://www.blacktomato.com/us/destinations/canada/iconic-canadian-adventure/",
    spots: [],
  },
  {
    name: "Cascada Thermal Springs",
    neighborhood: "",
    cuisine: [],
    meals: [],
    note: "Saved with no city.",
    spots: [],
  },
  {
    name: "Central Eastside",
    neighborhood: "Central Eastside",
    cuisine: ["Date"],
    meals: [],
    note: "A date: Postcard Bookshop, Sunflower Sake, and Toya Ramen.",
    spots: [],
  },
  {
    name: "Comic Con",
    neighborhood: "",
    cuisine: ["Event"],
    meals: [],
    spots: [],
  },
  {
    name: "Everyday Music",
    neighborhood: "",
    cuisine: ["Fun"],
    meals: [],
    note: "Saved with no address.",
    spots: [],
  },
  {
    name: "Fairmont Banff Springs",
    neighborhood: "Banff",
    city: "Banff",
    cuisine: ["Vacation"],
    meals: [],
    website: "https://www.fairmont.com/en/hotels/banff/fairmont-banff-springs.html",
    spots: [],
  },
  {
    name: "Fuzzy Space",
    neighborhood: "",
    cuisine: [],
    meals: [],
    spots: [],
  },
  {
    name: "Gnome and Faire",
    neighborhood: "",
    cuisine: [],
    meals: [],
    spots: [],
  },
  {
    name: "Hopscotch",
    neighborhood: "Central Eastside",
    cuisine: ["Fun"],
    meals: [],
    note: "Immersive art.",
    website: "https://letshopscotch.com/locations/portland/",
    spots: [{ address: "1020 SE 10th Ave", city: "Portland, OR 97214" }],
  },
  {
    name: "Marshall Park",
    neighborhood: "",
    cuisine: [],
    meals: [],
    spots: [],
  },
  {
    name: "Next Level Pinball Museum",
    neighborhood: "Hillsboro",
    city: "Hillsboro",
    cuisine: ["Fun"],
    meals: [],
    note: "Pinball and arcade games on free play. Closed Tuesday and Wednesday.",
    website: "https://www.nextlevelpinballmuseum.com/",
    spots: [{ address: "1458 NE 25th Ave", city: "Hillsboro, OR 97124" }],
  },
  {
    name: "Portland Synth Library",
    neighborhood: "Kerns",
    cuisine: ["Fun"],
    meals: [],
    note: "Moved out of Lloyd Center. Drop-in hours are Thursday, 4 to 8:30.",
    website: "https://www.synthlibraryportland.org/",
    spots: [{ address: "123 NE 3rd Ave, Suite 012", city: "Portland, OR 97232" }],
  },
  {
    name: "Rhinestone",
    neighborhood: "",
    cuisine: [],
    meals: ["drinks"],
    note: "Saved as drinks, with no address.",
    spots: [],
  },
  {
    name: "Stumptown Otaku",
    neighborhood: "",
    cuisine: [],
    meals: [],
    spots: [],
  },
  {
    name: "Stumptowntaku",
    neighborhood: "",
    cuisine: [],
    meals: [],
    spots: [],
  },
  {
    name: "Sure Shot Burger",
    neighborhood: "",
    cuisine: [],
    meals: [],
    note: "Saved with no address.",
    spots: [],
  },
  {
    name: "Sweathouz",
    neighborhood: "",
    cuisine: ["Spa"],
    meals: [],
    note: "Saved with no city.",
    spots: [],
  },
  {
    name: "The Everett House",
    neighborhood: "Kerns",
    cuisine: ["Spa"],
    meals: [],
    website: "https://www.everetthousecommunityhealingcenter.com/",
    spots: [{ address: "2927 NE Everett St", city: "Portland, OR 97232" }],
  },
  {
    name: "Calmigos Guest Ranch",
    neighborhood: "",
    cuisine: ["Vacation"],
    meals: [],
    note: "Saved with no city.",
    spots: [],
  },
  {
    name: "Florence",
    neighborhood: "Florence",
    city: "Florence",
    cuisine: ["Vacation"],
    meals: [],
    spots: [],
  },
  {
    name: "Montecito",
    neighborhood: "Montecito",
    city: "Montecito",
    cuisine: ["Vacation"],
    meals: [],
    spots: [],
  },
  {
    name: "Yucatán",
    neighborhood: "Yucatán",
    city: "Yucatán",
    cuisine: ["Vacation"],
    meals: [],
    spots: [],
  },
  {
    name: "Witch's Castle",
    neighborhood: "Forest Park",
    cuisine: ["Landmark"],
    meals: [],
    note: "Also called Witches Castle and the Stone House. A 1930s stone ruin on the Lower Macleay Trail, about 0.8 miles from the trailhead.",
    website: "https://forestparkconservancy.org/lower-macleay-trail-page/",
    spots: [{ address: "2960 NW Upshur St", city: "Portland, OR 97210" }],
  },
];

const albums = [
  { name: "Inferno", neighborhood: "Boards of Canada", cuisine: ["Downtempo", "IDM"], image: "music/inferno.jpg", website: "https://open.spotify.com/album/0mu3EvWYfNwBfISSg0q03p", alt: "Inferno cover" },
  { name: "No Bad Memories", neighborhood: "The Avalanches", cuisine: [], image: "music/no-bad-memories.jpg", website: "https://open.spotify.com/album/3De7Ues320SIjGCaz5b6fX", alt: "No Bad Memories cover" },
  { name: "Distance in Static", neighborhood: "Bonobo", cuisine: ["House", "Downtempo"], image: "music/distance-in-static.jpg", website: "https://open.spotify.com/album/2FMGW8WrG0BE0ZimHbHw2M", alt: "Distance in Static cover" },
  { name: "Feeling is Structure", neighborhood: "Max Cooper", cuisine: ["IDM", "UK Bass"], image: "music/feeling-is-structure.jpg", website: "https://open.spotify.com/album/2pvLN2jTZhYg9aWQyESDps", alt: "Feeling is Structure cover" },
  { name: "Evaporator", neighborhood: "Nathan Fake", cuisine: ["IDM", "Ambient Techno"], image: "music/evaporator.jpg", website: "https://open.spotify.com/album/0uB9jp5XGssp3jbEpWdSId", alt: "Evaporator cover" },
  { name: "Grand Reopening", neighborhood: "Nero’s Day at Disneyland", cuisine: ["Breakcore", "IDM"], image: "music/grand-reopening.jpg", website: "https://open.spotify.com/album/5uQuOINAoZjdu3FeNd6JI0", alt: "Grand Reopening cover" },
  { name: "Infinite Black Inside", neighborhood: "Ibrahim Alfa JNR", cuisine: ["Minimal Techno", "IDM"], image: "music/infinite-black-inside.jpg", website: "https://open.spotify.com/album/10MEqPNqi2tp7sd14cQ4sI", alt: "Infinite Black Inside cover" },
  { name: "I Wander", neighborhood: "DJRUM", cuisine: ["Drill and Bass", "UK Bass"], image: "music/i-wander.jpg", website: "https://open.spotify.com/album/02yCblfjlo1MFWBMLWXwbr", alt: "I Wander cover" },
];

const foodOrder = [
  "Jake Food",
  "Chicken Soup",
  "French",
  "Chinese",
  "Cocktails",
  "Peruvian",
  "Tapas",
  "Wine Bar",
  "Sushi",
  "Mexican",
  "Italian",
  "Mediterranean",
  "Korean",
  "Seafood",
  "Pizza",
  "Thai",
  "Barbecue",
  "Vietnamese",
  "Vegan",
  "Japanese",
  "Bakery",
  "Sandwiches",
  "Ramen",
  "Bar",
  "New American",
  "Brewery",
  "Cider",
  "Indigenous",
  "Breakfast",
  "Ice Cream",
  "Sausages",
  "Fancy",
  "Ethiopian",
  "West African",
  "Greek",
  "Hibachi",
  "Hot Pot",
  "Asian Fusion",
  "Food Cart",
  "Hawaiian",
  "Filipino",
  "Argentinian",
  "Spanish",
  "Southern",
  "Vietnamese",
];

const foodFilters = [
  ...foodOrder.filter((name) => restaurants.some((place) => place.cuisine.includes(name))),
  ...[...new Set(restaurants.flatMap((place) => place.cuisine))].filter((name) => !foodOrder.includes(name)),
];

const mealFilters = [
  ["breakfast", "Breakfast"],
  ["brunch", "Brunch"],
  ["lunch", "Lunch"],
  ["dinner", "Dinner"],
  ["drinks", "Drinks"],
];

function escapeText(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function mapsHref(spot) {
  const query = encodeURIComponent(`${spot.address}, ${spot.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function addressList(spots, showLabel) {
  return `<ul class="addresses">${spots
    .map((spot) => {
      const label = showLabel ? `<span class="spot-label">${escapeText(spot.label)}</span>` : "";
      return `<li>${label}<a href="${mapsHref(spot)}" target="_blank" rel="noopener noreferrer">${escapeText(spot.address)}</a></li>`;
    })
    .join("")}</ul>`;
}

function foldText(value) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/['’]/g, "");
}

function placeHaystack(place) {
  const bits = [
    place.name,
    place.neighborhood,
    place.city,
    place.note,
    place.closed,
    ...(place.cuisine || []),
    ...(place.meals || []).map(mealLabel),
    ...(place.spots || []).flatMap((spot) => [spot.address, spot.label, spot.city]),
  ];
  return foldText(bits.filter(Boolean).join(" "));
}

function matchesQuery(place, raw) {
  const query = foldText(raw || "").trim();
  if (!query) return true;
  return placeHaystack(place).includes(query);
}

function mountSearch(onChange) {
  const input = document.querySelector("[data-search]");
  if (!input) return { query: () => "", reset() {} };
  input.addEventListener("input", onChange);
  return {
    query: () => input.value,
    reset() {
      input.value = "";
    },
  };
}

function mealLabel(key) {
  const found = mealFilters.find(([id]) => id === key);
  return found ? found[1] : key;
}

function placePhotos(place) {
  if (Array.isArray(place.images) && place.images.length) {
    return place.images
      .map((item) => (typeof item === "string" ? { src: item, alt: place.alt || "" } : item))
      .filter((item) => item && item.src);
  }
  if (place.image) return [{ src: place.image, alt: place.alt || "" }];
  return [];
}

function photoMarkup(place) {
  const photos = placePhotos(place);
  if (!photos.length) return "";
  const frame = photos
    .map(
      (photo, index) =>
        `<div class="slide"${index === 0 ? "" : ' aria-hidden="true"'}><img src="${escapeText(photo.src)}" alt="${escapeText(photo.alt || "")}"></div>`
    )
    .join("");
  if (photos.length === 1 && place.website) {
    return `<a class="photo" href="${escapeText(place.website)}" target="_blank" rel="noopener noreferrer">${frame}</a>`;
  }
  if (photos.length === 1) return `<div class="photo">${frame}</div>`;
  return `<div class="photo carousel" data-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="${escapeText(place.name)} photos">
    <div class="slides">${frame}</div>
    <button type="button" class="carousel-prev" aria-label="Previous photo"></button>
    <button type="button" class="carousel-next" aria-label="Next photo"></button>
    <p class="carousel-count" aria-live="polite"><span data-index>1</span> / ${photos.length}</p>
  </div>`;
}

let carouselBound = false;
function bindCarousels() {
  if (carouselBound) return;
  carouselBound = true;

  function step(carousel, direction) {
    const slides = carousel.querySelectorAll(".slide");
    if (!slides.length) return;
    const index = Number(carousel.dataset.index || 0);
    const next = (index + direction + slides.length) % slides.length;
    carousel.dataset.index = String(next);
    carousel.querySelector(".slides").style.transform = `translateX(-${next * 100}%)`;
    slides.forEach((slide, i) => slide.setAttribute("aria-hidden", i === next ? "false" : "true"));
    const count = carousel.querySelector("[data-index]");
    if (count) count.textContent = String(next + 1);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".carousel-prev, .carousel-next");
    if (!button) return;
    const carousel = button.closest("[data-carousel]");
    if (!carousel) return;
    step(carousel, button.classList.contains("carousel-next") ? 1 : -1);
  });

  document.addEventListener("keydown", (event) => {
    const carousel = event.target.closest("[data-carousel]");
    if (!carousel) return;
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    step(carousel, event.key === "ArrowRight" ? 1 : -1);
  });

  let drag = null;
  document.addEventListener("pointerdown", (event) => {
    const carousel = event.target.closest("[data-carousel]");
    if (!carousel || event.target.closest("button")) return;
    drag = { carousel, x: event.clientX, id: event.pointerId };
  });
  document.addEventListener("pointerup", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const moved = event.clientX - drag.x;
    const carousel = drag.carousel;
    drag = null;
    if (Math.abs(moved) < 40) return;
    step(carousel, moved < 0 ? 1 : -1);
  });
  document.addEventListener("pointercancel", () => {
    drag = null;
  });
}

function placeCard(place) {
  const tags = [
    ...(place.cuisine || []).map((item) => `<span class="tag tag-food">${escapeText(item)}</span>`),
    ...(place.meals || []).map((item) => `<span class="tag tag-meal">${escapeText(mealLabel(item))}</span>`),
  ].join("");
  const photo = photoMarkup(place);
  const title = place.website
    ? `<a href="${escapeText(place.website)}" target="_blank" rel="noopener noreferrer">${escapeText(place.name)}</a>`
    : escapeText(place.name);
  const closed = place.closed ? `<p class="closed">${escapeText(place.closed)}</p>` : "";
  const tagHtml = tags ? `<p class="tags">${tags}</p>` : "";
  const note = place.note ? `<p class="note">${escapeText(place.note)}</p>` : "";
  const hood = place.neighborhood ? `<p class="hood">${escapeText(place.neighborhood)}</p>` : "";
  const addresses = place.spots && place.spots.length ? addressList(place.spots, place.spots.length > 1) : "";
  return `<article class="place-card">
    ${photo}
    <div class="place-body">
      ${hood}
      <h2>${title}</h2>
      ${closed}
      ${tagHtml}
      ${note}
      ${addresses}
    </div>
  </article>`;
}

function byName(list) {
  return [...list].sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base", ignorePunctuation: true })
  );
}

function placeHoods(place) {
  if (place.city) return [place.city];
  if (place.hoods) return place.hoods;
  const labels = (place.spots || []).map((spot) => spot.label).filter(Boolean);
  if (labels.length) return labels;
  return place.neighborhood ? [place.neighborhood] : [];
}

function hoodOptions(list) {
  return [...new Set(list.flatMap((place) => placeHoods(place)))].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );
}

function closeFilterMenus() {
  document.querySelectorAll(".filter-menu").forEach((menu) => {
    const button = menu.querySelector(".filter-toggle");
    const panel = menu.querySelector(".filter-panel");
    if (!button || !panel) return;
    button.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  });
}

let filterDismissBound = false;
function bindFilterDismiss() {
  if (filterDismissBound) return;
  filterDismissBound = true;
  document.addEventListener("click", (event) => {
    if (event.target.closest(".filter-menu")) return;
    closeFilterMenus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeFilterMenus();
  });
}

function mountSelect(root, { name, options, selected, onChange }) {
  const panelId = `${name}-panel`;
  root.innerHTML = `<button type="button" class="filter-toggle" aria-expanded="false" aria-controls="${panelId}">
      <span class="filter-legend">${escapeText(name)}</span>
      <span class="filter-summary">Any</span>
    </button>
    <div class="filter-panel" id="${panelId}" hidden>
      ${options
        .map(
          (option) =>
            `<label><input type="checkbox" value="${escapeText(option.value)}"><span>${escapeText(option.label)}</span></label>`
        )
        .join("")}
    </div>`;

  const button = root.querySelector(".filter-toggle");
  const panel = root.querySelector(".filter-panel");
  const summary = root.querySelector(".filter-summary");

  function paint() {
    const names = options.filter((option) => selected.has(option.value)).map((option) => option.label);
    summary.textContent = names.length ? names.join(", ") : "Any";
    button.title = names.length ? names.join(", ") : "";
    button.classList.toggle("is-set", names.length > 0);
  }

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    closeFilterMenus();
    if (open) return;
    button.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  });

  panel.addEventListener("change", (event) => {
    const input = event.target.closest("input");
    if (!input) return;
    if (input.checked) selected.add(input.value);
    else selected.delete(input.value);
    paint();
    onChange();
  });

  paint();
  return {
    reset() {
      selected.clear();
      root.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
      paint();
    },
  };
}

function renderRestaurantPage() {
  const foodBox = document.querySelector("[data-food-filters]");
  const mealBox = document.querySelector("[data-meal-filters]");
  const hoodBox = document.querySelector("[data-hood-filters]");
  const list = document.querySelector("[data-restaurant-list]");
  const count = document.querySelector("[data-count]");
  const empty = document.querySelector("[data-empty]");
  const clearBtn = document.querySelector("[data-clear]");
  if (!foodBox || !mealBox || !hoodBox || !list) return;

  const selectedFood = new Set();
  const selectedMeals = new Set();
  const selectedHoods = new Set();
  const ordered = byName(restaurants);

  list.innerHTML = ordered.map((place) => placeCard(place)).join("");
  const cards = [...list.querySelectorAll(".place-card")];

  function apply() {
    let shown = 0;
    ordered.forEach((place, index) => {
      const foodOk = selectedFood.size === 0 || place.cuisine.some((item) => selectedFood.has(item));
      const mealOk = selectedMeals.size === 0 || place.meals.some((item) => selectedMeals.has(item));
      const hoodOk = selectedHoods.size === 0 || placeHoods(place).some((item) => selectedHoods.has(item));
      const visible = foodOk && mealOk && hoodOk && matchesQuery(place, search.query());
      cards[index].hidden = !visible;
      if (visible) shown += 1;
    });
    const total = ordered.length;
    count.textContent = shown === total ? `${total} places` : `${shown} of ${total}`;
    empty.hidden = shown !== 0;
    clearBtn.hidden = selectedFood.size === 0 && selectedMeals.size === 0 && selectedHoods.size === 0 && !search.query().trim();
  }

  const menus = [
    mountSelect(foodBox, {
      name: "Food",
      options: foodFilters.map((name) => ({ value: name, label: name })),
      selected: selectedFood,
      onChange: apply,
    }),
    mountSelect(mealBox, {
      name: "When",
      options: mealFilters.map(([value, label]) => ({ value, label })),
      selected: selectedMeals,
      onChange: apply,
    }),
    mountSelect(hoodBox, {
      name: "Neighborhood",
      options: hoodOptions(restaurants).map((name) => ({ value: name, label: name })),
      selected: selectedHoods,
      onChange: apply,
    }),
  ];

  const search = mountSearch(apply);

  clearBtn.addEventListener("click", () => {
    menus.forEach((menu) => menu.reset());
    search.reset();
    closeFilterMenus();
    apply();
  });

  bindFilterDismiss();
  apply();
}

function renderNurseryPage() {
  const list = document.querySelector("[data-nursery-list]");
  const hoodBox = document.querySelector("[data-hood-filters]");
  const count = document.querySelector("[data-count]");
  const empty = document.querySelector("[data-empty]");
  const clearBtn = document.querySelector("[data-clear]");
  if (!list || !hoodBox) return;

  const selectedHoods = new Set();
  const ordered = byName(nurseries);
  list.innerHTML = ordered.map((place) => placeCard(place)).join("");
  const cards = [...list.querySelectorAll(".place-card")];

  function apply() {
    let shown = 0;
    ordered.forEach((place, index) => {
      const visible = (selectedHoods.size === 0 || placeHoods(place).some((item) => selectedHoods.has(item))) && matchesQuery(place, search.query());
      cards[index].hidden = !visible;
      if (visible) shown += 1;
    });
    const total = ordered.length;
    count.textContent = shown === total ? `${total} shops` : `${shown} of ${total}`;
    empty.hidden = shown !== 0;
    clearBtn.hidden = selectedHoods.size === 0 && !search.query().trim();
  }

  const menu = mountSelect(hoodBox, {
    name: "Neighborhood",
    options: hoodOptions(nurseries).map((name) => ({ value: name, label: name })),
    selected: selectedHoods,
    onChange: apply,
  });

  const search = mountSearch(apply);

  clearBtn.addEventListener("click", () => {
    menu.reset();
    search.reset();
    closeFilterMenus();
    apply();
  });

  bindFilterDismiss();
  apply();
}

function renderMiscPage() {
  const typeBox = document.querySelector("[data-type-filters]");
  const hoodBox = document.querySelector("[data-hood-filters]");
  const list = document.querySelector("[data-misc-list]");
  const count = document.querySelector("[data-count]");
  const empty = document.querySelector("[data-empty]");
  const clearBtn = document.querySelector("[data-clear]");
  if (!typeBox || !hoodBox || !list) return;

  const selectedTypes = new Set();
  const selectedHoods = new Set();
  const ordered = byName(misc);
  list.innerHTML = ordered.map((place) => placeCard(place)).join("");
  const cards = [...list.querySelectorAll(".place-card")];
  const typeNames = [...new Set(misc.flatMap((place) => place.cuisine || []))].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );

  function apply() {
    let shown = 0;
    ordered.forEach((place, index) => {
      const typeOk = selectedTypes.size === 0 || (place.cuisine || []).some((item) => selectedTypes.has(item));
      const hoodOk = selectedHoods.size === 0 || placeHoods(place).some((item) => selectedHoods.has(item));
      const visible = typeOk && hoodOk && matchesQuery(place, search.query());
      cards[index].hidden = !visible;
      if (visible) shown += 1;
    });
    const total = ordered.length;
    count.textContent = shown === total ? `${total} places` : `${shown} of ${total}`;
    empty.hidden = shown !== 0;
    clearBtn.hidden = selectedTypes.size === 0 && selectedHoods.size === 0 && !search.query().trim();
  }

  const menus = [
    mountSelect(typeBox, {
      name: "Type",
      options: typeNames.map((name) => ({ value: name, label: name })),
      selected: selectedTypes,
      onChange: apply,
    }),
    mountSelect(hoodBox, {
      name: "Place",
      options: hoodOptions(misc).map((name) => ({ value: name, label: name })),
      selected: selectedHoods,
      onChange: apply,
    }),
  ];

  const search = mountSearch(apply);

  clearBtn.addEventListener("click", () => {
    menus.forEach((menu) => menu.reset());
    search.reset();
    closeFilterMenus();
    apply();
  });

  bindFilterDismiss();
  apply();
}

function renderMusicPage() {
  const genreBox = document.querySelector("[data-genre-filters]");
  const artistBox = document.querySelector("[data-artist-filters]");
  const list = document.querySelector("[data-music-list]");
  const count = document.querySelector("[data-count]");
  const empty = document.querySelector("[data-empty]");
  const clearBtn = document.querySelector("[data-clear]");
  if (!genreBox || !artistBox || !list) return;

  const selectedGenres = new Set();
  const selectedArtists = new Set();
  list.innerHTML = albums.map((album) => placeCard(album)).join("");
  const cards = [...list.querySelectorAll(".place-card")];
  const genreNames = [...new Set(albums.flatMap((album) => album.cuisine || []))].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );

  function apply() {
    let shown = 0;
    albums.forEach((album, index) => {
      const genreOk = selectedGenres.size === 0 || (album.cuisine || []).some((item) => selectedGenres.has(item));
      const artistOk = selectedArtists.size === 0 || selectedArtists.has(album.neighborhood);
      const visible = genreOk && artistOk && matchesQuery(album, search.query());
      cards[index].hidden = !visible;
      if (visible) shown += 1;
    });
    const total = albums.length;
    count.textContent = shown === total ? `${total} albums` : `${shown} of ${total}`;
    empty.hidden = shown !== 0;
    clearBtn.hidden = selectedGenres.size === 0 && selectedArtists.size === 0 && !search.query().trim();
  }

  const menus = [
    mountSelect(genreBox, {
      name: "Genre",
      options: genreNames.map((name) => ({ value: name, label: name })),
      selected: selectedGenres,
      onChange: apply,
    }),
    mountSelect(artistBox, {
      name: "Artist",
      options: hoodOptions(albums).map((name) => ({ value: name, label: name })),
      selected: selectedArtists,
      onChange: apply,
    }),
  ];

  const search = mountSearch(apply);

  clearBtn.addEventListener("click", () => {
    menus.forEach((menu) => menu.reset());
    search.reset();
    closeFilterMenus();
    apply();
  });

  bindFilterDismiss();
  bindSpotifyAppLinks(list);
  apply();
}

// On a computer, try the Spotify app first and fall back to the web player.
// Phones keep the plain link, which already hands off to the app.
function bindSpotifyAppLinks(root) {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  root.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="https://open.spotify.com/album/"]');
    if (!link) return;
    event.preventDefault();
    const webUrl = link.href;
    const appUrl = `spotify:album:${new URL(webUrl).pathname.split("/").pop()}`;
    let leftPage = false;
    const markLeft = () => {
      leftPage = true;
    };
    window.addEventListener("blur", markLeft, { once: true });
    document.addEventListener("visibilitychange", markLeft, { once: true });
    window.location.href = appUrl;
    setTimeout(() => {
      window.removeEventListener("blur", markLeft);
      document.removeEventListener("visibilitychange", markLeft);
      if (!leftPage) window.location.href = webUrl;
    }, 1500);
  });
}

bindCarousels();
renderRestaurantPage();
renderNurseryPage();
renderMiscPage();
renderMusicPage();
