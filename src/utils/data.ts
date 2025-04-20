// Mock data for the Temple Tour Guide application

export interface Temple {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  history: string;
  timings: string;
  entryFee: string;
  ruler: string;
  sponsors: string[];
  latitude: number;
  longitude: number;
  contactPhone: string;
  contactEmail: string;
  galleryImages: string[];
}

export interface NearbyPlace {
  id: string;
  name: string;
  type: string;
  distance: string;
  description: string;
  imageUrl: string;
  rating: number;
}

export interface Hotel {
  id: string;
  name: string;
  distance: string;
  priceRange: string;
  rating: number;
  imageUrl: string;
  description: string;
  contactPhone: string;
  contactEmail: string;
  amenities: string[];
}

export const temples: Temple[] = [
  {
    id: '1',
    name: 'Golden Temple',
    location: 'Amritsar, Punjab, India',
    description: 'The Golden Temple, also known as Sri Harmandir Sahib, is a sacred site for Sikhs and a symbol of human brotherhood and equality.',
    imageUrl: 'https://images.pexels.com/photos/5825604/pexels-photo-5825604.jpeg',
    history: 'Built in the 16th century, the Golden Temple was designed by the fifth Sikh guru, Guru Arjan Dev. The foundation stone was laid by a Muslim saint, Hazrat Mian Mir. The temple has been rebuilt multiple times after being destroyed by invaders.',
    timings: '4:00 AM to 10:00 PM, every day',
    entryFee: 'Free',
    ruler: 'Guru Arjan Dev (5th Sikh Guru)',
    sponsors: ['Sikh Community', 'Devotees worldwide'],
    latitude: 31.6200,
    longitude: 74.8765,
    contactPhone: '+91 183 255 3957',
    contactEmail: 'info@goldentemple.org',
    galleryImages: [
      'https://images.pexels.com/photos/1485555/pexels-photo-1485555.jpeg',
      'https://images.pexels.com/photos/9166559/pexels-photo-9166559.jpeg',
      'https://images.pexels.com/photos/6309312/pexels-photo-6309312.jpeg'
    ]
  },
  {
    id: '2',
    name: 'Meenakshi Temple',
    location: 'Madurai, Tamil Nadu, India',
    description: 'Meenakshi Temple is a historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar, known for its stunning architecture and intricate carvings.',
    imageUrl: 'https://images.pexels.com/photos/2315434/pexels-photo-2315434.jpeg',
    history: 'Dating back to the 6th century CE, the temple was rebuilt by Thirumalai Nayak in the 17th century. It features 14 colorful gopurams (gateway towers) and has a unique place in Tamil culture.',
    timings: '5:00 AM to 9:30 PM, every day',
    entryFee: 'Free for devotees, ₹50 for tourists',
    ruler: 'Pandyan Dynasty, later Nayak rulers',
    sponsors: ['Tamil Nadu Government', 'Hindu Religious Endowments Board'],
    latitude: 9.9195,
    longitude: 78.1193,
    contactPhone: '+91 452 234 4360',
    contactEmail: 'info@meenakshitemple.org',
    galleryImages: [
      'https://images.pexels.com/photos/16066329/pexels-photo-16066329.jpeg',
      'https://images.pexels.com/photos/14790312/pexels-photo-14790312.jpeg',
      'https://images.pexels.com/photos/13252904/pexels-photo-13252904.jpeg'
    ]
  },
  {
    id: '3',
    name: 'Angkor Wat',
    location: 'Siem Reap, Cambodia',
    description: 'Angkor Wat is the largest religious monument in the world, originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire.',
    imageUrl: 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg',
    history: 'Built in the early 12th century by King Suryavarman II, Angkor Wat was gradually transformed into a Buddhist temple. It is a prime example of classical Khmer architecture and has become a symbol of Cambodia.',
    timings: '5:00 AM to 5:30 PM, every day',
    entryFee: '$37 for one-day pass',
    ruler: 'King Suryavarman II',
    sponsors: ['APSARA National Authority', 'UNESCO'],
    latitude: 13.4125,
    longitude: 103.8670,
    contactPhone: '+855 63 765 577',
    contactEmail: 'info@angkorwat.gov.kh',
    galleryImages: [
      'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg',
      'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg',
      'https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg'
    ]
  },
  {
    id: '4',
    name: 'Temple of Heaven',
    location: 'Beijing, China',
    description: 'The Temple of Heaven is an imperial complex of religious buildings where emperors of the Ming and Qing dynasties prayed for good harvests.',
    imageUrl: 'https://images.pexels.com/photos/2846033/pexels-photo-2846033.jpeg',
    history: 'Built between 1406 and 1420 during the reign of the Yongle Emperor, the Temple of Heaven was visited by Emperors for annual ceremonies of prayer to Heaven for good harvest.',
    timings: '6:00 AM to 8:00 PM, April to October; 6:30 AM to 5:30 PM, November to March',
    entryFee: '¥34 (complex), ¥28 (park)',
    ruler: 'Yongle Emperor of Ming Dynasty',
    sponsors: ['Chinese Government', 'Beijing Cultural Heritage Bureau'],
    latitude: 39.8827,
    longitude: 116.4062,
    contactPhone: '+86 10 6702 8866',
    contactEmail: 'info@templeofheaven.cn',
    galleryImages: [
      'https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg',
      'https://images.pexels.com/photos/13186293/pexels-photo-13186293.jpeg',
      'https://images.pexels.com/photos/5708858/pexels-photo-5708858.jpeg'
    ]
  }
];

export const nearbyPlaces: NearbyPlace[] = [
  {
    id: '1',
    name: 'Jallianwala Bagh',
    type: 'Historical Site',
    distance: '0.5 km from Golden Temple',
    description: 'A public garden that houses a memorial to commemorate the massacre of peaceful protesters by British forces in 1919.',
    imageUrl: 'https://images.pexels.com/photos/11451720/pexels-photo-11451720.jpeg',
    rating: 4.6
  },
  {
    id: '2',
    name: 'Wagah Border',
    type: 'Border Ceremony',
    distance: '28 km from Golden Temple',
    description: 'Famous for its flag-lowering ceremony, the Wagah Border is the international boundary between India and Pakistan.',
    imageUrl: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Thirumalai Nayakkar Palace',
    type: 'Historical Palace',
    distance: '1.5 km from Meenakshi Temple',
    description: 'A 17th-century palace built by King Thirumalai Nayak with a blend of Dravidian and Islamic architectural styles.',
    imageUrl: 'https://images.pexels.com/photos/6065920/pexels-photo-6065920.jpeg',
    rating: 4.2
  },
  {
    id: '4',
    name: 'Bayon Temple',
    type: 'Ancient Temple',
    distance: '2 km from Angkor Wat',
    description: 'Known for its multitude of serene and smiling stone faces, this temple was built as the official state temple of King Jayavarman VII.',
    imageUrl: 'https://images.pexels.com/photos/3214994/pexels-photo-3214994.jpeg',
    rating: 4.7
  }
];

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Golden Retreat',
    distance: '0.8 km from Golden Temple',
    priceRange: '$50-$120 per night',
    rating: 4.5,
    imageUrl: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    description: 'A comfortable hotel offering serene views of the city and easy access to the Golden Temple.',
    contactPhone: '+91 183 255 6789',
    contactEmail: 'bookings@goldenretreat.com',
    amenities: ['Free Wi-Fi', 'Restaurant', 'Room Service', 'Air Conditioning', 'Parking']
  },
  {
    id: '2',
    name: 'Madurai Heritage Resort',
    distance: '1.2 km from Meenakshi Temple',
    priceRange: '$70-$150 per night',
    rating: 4.3,
    imageUrl: 'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
    description: 'Experience traditional Tamil hospitality with modern amenities at this heritage property.',
    contactPhone: '+91 452 234 7890',
    contactEmail: 'reservations@maduraiheritage.com',
    amenities: ['Pool', 'Spa', 'Restaurant', 'Free Wi-Fi', 'Airport Shuttle']
  },
  {
    id: '3',
    name: 'Angkor Paradise',
    distance: '3 km from Angkor Wat',
    priceRange: '$80-$200 per night',
    rating: 4.7,
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    description: 'Luxury accommodation with traditional Khmer influences and excellent amenities for temple explorers.',
    contactPhone: '+855 63 765 888',
    contactEmail: 'info@angkorparadise.com',
    amenities: ['Swimming Pool', 'Spa', 'Restaurant', 'Tour Desk', 'Free Shuttle to Temples']
  },
  {
    id: '4',
    name: 'Imperial Courtyard',
    distance: '1.5 km from Temple of Heaven',
    priceRange: '$100-$250 per night',
    rating: 4.6,
    imageUrl: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
    description: 'A luxury hotel combining traditional Chinese architecture with modern comforts.',
    contactPhone: '+86 10 6702 9999',
    contactEmail: 'bookings@imperialcourtyard.cn',
    amenities: ['Business Center', 'Fine Dining', 'Wellness Center', 'Concierge Service', 'Airport Transfer']
  }
];