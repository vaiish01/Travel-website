import React, { useState } from "react";

const destinationsData = {
  "North India": [
    {
      id: 1,
      name: "Uttarakhand",
      image: "https://www.holidify.com/images/bgImages/UTTARAKHAND.jpg",
      
      description: "Uttarakhand, known as the 'Land of Gods', offers serene landscapes, beautiful hills, and pilgrimage sites like Haridwar and Rishikesh.Travellers of all kinds can get the best tourism opportunities in Uttarakhand, the Himalayan state in India, with our various Uttarakhand sightseeing tour package. Find the best deals on Uttarakhand tour package at Travelista for a family vacation, spiritual tour, nature exploration, adventure in the picturesque Dev Bhumi (the Land of Gods). Travelista offers a wide range of holiday packages with best deals ensuring an unmatched travel experience you will not find anywhere else. Our years of experience in organizing tours in the Uttarakhand Himalayas make us familiar with every region and destination of this beautiful state. Uttarakhand Package - ₹32,000 per person 6 Days / 5 Nights covering Nainital, Mussoorie, and Rishikesh with adventure activities.",
    },
    {
      id: 2,
      name: "Rajasthan",
      image: "https://www.holidify.com/images/bgImages/RAJASTHAN.jpg",
      
      description: "Rajasthan is famous for its desert landscapes, royal palaces, and vibrant culture with cities like Jaipur, Udaipur, and Jodhpur.Discover the incredible beauty of the land of the royals as we take you to explore Rajasthan's most glorious palaces and forts. With our Rajasthan tour package, you will find yourself immersed in the charm and grandeur of the state.Our Rajasthan tour package make sure that you have the most seamless travel experience while you get the best of this colorful and vibrant destination. Choose our tour package and cater it according to your specific requirements, all at the best prices. Spending your holidays in Rajasthan with us will provide you with an opportunity to explore the state's regal and enchanting architecture, vibrant culture, and rich wildlife, all wrapped up in a blanket of warm hospitality.Rajasthan Package- ₹35,000 per person 6 Days / 5 Nights visiting Jaipur, Udaipur, and Jaisalmer desert safari.",
    },
    {
      id: 3,
      name: "Jammu and Kashmir",
      image: "https://th.bing.com/th/id/OIP.UdIhiqRDAJnc1BIhzeQoEwHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      
      description: "Jammu and Kashmir is the ultimate destination for nature & adventure lovers, whether it is staying in the houseboats in Dal lake or trekking to the top of the valleys, every activity here is a splendid wonder to all the senses. Rightfully called the heaven on earth, Jammu and Kashmir could be the ideal destination for your next vacation. It doesn't matter if it is an unforgettable holiday or some quality time with loved ones you are looking for.Travelista's Jammu and Kashmir tour package not only gives you the chance to witness the bewitching places like Gulmarg and Srinagar but also combines lots of fun and adventure like gondola and shikara rides, camping, rafting, trekking, fishing, mountain biking, bird watching, hot air balloon rides, and houseboat stays. Jammu and Kashmir Package- ₹40,000 per person 6 Days / 5 Nights stay in Srinagar houseboat, Gulmarg snow activities,Pahalgam tour and Vaishno mata darshan.",
    },

    {
      id: 4,
      name: "Leh Ladakh",
      image: "https://th.bing.com/th/id/R.91634352a702e8aa230d0edd71296f5d?rik=Ob335qhJuKT7QQ&riu=http%3a%2f%2fwww.rohantaware.com%2fwp-content%2fuploads%2f2018%2f04%2fladakh-diaries.jpg&ehk=hZlckBJ30QwpNdnZCor95Ws8JJNwLfbPXyv3Y0ogzNY%3d&risl=&pid=ImgRaw&r=0",
      
      description: "Ladakh is the world's most scenic destination, where you have the opportunity to experience adventure, nature, culture, and pilgrimage all together in one trip. Who would not want to visit such an amazing destination once in their lifetime? Our best Ladakh tour package offer you an incredible travel experience to explore the wonderful treasures of Ladakh's natural beauty, trekking trails, lakes, fairs & festivals, rare Himalayan wildlife, and popular Buddhist monasteries. Leh Ladakh Package- ₹45,000 per person 7 Days / 6 Nights Ladakh adventure covering Pangong Lake and Nubra Valley.",
    },

    {
      id: 5,
      name: "Uttar Pradesh",
      image: "https://th.bing.com/th/id/OIP.MjfK-1KusoR19ZmS_4vigQAAAA?rs=1&pid=ImgDetMain",
      
      description: "Sanctified by the holy Ganges, the state of Uttar Pradesh is a paradoxical destination in India. It is the same land, where Taj Mahal wins over millions of tourists every year making it one of the most popular places in the state. Giving a good run to the epitome of love is Varanasi, whose ghats and spiritual vitality beguiles believers and wanderlusters alike. Uttar Pradesh bathe in the charm of Buddhist sites, which with its magnificent history and monuments add richness to tourism in Uttar Pradesh. Offering itself for the sacred confluence of Ganges, Yamuna and the mythical River Saraswati and being the host of world's largest religious assemblage (Kumbh Mela), Uttar Pradesh offer such sightseeing places that condescends it to visitors as an unmatched destination in the country. The state is humbled by the existence of places like Ayodhya and Mathura, where even the Gods agreed on taking birth in the human form. Exhibiting a vivid collection of architectural marvels, demonstrating the brilliant fusion of cultural and traditional thoughts, it boasts a visual treat like no other. A melting pot of culture, the state is a peerless contender when it comes to gastronomic highpoints. Truly, Uttar Pradesh is the indelible mark of excellence on the face of a country as magnificent as India. Uttar Pradesh Package - ₹24,000 per person 4 Days / 3 Nights covering Varanasi, Agra (Taj Mahal), and Lucknow cuisine tour.",
    },


    {
      id: 6,
      name: "Delhi",
      image: "https://www.mistay.in/travel-blog/content/images/size/w2000/2020/07/travel-4813658_1920.jpg",
      
      description: "Capital City Delhi is the third largest city in India with a population of 17 million. The vast urban sprawl of contemporary Delhi is the result of it having a strategic location. Therefore the city had been given a focal position in history of India.From history to nightlife, shopping to gourmet, Delhi offers a fine blend of everything. Vijay Chowk can be reckoned as the vantage point for the city, the area is ideal to linger and witness tourist attractions like Raj buildings grouped on Raisina Hills. The north of the city is magnificent Jama Masjid and Lal Quila with labyrinthine of busy lanes. To the southeast, the marvels of middle quarter such as Nizamuddin Dargah, Humayun's Tomb and Purana Quila can be designated the best places to visit in Delhi. Delhi package - ₹15,000 per person 3 Days / 2 Nights exploring Red Fort, India Gate, and local markets. ",
    },
  ],
  "South India": [
    {
      id: 7,
      name: "Kerala",
      image: "https://www.holidify.com/images/bgImages/KERALA.jpg",
   
      description: "Kerala, also known as 'God's Own Country', is famous for its backwaters, beaches, and lush greenery  Gifted with natural beauty, from its green vegetation, backwaters, and golden beaches to its lively cultural heritage, the state of Kerala is delightful with spectacular influence. Explore this invaluable beauty of Kerala with our numerous Kerala tour package for people with all types of interests.Our Kerala tourism packages include the misty hill station of Munnar, backwater cruises in Alleppey houseboats, sun and sandy beaches of Varkala&Kovalam.  Kerala Package- ₹30,000 per person 5 Days / 4 Nights houseboat stay in Alleppey, Munnar tea gardens, and Ayurvedic spa.",
    },
    {
      id: 8,
      name: "Tamil Nadu",
      image: "https://img.veenaworld.com/wp-content/uploads/2022/06/Experience-Divinity-At-These-7-Temples-In-Tirupati-scaled-e1655557181643.jpg",
      description: "Tamil Nadu is rich in cultural heritage, featuring ancient temples, hill stations like Ooty, and vibrant traditions.Culturally and historically affluent Tamil Nadu is undoubtedly the reflection of India's cultural wealth. Occupying the South Eastern belt of the country, the state is a delight for pilgrims and travel enthusiasts alike. The state boasts of temples that date back to almost two millennia and that pretty much explains everything. Cities like Madurai, Kanchipuram, Mahabalipuram and island situated Rameswaram are the usual haunts of the pilgrims. However, it is not only the temples that overwhelm visitors here, making the tip of Indian peninsula; Kanyakumari is also one of the most visited places in Tamil Nadu. The state also flaunts its lush green forests that it borrows from the Western Ghats. Sprawling in a large area; these forests make the home to several wildlife species. Offering respite from the sweltering heat and noise are the hill stations like Ooty and Kodaikanal.  Tamilnadu Package- ₹22,000 per person 4 Days / 3 Nights temple tour covering Chennai, Madurai, and Mahabalipuram",
    },
    
    
    {
      id: 9,
      name: "Pondicherry",
      image: "https://th.bing.com/th/id/OIP.RclZj1Mn4tQZ9L0aPqxsMgHaE5?w=265&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      description: "Surprise yourself with a visual treat of mini France in India by planning a trip to the picturesque Pondicherry. Snuggling against the shore of Bay of Bengal and adorned with a silhouette of French-style houses and other edifices, Pondicherry is no less than a dream destination to plan a holiday in India. And with our premium tour packages, you are guaranteed the best vacation. Select our wonderful Pondicherry tour package that range from spiritual to beach holiday to heritage and sightseeing tour catering to your every travel need.  Pondicherry Package- ₹18,000 per person 3 Days / 2 Nights stay in a heritage hotel, beach activities, Auroville visit, and French cuisine.",
    },

    {
      id: 10,
      name: "Karnataka",
      image: "https://th.bing.com/th/id/OIP.vcs9aMgRq5VKyHF6_hdIpQHaFs?rs=1&pid=ImgDetMain",
      description: "Scenic Western Ghats, exotic beaches, carved temples, majestic palaces and manicured gardens adorn the state of Karnataka. Karnataka is a treasure of traveling opportunities for every genre of explorers. With its roots deep in spirituality and rich history, the south Indian state of Karnataka is an important tourist destination in India.Sand, sea, and natural habitats make up to the landscapes of Karnataka. Space City, Electronic City, Scotland of India, Heritage City and the Rome of the East, these are some of the ebullient titles that connects with the towns of Karnataka.Indulge in adventure activities at Coorg, wander around the lanes in Bangalore, go for a prayer in the architectural wonder called Murudeshwar or go for a Coorg Plantation walk, Karnataka is a popular destination in South India and has a lot to take a look at. The state is a tapestry of culture, flavors, landscapes, and timeless beauty.    Karnataka Package- ₹28,000 per person5 Days / 4 Nights covering Bangalore, Mysore, and Coorg coffee plantations.",
    },

    {
      id: 11,
      name: "Andaman",
      image: "https://th.bing.com/th/id/OIP.xEs0FkPuU3YyD1Iuma7nTwHaFj?rs=1&pid=ImgDetMain",
      description: "Discover the mesmerizing allure of the Andaman & Nicobar Islands with Travelista's exclusive Andaman Tour Package. Renowned for its surreal landscapes, Andaman is a haven for those seeking an escapade from the mundane. The pristine beaches here are not just a feast for the eyes but also a playground for water adventure enthusiasts. Dive deep into the clear blue waters, explore the vibrant marine life, or simply soak up the sun on the golden sands.Undoubtedly, Andaman stands out as the best getaway in India, presenting a harmonious blend of relaxation and excitement for all kinds of travelers. Andaman Package - ₹38,000 per person 5 Days / 4 Nights beach holiday with scuba diving and island hopping. ",
    },

    {
      id: 12,
      name: "Telangana",
      image: "https://st.depositphotos.com/1141099/1690/i/450/depositphotos_16909969-stock-photo-charminar.jpg",
   
      description: "Telangana also boasts being a land of gods; the state is replete with a plethora of Hindu temples, amongst which Kondagattu Anjaneya Swamy temple and the shrine of Sri Mallikarjuna Swamy are of immense importance. The state also houses a few Jain Temples, churches, and mosques which are perfect for religious tours. The Jama Masjid in Hyderabad is, in fact, an architectural marvel that you cannot miss out on when in Telangana. The state is also blessed with natural grandeur, which is truly worth seeing. Amongst the top sites for nature lovers are Ananthagiri Hills, Bogatha Waterfall, and Pakhal Lake, and then there are plenty of other places around dams in the state that can make tourists spoilt for choice.  Telangana Package- ₹18,000 per person 3 Days / 2 Nights exploring Hyderabad’s Charminar, Golconda Fort, and local cuisine.",
    },

  ],

  "East India": [
   

      { id: 13, name: "Arunachal",
        image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/19190505/ARUNACHAL-PRADESH-FEATURE-compressed.jpg",
      
         description: "Arunachal Pradesh, the beautiful North Eastern state of India, is a haven for adventure and nature enthusiasts seeking to explore its untapped tourism potential. With breathtaking landscapes, abundant wildlife, picturesque valleys, magnificent waterfalls, tranquil Buddhist monasteries, meandering rivers, and a rich cultural heritage, Arunachal Pradesh offers a captivating experience for tourists. Plan an affordable vacation tour of Arunachal Pradesh with Travelista and discover the hidden gems of this enchanting destination. From snow-clad mountains to challenging trails, Arunachal Pradesh beckons thrill-seekers to push their limits and create unforgettable memories. Whether it's trekking, rafting, motorbiking, wildlife tours, pilgrimage journeys, interactive tribal experiences, or simply immersing oneself in the serenity of nature, this state has it all. Arunachal Package- ₹35,000 per person 6 Days / 5 Nights covering Tawang Monastery and scenic landscapes. " 
       },
       { id: 14, name: "Sikkim",
        image: "https://static.toiimg.com/photo/64481180/.jpg",
        
         description: "Indulge in a magnificent travel experience to Sikkim with us and avail the best deal on your Sikkim tour. Choose  our tour package that is budget-friendly and cater to both long and short trips. We offer a variety of choices that you can pick from including Sikkim Family Tours, Honeymoon Packages, Adventure & Trekking Packages, Cultural Tours, and Weekend Tours. Our Sikkim tourism package can be customized and tailored to your specific needs and preferences.Experience the best parts of Sikkim with us as we take you through the popular tourist destinations to explore its historic monasteries, legendary lakes, national parks, enveloped with the grandeur of the mighty Mount Kanchenjunga all around. A perfect getaway from the loud cities, Sikkim’s calmness will delight your soul. Sikkim Package- ₹30,000 per person 5 Days / 4 Nights covering Gangtok, Nathula Pass, and Tsomgo Lake. " 
       },
       { id: 15, name: "Assam",
        image: "https://th.bing.com/th/id/OIP.XqIQFTQgHtrJ-4Si1ihpyQHaD4?w=1200&h=630&rs=1&pid=ImgDetMain",
        
         description: "The mystifying land of soaring blue hills and undulating river valleys, Assam is the doorway to the northeast fringes of India. A popular tourism destinations among the nature lovers, this state attracts countless tourists from all over the world through its peerless tourist attractions. The radiant Brahmaputra River flowing from Tibet meanders from Assam and augments the beauty of the region. With its breathtaking natural exquisiteness, Assam paves a way for a congenial and unforgettable tour for the travellers. A tourist must visit this place to get drenched in mystic tranquility and gripping panorama. Assam Package- ₹28,000 per person 5 Days / 4 Nights covering Kaziranga National Park and Brahmaputra River cruise. " 
       },
    { id: 16, name: "Odisha", image: "https://www.holidify.com/images/bgImages/ODISHA.jpg",  description: "Odisha offers a rich heritage with ancient temples, tribal cultures, and beautiful beaches like Puri.The historical and serene state of Odisha is positioned in the midst of gorgeous verdant green mountains of the Eastern Ghats. This culturally thriving land is encircled by the states of Andhra Pradesh, Jharkhand, Chhattisgarh, and West Bengal. Odisha is set apart by its sun-drenched beaches, glistening lakes, twisting rivers, impressive waterfalls, and the blue hills of Eastern Ghats, which are abode to affluent flora and fauna that make an impact on and entice tourists from all over the globe. Odisha is well known for its fairs, festivals, silver filigree, stone carving, exquisite handicrafts, beautiful textiles and applique work.  Odisha Package - ₹22,000 per peson 4 Days / 3 Nights covering Puri, Konark Temple, and Chilika Lake." },
    { id: 17, 
      name: "Meghalaya",
  
       image: "https://th.bing.com/th/id/OIP.JPPK1n34q362q9PtZgSfCAHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",  description: "Meghalaya boasts the beautiful hill stations and places that seem like a slice of heaven. Bounded by Assam and Bangladesh, the state is a popular monsoon destination. Blessed with natural attractions, Meghalaya is rightly called the 'Abode of Clouds'. The unspoilt beauty makes Meghalaya a destination that is often on the bucket list. There are several known and unknown places to visit that proffers an expedition unlike any. While Cherapunjee and Shillong remain the favourite places to see in Meghalaya, the state also anticipates profound explorations. Meghalaya Package - ₹29,000 per person 5 Days / 4 Nights covering Shillong, Cherrapunji, and living root bridges."},
    { id: 18, name: "West Bengal",
      image: "https://www.holidify.com/images/bgImages/WEST-BENGAL.jpg",
      
       description: "West Bengal is known for its cultural heritage, the bustling city of Kolkata, and the scenic beauty of Darjeeling.West Bengal, positioned in eastern India, is an immaculate with an affluent variety. Abode to different civilizations and acknowledged for its cultural assortment, this state has a great history as well. West Bengal finds its mention in the epic Mahabharata. A credit to its ecological position extending from the Bay of Bengal to great Himalayas, the state has magnificent panoramas to enchant the souls of the tourists. Our West Bengal tour package cater you a broad exploration of the different hues of this state. Our tempting deals bring you close to multi-coloured facets of West Bengal's culture and exquisiteness.  West Bengal Package - ₹20,000 per person 4 Days / 3 Nights Kolkata city tour and Darjeeling hill station visit. " 
     },
    ],
  "West India": [
    { id: 19, name: "Goa", image: "https://www.holidify.com/images/bgImages/GOA.jpg",
      
     description: "Goa is famous for its pristine beaches, vibrant nightlife, and Portuguese heritage.The golden and silver beaches; the swaying coconut palms; the lively nightlife; and sea-facing luxury resorts all invite you for the best beach holiday in Goa. With our carefully designed Goa tour package, we offer you a variety of holidays that can match your interest and style of travelling. Book with us for a guaranteed amazing family beach holiday, romantic getaway, adventure tour, and culture & heritage tour in Goa.  Goa Package- ₹25,000 per person 4 Days / 3 Nights stay in a beach resort, sightseeing, water sports, and nightlife experience.   ",
    },

    { id: 20, name: "Maharashtra", image: "https://th.bing.com/th/id/OIP.BskFGrtAay0YV9NGPfZfNgHaE5?w=256&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7", description: "Maharashtra is home to bustling Mumbai, ancient caves of Ajanta and Ellora, and scenic hill stations.Certainly unsullied, the state of Maharashtra is ornamented with jewels of diversity, some precious, semi precious and some are well hidden gems. Serene Beaches; lofty mountains; awe-inspiring historic monuments and ancient sites culminate to result in a magical place like Maharashtra. A prominent paradox can be witnessed, where one part of the state like Mumbai and Pune enjoy modern life and amenities, the other parts like Matheran, Lonavala, Mahabaleshwar are satiated with the rustic life and serenity of the landscape. Maharashtra is humbled by the existence of Shirdi, which is the hometown to the holy Sai Baba and is a popular tourist attractions, whereas, Aurangabad (Ajanta and Ellora caves and Bibi ka Maqbara) gives Maharashtra a chance to be boastful of its rich history and making it an important sightseeing place. Sugar-coating the experience of holidays in Maharashtra are the destinations like Ganpatipule and Tarkarli.Maharashtra Package- ₹28,000 per person 5 Days / 4 Nights covering Mumbai, Lonavala, Ajanta-Ellora caves and famous temples. " },
    { id: 21, name: "Gujarat", image: "https://img.nayatrip.com/images/state/big/12/statue-of-unity-1584792976406.jpg",  description: "Gujarat is a popular tourist destination in Western India. Explore the diversity of Incredible Gujarat with our best Gujarat Tour Package that take you on a tour of picturesque beaches, heritage sites, temples, wildlife sanctuaries & national parks, the large white desert Rann of Kutch, Statue of Unity and many other popular attractions of Gujarat. Gujarat Tourism offers a numerous opportunity for a sightseeing tour.Gujarat Package- ₹26,000 per person 4 Days / 3 Nights exploring vrindavan, Somnath Temple, and Rann of Kutch."},

    { id: 22, name: "Pune", image: "https://punetourism.co.in/images/places-to-visit/headers/shaniwar-wada-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      
      description: " Pune tour packages starting with a time travel experience into the royal history of the Maratha Kings and their dynasties;admiring the classic architecture displaying a fusion of Maratha, Mughal and European culture. You can visit the grand temples and rock carved caves, seek blessings of Dagaduseth Halwai Ganpati; pay homage to Mahatma Gandhi and other freedom fighters in the Gandhi memorial hall; capture photographs with the grand gates of Shaniwar Wada as the background and trek to high hill tops of the city. Pune Package- ₹15,000 peer person 3 Days / 2 Nights exploring historical forts, gardens, temples and nightlife."
      },
      { id: 23, name: "Gir National Park", image: "https://www.indiaholidaymall.com/images/blog/Gir-National-Park.jpg",
        
        description: "The area of Gir National Park was once the hunting ground for the Britishers during their reign in India and while hunting these great numbers of tigers and lions accompanied by several Rajas and Maharajas of the region, it was considered as the matter of great pride.Today the park is recognized as one of the most important protected areas in Asia due to its supported species. Gir is accustomed of unique ecosystem with diverse flora and fauna and is now considered as one of the most important protected areas in Asia due to its unsupported species. Gir National Park Package - ₹30,000 per person 4 Days / 3 Nights wildlife safari and eco-resort stay. "
        },
        { id: 24, name: "Daman and Diu", image: "https://th.bing.com/th/id/OIP.EgnflPNY34O1xbyzVqKlMQHaE7?rs=1&pid=ImgDetMain",
           
          description: "Daman & Diu invites you for that perfect sun, sand, and sea holiday in India with its less crowded and family-friendly beaches that are a treat to the eyes. Make the most of this beach vacation on the west coast with us.Daman and Diu, two former Portuguese colonies on the western coast of India, are known for their pristine beaches, colonial architecture, and vibrant culture. A tour to Daman and Diu offers a mix of historical exploration, scenic landscapes, and cultural experiences.Diu and Daman Package- ₹20,000 per person 3 Days / 2 Nights beach stay with fort visits and local seafood experience."
          }
  ]
};

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("North India");
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="container">
      <h2>Explore Top Destinations by Region</h2>
      
      {/* Region Tabs */}
      <div>
        {Object.keys(destinationsData).map((region) => (
          <button
            key={region}
            onClick={() => {
              setSelectedRegion(region);
              setSelectedDestination(null);
            }}
            style={{
              marginRight: "20px",
              padding: "10px 20px",
              border: selectedRegion === region ? "2px solid orange" : "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: selectedRegion === region ? "#ff6600" : "white",
              color: selectedRegion === region ? "white" : "black",
            }}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Destination List */}
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {destinationsData[selectedRegion].map((dest) => (
          <div
            key={dest.id}
            onClick={() => setSelectedDestination(dest)}
            style={{
              width: "30%",
              margin: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src={dest.image}
              alt={dest.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3>{dest.name}</h3>
              <p>{dest.packages}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Destination Description Section */}
      {selectedDestination && (
        <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", background: "#f9f9f9" }}>
          <h2>{selectedDestination.name}</h2>
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            style={{ width: "100%", maxHeight: "300px", borderRadius: "10px", objectFit: "cover" }}
          />
          <p style={{ marginTop: "15px", fontSize: "1.2rem" }}>{selectedDestination.description}</p>
        </div>
      )}
    </div>
  );
};

export default Destinations;
