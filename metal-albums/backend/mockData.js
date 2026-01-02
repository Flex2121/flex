// Mock data for testing without API keys

const getRandomDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
};

const mockAlbums = {
  'metal': [
    {
      id: 'mock-1',
      name: 'The Symphony of Destruction',
      artist: 'Iron Throne',
      artistId: 'mock-artist-1',
      releaseDate: getRandomDate(2),
      image: 'https://picsum.photos/seed/metal1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 10
    },
    {
      id: 'mock-2',
      name: 'Echoes of the Void',
      artist: 'Crimson Tide',
      artistId: 'mock-artist-2',
      releaseDate: getRandomDate(5),
      image: 'https://picsum.photos/seed/metal2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 12
    },
    {
      id: 'mock-3',
      name: 'Mechanical Nightmare',
      artist: 'Steel Prophet',
      artistId: 'mock-artist-3',
      releaseDate: getRandomDate(1),
      image: 'https://picsum.photos/seed/metal3/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 9
    },
    {
      id: 'mock-4',
      name: 'Realm of Chaos',
      artist: 'Dark Prophecy',
      artistId: 'mock-artist-4',
      releaseDate: getRandomDate(8),
      image: 'https://picsum.photos/seed/metal4/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 11
    },
    {
      id: 'mock-5',
      name: 'Beyond the Gates',
      artist: 'Eternal Suffering',
      artistId: 'mock-artist-5',
      releaseDate: getRandomDate(3),
      image: 'https://picsum.photos/seed/metal5/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 8
    }
  ],
  'death metal': [
    {
      id: 'mock-6',
      name: 'Tomb of the Forgotten',
      artist: 'Necrotic Flesh',
      artistId: 'mock-artist-6',
      releaseDate: getRandomDate(1),
      image: 'https://picsum.photos/seed/death1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 10
    },
    {
      id: 'mock-7',
      name: 'Bloodsoaked Carnage',
      artist: 'Cadaver Disposal',
      artistId: 'mock-artist-7',
      releaseDate: getRandomDate(4),
      image: 'https://picsum.photos/seed/death2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 9
    },
    {
      id: 'mock-8',
      name: 'Putrid Decay',
      artist: 'Rotting Corpse',
      artistId: 'mock-artist-8',
      releaseDate: getRandomDate(6),
      image: 'https://picsum.photos/seed/death3/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 11
    }
  ],
  'black metal': [
    {
      id: 'mock-9',
      name: 'Frozen Shadows of Eternal Night',
      artist: 'Wintermoon',
      artistId: 'mock-artist-9',
      releaseDate: getRandomDate(2),
      image: 'https://picsum.photos/seed/black1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 7
    },
    {
      id: 'mock-10',
      name: 'Chronicles of the Damned',
      artist: 'Infernal Majesty',
      artistId: 'mock-artist-10',
      releaseDate: getRandomDate(5),
      image: 'https://picsum.photos/seed/black2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 8
    },
    {
      id: 'mock-11',
      name: 'Unholy Rituals',
      artist: 'Satanic Warmaster',
      artistId: 'mock-artist-11',
      releaseDate: getRandomDate(7),
      image: 'https://picsum.photos/seed/black3/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 6
    }
  ],
  'thrash metal': [
    {
      id: 'mock-12',
      name: 'Speed and Aggression',
      artist: 'Nuclear Assault',
      artistId: 'mock-artist-12',
      releaseDate: getRandomDate(3),
      image: 'https://picsum.photos/seed/thrash1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 12
    },
    {
      id: 'mock-13',
      name: 'Toxic Warfare',
      artist: 'Annihilator',
      artistId: 'mock-artist-13',
      releaseDate: getRandomDate(1),
      image: 'https://picsum.photos/seed/thrash2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 10
    }
  ],
  'doom metal': [
    {
      id: 'mock-14',
      name: 'Crawling Through Eternity',
      artist: 'Monolith of Despair',
      artistId: 'mock-artist-14',
      releaseDate: getRandomDate(4),
      image: 'https://picsum.photos/seed/doom1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 6
    },
    {
      id: 'mock-15',
      name: 'Burden of Existence',
      artist: 'Funeral Mist',
      artistId: 'mock-artist-15',
      releaseDate: getRandomDate(2),
      image: 'https://picsum.photos/seed/doom2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 7
    }
  ],
  'progressive metal': [
    {
      id: 'mock-16',
      name: 'Transcendental Journey',
      artist: 'Dream Reality',
      artistId: 'mock-artist-16',
      releaseDate: getRandomDate(3),
      image: 'https://picsum.photos/seed/prog1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 8
    },
    {
      id: 'mock-17',
      name: 'Celestial Mechanics',
      artist: 'Symphony X',
      artistId: 'mock-artist-17',
      releaseDate: getRandomDate(6),
      image: 'https://picsum.photos/seed/prog2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 9
    }
  ],
  'power metal': [
    {
      id: 'mock-18',
      name: 'Warriors of Glory',
      artist: 'Dragon Force',
      artistId: 'mock-artist-18',
      releaseDate: getRandomDate(2),
      image: 'https://picsum.photos/seed/power1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 11
    },
    {
      id: 'mock-19',
      name: 'Tales of Valor',
      artist: 'Stratovarius',
      artistId: 'mock-artist-19',
      releaseDate: getRandomDate(5),
      image: 'https://picsum.photos/seed/power2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 10
    }
  ],
  'metalcore': [
    {
      id: 'mock-20',
      name: 'Rise from the Ashes',
      artist: 'Killswitch Engage',
      artistId: 'mock-artist-20',
      releaseDate: getRandomDate(1),
      image: 'https://picsum.photos/seed/metalcore1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 12
    },
    {
      id: 'mock-21',
      name: 'Scream of Defiance',
      artist: 'Parkway Drive',
      artistId: 'mock-artist-21',
      releaseDate: getRandomDate(4),
      image: 'https://picsum.photos/seed/metalcore2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 11
    }
  ],
  'deathcore': [
    {
      id: 'mock-22',
      name: 'Eternal Suffering',
      artist: 'Suicide Silence',
      artistId: 'mock-artist-22',
      releaseDate: getRandomDate(3),
      image: 'https://picsum.photos/seed/deathcore1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 10
    },
    {
      id: 'mock-23',
      name: 'Condemned to Oblivion',
      artist: 'Whitechapel',
      artistId: 'mock-artist-23',
      releaseDate: getRandomDate(7),
      image: 'https://picsum.photos/seed/deathcore2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 9
    }
  ],
  'rock': [
    {
      id: 'mock-24',
      name: 'Electric Dreams',
      artist: 'The Rolling Stones',
      artistId: 'mock-artist-24',
      releaseDate: getRandomDate(2),
      image: 'https://picsum.photos/seed/rock1/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 12
    },
    {
      id: 'mock-25',
      name: 'Highway to Nowhere',
      artist: 'AC/DC',
      artistId: 'mock-artist-25',
      releaseDate: getRandomDate(5),
      image: 'https://picsum.photos/seed/rock2/640/640',
      spotifyUrl: 'https://open.spotify.com',
      totalTracks: 11
    }
  ]
};

const mockLastFmData = {
  name: 'Mock Album',
  artist: 'Mock Artist',
  listeners: Math.floor(Math.random() * 50000) + 10000,
  playcount: Math.floor(Math.random() * 500000) + 100000,
  userplaycount: 0,
  tags: ['metal', 'heavy metal', 'thrash', 'progressive'],
  image: '',
  wiki: 'A fantastic album by a legendary metal band.'
};

const mockMetalArchivesData = [
  {
    band: 'Mock Band',
    album: 'Mock Album',
    type: 'Full-length',
    genre: 'Death Metal / Black Metal',
    year: new Date().getFullYear().toString()
  }
];

module.exports = {
  mockAlbums,
  mockLastFmData,
  mockMetalArchivesData
};
