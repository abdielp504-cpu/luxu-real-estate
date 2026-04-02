-- Seed 30 Luxury Properties
insert into public.properties (title, slug, description, price, address, city, type, beds, baths, sqft, latitude, longitude, images, amenities, status)
values
('The Zenith Penthouse', 'the-zenith-penthouse', 'Experience the pinnacle of urban living in this triplex penthouse with 360-degree skyline views.', 12500000, '700 Brickell Ave', 'Miami', 'penthouse', 4, 5, 6200, 25.7617, -80.1918, 
  ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0'],
  ARRAY['Private Pool', 'Smart Home', 'Wine Cellar', 'Elevator', '24/7 Concierge'], 'available'),

('Azure Bay Villa', 'azure-bay-villa', 'A Mediterranean-style masterpiece directly on the water with a private dock and guest house.', 8900000, '45 Coral Gables Way', 'Miami', 'villa', 6, 7, 8500, 25.7215, -80.2684,
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811', 'https://images.unsplash.com/photo-1613977257363-707ba9348227', 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6'],
  ARRAY['Private Dock', 'Home Theater', 'Infinity Pool', 'Guest House', 'Outdoor Kitchen'], 'available'),

('Bel Air Modernist', 'bel-air-modernist', 'Architecture meets luxury in this glass-walled estate overlooking the canyons of Los Angeles.', 15750000, '1200 Stradella Rd', 'Los Angeles', 'house', 5, 6, 9200, 34.0837, -118.4467,
  ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9', 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde'],
  ARRAY['Infinity Pool', 'Gym', 'Gallery Space', 'Smart Lighting', 'Solar Panels'], 'available'),

('The Aspen Peak Chalet', 'the-aspen-peak-chalet', 'Ski-in/ski-out luxury chalet featuring reclaim wood and floor-to-ceiling mountain views.', 6200000, '88 Mountain Top', 'Aspen', 'house', 4, 4, 4800, 39.1911, -106.8175,
  ARRAY['https://images.unsplash.com/photo-1518780664697-55e3ad937233', 'https://images.unsplash.com/photo-1542718610-a1d656d1884c', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', 'https://images.unsplash.com/photo-1510798831971-661eb04b3739', 'https://images.unsplash.com/photo-1449156001437-af90bb425750'],
  ARRAY['Ski Room', 'Hot Tub', 'Stone Fireplace', 'Heated Floors', 'Sauna'], 'available'),

('Central Park Sanctuary', 'central-park-sanctuary', 'An elegant duplex overlooking Central Park with original 1920s molding and modern upgrades.', 9400000, '15 Central Park West', 'New York', 'apartment', 3, 3, 3500, 40.7694, -73.9812,
  ARRAY['https://images.unsplash.com/photo-1567496898669-ee935f5f647a', 'https://images.unsplash.com/photo-1522708323590-d248b6d0267d', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb', 'https://images.unsplash.com/photo-1484154218962-a197022b5858'],
  ARRAY['Park View', 'Doorman', 'Library', 'Private Terrace', 'Chef Kitchen'], 'available'),

('Hollywood Hills Glass Pavilion', 'hollywood-hills-pavilion', 'A cantilevered marvel offering the most iconic views of the city lights and the Hollywood sign.', 7800000, '2200 Mulholland Dr', 'Los Angeles', 'house', 3, 4, 4100, 34.1289, -118.3517,
  ARRAY['https://images.unsplash.com/photo-1480074568708-e7b720bb3f09', 'https://images.unsplash.com/photo-1449844908441-8829872d2607', 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35', 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f', 'https://images.unsplash.com/photo-1518780664697-55e3ad937233'],
  ARRAY['City View', 'Glass Walls', 'Zero-edge Pool', 'Automated Blinds', 'Zen Garden'], 'available'),

('Malibu Surf Estate', 'malibu-surf-estate', 'Ultra-private beach estate with 100 feet of ocean frontage and minimalist coastal design.', 22000000, '23400 Pacific Coast Hwy', 'Los Angeles', 'villa', 5, 5, 7200, 34.0381, -118.6923,
  ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87'],
  ARRAY['Beach Access', 'Surf Rack', 'Outdoor Shower', 'Deck', 'Smart Home'], 'available'),

('Tribeca Industrial Loft', 'tribeca-industrial-loft', 'Authentic loft living with soaring ceilings, exposed brick, and bespoke luxury finishes.', 5400000, '45 Hudson St', 'New York', 'apartment', 2, 2, 3100, 40.7183, -74.0077,
  ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', 'https://images.unsplash.com/photo-1560184897-ae75f418493e', 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0', 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', 'https://images.unsplash.com/photo-1560185893-a55caf0a52f9'],
  ARRAY['Industrial Style', 'High Ceilings', 'Key-locked Elevator', 'Roof Access', 'Custom Lighting'], 'available'),

('Star Island Manor', 'star-island-manor', 'The ultimate in privacy and prestige on Miami’s most exclusive gated island.', 35000000, '10 Star Island Dr', 'Miami', 'villa', 8, 10, 15000, 25.7772, -80.1503,
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811', 'https://images.unsplash.com/photo-1613977257363-707ba9348227', 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6'],
  ARRAY['Island Location', 'Dock', 'Guest Wing', 'Tennis Court', 'Wine Cellar'], 'available'),

('The Glass Cube', 'the-glass-cube', 'A transparent architectural statement in the heart of Aspen’s forest.', 4200000, '12 Forest Ln', 'Aspen', 'house', 3, 3, 3200, 39.1833, -106.8167,
  ARRAY['https://images.unsplash.com/photo-1480074568708-e7b720bb3f09', 'https://images.unsplash.com/photo-1449844908441-8829872d2607', 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35', 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f', 'https://images.unsplash.com/photo-1518780664697-55e3ad937233'],
  ARRAY['Forest Setting', 'Minimalist', 'Floor Heating', 'Smart Home', 'Terrace'], 'available'),

('Chelsea Sky Garden', 'chelsea-sky-garden', 'Luxury living with a private 2,000 sqft landscaped roof garden in Manhattan.', 7200000, '200 W 24th St', 'New York', 'penthouse', 3, 4, 3800, 40.7448, -73.9975,
  ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0'],
  ARRAY['Roof Garden', 'Floor-to-Ceiling Windows', 'Concierge', 'Gym', 'Gallery Walls'], 'available'),

('Biscayne Modern', 'biscayne-modern', 'Sleek white architecture meets the blue waters of Biscayne Bay.', 6500000, '300 Bay Dr', 'Miami', 'house', 4, 5, 5200, 25.8482, -80.1291,
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811', 'https://images.unsplash.com/photo-1613977257363-707ba9348227', 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6'],
  ARRAY['Bay Front', 'Pool', 'Home Automation', 'Modernist', 'Garage'], 'available'),

('The Hideaway', 'the-glass-house-2', 'Hidden among the trees, this wood and glass structure is the ultimate private retreat.', 2800000, '55 Secret Rd', 'Aspen', 'house', 2, 2, 2100, 39.2000, -106.8500,
  ARRAY['https://images.unsplash.com/photo-1518780664697-55e3ad937233', 'https://images.unsplash.com/photo-1542718610-a1d656d1884c', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', 'https://images.unsplash.com/photo-1510798831971-661eb04b3739', 'https://images.unsplash.com/photo-1449156001437-af90bb425750'],
  ARRAY['Secluded', 'Fireplace', 'Natural Light', 'Deck', 'Custom Woodwork'], 'available'),

('Beverly Hills Classic', 'beverly-hills-classic', 'Timeless elegance in the most famous zip code in the world.', 18500000, '90210 Sunset Blvd', 'Los Angeles', 'villa', 7, 9, 12000, 34.0736, -118.4004,
  ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9', 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde'],
  ARRAY['Movie Theater', 'Grand Ballroom', 'Library', 'Pool', 'Gated Entry'], 'available'),

('SoHo Artist Loft', 'soho-artist-loft', 'Double-height ceilings and massive windows in Manhattan’s premier cultural district.', 4800000, '12 Greene St', 'New York', 'apartment', 2, 2, 2800, 40.7233, -74.0017,
  ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', 'https://images.unsplash.com/photo-1560184897-ae75f418493e', 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0', 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', 'https://images.unsplash.com/photo-1560185893-a55caf0a52f9'],
  ARRAY['Art Studio', 'Brick Walls', 'Chef Kitchen', 'Natural Light', 'Wine Storage'], 'available'),

-- Adding 15 more to reach 30
('Vista Del Mar', 'vista-del-mar', 'Panoramic ocean views from every room in this cliffside architectural feat.', 14200000, 'Ocean Wy', 'Los Angeles', 'house', 4, 5, 5800, 34.0259, -118.7798,
  ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0'],
  ARRAY['Ocean View', 'Infinity Pool', 'Gym', 'Deck', 'Wine Cellar'], 'available'),

('The Gilded Age Mansion', 'gilded-age-mansion', 'Historical restoration of a 19th-century limestone mansion.', 28000000, 'Upper East Side', 'New York', 'house', 9, 12, 18000, 40.7736, -73.9592,
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811', 'https://images.unsplash.com/photo-1613977257363-707ba9348227', 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6'],
  ARRAY['Historical', 'Ballroom', 'Elevator', 'Private Garden', 'Library'], 'available'),

('Snowfall Chalet', 'snowfall-chalet', 'The ultimate winter escape with direct access to the most exclusive slopes.', 5900000, 'Alpine Pass', 'Aspen', 'house', 4, 4, 4200, 39.1911, -106.8175,
  ARRAY['https://images.unsplash.com/photo-1518780664697-55e3ad937233', 'https://images.unsplash.com/photo-1542718610-a1d656d1884c', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', 'https://images.unsplash.com/photo-1510798831971-661eb04b3739', 'https://images.unsplash.com/photo-1449156001437-af90bb425750'],
  ARRAY['Ski Access', 'Hot Tub', 'Fire Pit', 'Cinema', 'Wine Room'], 'available'),

('Key Biscayne Estate', 'key-biscayne-estate', 'Tropical modernism at its finest on the quiet end of Key Biscayne.', 11500000, 'Harbor Dr', 'Miami', 'villa', 5, 6, 7800, 25.6937, -80.1631,
  ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9', 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde'],
  ARRAY['Waterfront', 'Pool', 'Smart Home', 'Dock', 'Guest Suite'], 'available'),

('Fifth Avenue Duplex', 'fifth-ave-duplex', 'Pre-war grandeur meets contemporary design in this legendary building.', 13800000, 'Fifth Ave', 'New York', 'apartment', 4, 4, 5200, 40.7711, -73.9642,
  ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', 'https://images.unsplash.com/photo-1560184897-ae75f418493e', 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0', 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', 'https://images.unsplash.com/photo-1560185893-a55caf0a52f9'],
  ARRAY['Central Park View', 'Doorman', 'Chef Kitchen', 'Concierge', 'Library'], 'available'),

('Bel Air Crest', 'bel-air-crest', 'A palatial estate with breathtaking views of the city and sea.', 24000000, 'Crest Wy', 'Los Angeles', 'villa', 7, 10, 14000, 34.1000, -118.4500,
  ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0'],
  ARRAY['Infinity Pool', 'Vineyard', 'Cinema', 'Helipad', 'Smart Home'], 'available'),

('Miami Beach Penthouse', 'miami-beach-penthouse', 'Double-height ceilings and a private roof deck in the South of Fifth neighborhood.', 8200000, 'South of Fifth', 'Miami', 'penthouse', 3, 4, 4200, 25.7684, -80.1322,
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811', 'https://images.unsplash.com/photo-1613977257363-707ba9348227', 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6'],
  ARRAY['Private Roof', 'Ocean Front', 'Concierge', 'Wine Cellar', 'Gym'], 'available'),

('The Silver Lining Chalet', 'silver-lining-chalet', 'Modernist architecture in the heart of the mountains.', 4500000, 'Silver Ln', 'Aspen', 'house', 3, 3, 3500, 39.1833, -106.8167,
  ARRAY['https://images.unsplash.com/photo-1518780664697-55e3ad937233', 'https://images.unsplash.com/photo-1542718610-a1d656d1884c', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', 'https://images.unsplash.com/photo-1510798831971-661eb04b3739', 'https://images.unsplash.com/photo-1449156001437-af90bb425750'],
  ARRAY['Panoramic View', 'Fireplace', 'Natural Light', 'Modernist', 'Sauna'], 'available'),

('Gramercy Park Residence', 'gramercy-park-residence', 'Historic elegance with a coveted key to Gramercy Park.', 6800000, 'Gramercy Park', 'New York', 'apartment', 3, 3, 2900, 40.7378, -73.9858,
  ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', 'https://images.unsplash.com/photo-1560184897-ae75f418493e', 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0', 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', 'https://images.unsplash.com/photo-1560185893-a55caf0a52f9'],
  ARRAY['Park Key', 'Classic Design', 'Doorman', 'Library', 'Terrace'], 'available'),

('Beverly Hills Modern', 'beverly-hills-modern-2', 'Newly built architectural masterpiece in the Flats of Beverly Hills.', 19200000, 'Beverly Dr', 'Los Angeles', 'house', 6, 8, 11000, 34.0736, -118.4004,
  ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9', 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde'],
  ARRAY['Smart Home', 'Guest House', 'Infinity Pool', 'Gym', 'Cinema'], 'available'),

('Coconut Grove Sanctuary', 'coconut-grove-sanctuary', 'Tropical architecture surrounded by lush gardens and ancient oaks.', 5200000, 'Bay Shore Dr', 'Miami', 'house', 4, 4, 4500, 25.7285, -80.2384,
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811', 'https://images.unsplash.com/photo-1613977257363-707ba9348227', 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6'],
  ARRAY['Garden', 'Natural Light', 'Pool', 'Deck', 'Modernist'], 'available'),

('The Peak Penthouse', 'the-peak-penthouse', 'High-altitude luxury with unparalleled views of the Rockies.', 3900000, 'Ridge Wy', 'Aspen', 'penthouse', 2, 3, 2800, 39.1911, -106.8175,
  ARRAY['https://images.unsplash.com/photo-1518780664697-55e3ad937233', 'https://images.unsplash.com/photo-1542718610-a1d656d1884c', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', 'https://images.unsplash.com/photo-1510798831971-661eb04b3739', 'https://images.unsplash.com/photo-1449156001437-af90bb425750'],
  ARRAY['Mountain View', 'Private Lift', 'Sauna', 'Smart Home', 'Terrace'], 'available'),

('Upper West Side Classic', 'upper-west-side-classic', 'A perfectly preserved architectural gem overlooking the Museum of Natural History.', 10500000, 'Central Park West', 'New York', 'apartment', 4, 4, 4800, 40.7811, -73.9742,
  ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', 'https://images.unsplash.com/photo-1560184897-ae75f418493e', 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0', 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', 'https://images.unsplash.com/photo-1560185893-a55caf0a52f9'],
  ARRAY['Central Park View', 'Doorman', 'Chef Kitchen', 'Historical', 'High Ceilings'], 'available'),

('Malibu Cove Villa', 'malibu-cover-villa', 'Modern beach living in an ultra-exclusive private cove.', 16500000, 'Broad Beach Rd', 'Los Angeles', 'villa', 4, 4, 5200, 34.0381, -118.6923,
  ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0'],
  ARRAY['Beach Front', 'Private Cove', 'Deck', 'Wine Cellar', 'Smart Home'], 'available'),

('Bal Harbour Penthouse', 'bal-harbour-penthouse', 'The ultimate in luxury shopping and living on the shores of Miami.', 14800000, 'Collins Ave', 'Miami', 'penthouse', 4, 5, 5800, 25.8975, -80.1225,
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811', 'https://images.unsplash.com/photo-1613977257363-707ba9348227', 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6'],
  ARRAY['Ocean View', 'Private Pool', 'Concierge', 'Wine Cellar', 'Gym'], 'available');
