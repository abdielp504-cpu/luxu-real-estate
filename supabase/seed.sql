-- Final Seed file for Luxe Real Estate
-- 30 Luxury Properties with 5+ images each, unique slugs, geolocation, and amenities.
-- Optimized for Supabase SQL Editor compatibility.

-- 1. Limpieza de la tabla
DELETE FROM "public"."properties";

-- 2. Inserción masiva de 30 propiedades
INSERT INTO "public"."properties" (
  "title", "slug", "description", "price", "address", "city", "type", "beds", "baths", "sqft", "latitude", "longitude", "images", "amenities", "status"
) VALUES 
-- 1
('The Zenith Penthouse', 'the-zenith-penthouse', 'Experience the pinnacle of urban living in this triplex penthouse with 360-degree skyline views.', 12500000, '700 Brickell Ave', 'Miami', 'penthouse'::"public"."property_type", 4, 5, 6200, 25.7617, -80.1918, 
  '{"https://images.unsplash.com/photo-1512917774080-9991f1c4c750", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d", "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"}', 
  '{"Private Pool", "Smart Home", "Wine Cellar", "Elevator", "24/7 Concierge"}', 'available'::"public"."property_status"),

-- 2
('Azure Bay Villa', 'azure-bay-villa', 'A Mediterranean-style masterpiece directly on the water with a private dock and guest house.', 8900000, '45 Coral Gables Way', 'Miami', 'villa'::"public"."property_type", 6, 7, 8500, 25.7215, -80.2684, 
  '{"https://images.unsplash.com/photo-1613490493576-7fde63acd811", "https://images.unsplash.com/photo-1613977257363-707ba9348227", "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", "https://images.unsplash.com/photo-1523217582562-09d0def993a6"}', 
  '{"Private Dock", "Home Theater", "Infinity Pool", "Guest House", "Outdoor Kitchen"}', 'available'::"public"."property_status"),

-- 3
('Bel Air Modernist Estate', 'bel-air-modernist', 'Architecture meets luxury in this glass-walled estate overlooking the canyons of Los Angeles.', 15750000, '1200 Stradella Rd', 'Los Angeles', 'mansion'::"public"."property_type", 5, 6, 9200, 34.0837, -118.4467, 
  '{"https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87", "https://images.unsplash.com/photo-1600566752355-35792bedcfea", "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"}', 
  '{"Infinity Pool", "Gym", "Gallery Space", "Smart Lighting", "Solar Panels"}', 'available'::"public"."property_status"),

-- 4
('The Aspen Peak Chalet', 'the-aspen-peak-chalet', 'Ski-in/ski-out luxury chalet featuring reclaimed wood and floor-to-ceiling mountain views.', 6200000, '88 Mountain Top', 'Aspen', 'house'::"public"."property_type", 4, 4, 4800, 39.1911, -106.8175, 
  '{"https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1542718610-a1d656d1884c", "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", "https://images.unsplash.com/photo-1510798831971", "https://images.unsplash.com/photo-1449156001437"}', 
  '{"Ski Room", "Hot Tub", "Stone Fireplace", "Heated Floors", "Sauna"}', 'available'::"public"."property_status"),

-- 5
('Central Park Sanctuary', 'central-park-sanctuary', 'An elegant duplex overlooking Central Park with original 1920s molding and modern upgrades.', 9400000, '15 Central Park West', 'New York', 'apartment'::"public"."property_type", 3, 3, 3500, 40.7694, -73.9812, 
  '{"https://images.unsplash.com/photo-1567496898669-ee935f5f647a", "https://images.unsplash.com/photo-1522708323590-d248b6d0267d", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1493809842364", "https://images.unsplash.com/photo-1484154218962"}', 
  '{"Park View", "Doorman", "Library", "Private Terrace", "Chef Kitchen"}', 'available'::"public"."property_status"),

-- 6
('Hollywood Hills Pavilion', 'hollywood-hills-pavilion', 'A cantilevered marvel offering the most iconic views of the city lights and the Hollywood sign.', 7800000, '2200 Mulholland Dr', 'Los Angeles', 'house'::"public"."property_type", 3, 4, 4100, 34.1289, -118.3517, 
  '{"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09", "https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1416331108676-a22ccb276e35", "https://images.unsplash.com/photo-1513584684374", "https://images.unsplash.com/photo-1518780664697"}', 
  '{"City View", "Glass Walls", "Zero-edge Pool", "Automated Blinds", "Zen Garden"}', 'available'::"public"."property_status"),

-- 7
('Malibu Surf Estate', 'malibu-surf-estate', 'Ultra-private beach estate with 100 feet of ocean frontage and minimalist coastal design.', 22000000, '23400 Pacific Coast Hwy', 'Los Angeles', 'villa'::"public"."property_type", 5, 5, 7200, 34.0381, -118.6923, 
  '{"https://images.unsplash.com/photo-1512917774080-9991f1c4c750", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "https://images.unsplash.com/photo-1600047509807", "https://images.unsplash.com/photo-1600566752355", "https://images.unsplash.com/photo-1600210491892"}', 
  '{"Beach Access", "Surf Rack", "Outdoor Shower", "Deck", "Smart Home"}', 'available'::"public"."property_status"),

-- 8
('Tribeca Industrial Loft', 'tribeca-industrial-loft', 'Authentic loft living with soaring ceilings, exposed brick, and bespoke luxury finishes.', 5400000, '45 Hudson St', 'New York', 'loft'::"public"."property_type", 2, 2, 3100, 40.7183, -74.0077, 
  '{"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", "https://images.unsplash.com/photo-1560184897-ae75f418493e", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0", "https://images.unsplash.com/photo-1560185127-6ed189bf02f4", "https://images.unsplash.com/photo-1560185893-a55caf0a52f9"}', 
  '{"Industrial Style", "High Ceilings", "Key-locked Elevator", "Roof Access", "Custom Lighting"}', 'available'::"public"."property_status"),

-- 9
('Star Island Manor', 'star-island-manor', 'The ultimate in privacy and prestige on Miami’s most exclusive gated island.', 35000000, '10 Star Island Dr', 'Miami', 'mansion'::"public"."property_type", 8, 10, 15000, 25.7772, -80.1503, 
  '{"https://images.unsplash.com/photo-1613490493576-7fde63acd811", "https://images.unsplash.com/photo-1613977257363", "https://images.unsplash.com/photo-1613977257592", "https://images.unsplash.com/photo-1512918728675", "https://images.unsplash.com/photo-1523217582562"}', 
  '{"Island Location", "Dock", "Guest Wing", "Tennis Court", "Wine Cellar"}', 'available'::"public"."property_status"),

-- 10
('The Glass Cube', 'the-glass-cube', 'A transparent architectural statement in the heart of Aspen’s forest.', 4200000, '12 Forest Ln', 'Aspen', 'house'::"public"."property_type", 3, 3, 3200, 39.1833, -106.8167, 
  '{"https://images.unsplash.com/photo-1480074568708", "https://images.unsplash.com/photo-1449844908441", "https://images.unsplash.com/photo-1416331108676", "https://images.unsplash.com/photo-1513584684374", "https://images.unsplash.com/photo-1518780664697"}', 
  '{"Forest Setting", "Minimalist", "Floor Heating", "Smart Home", "Terrace"}', 'available'::"public"."property_status"),

-- 11
('Chelsea Sky Garden', 'chelsea-sky-garden', 'Luxury living with a private 2,000 sqft landscaped roof garden in Manhattan.', 7200000, '200 W 24th St', 'New York', 'penthouse'::"public"."property_type", 3, 4, 3800, 40.7448, -73.9975, 
  '{"https://images.unsplash.com/photo-1512917774080", "https://images.unsplash.com/photo-1600607687920", "https://images.unsplash.com/photo-1600566753190", "https://images.unsplash.com/photo-1600585154340", "https://images.unsplash.com/photo-1600210492486"}', 
  '{"Roof Garden", "Floor-to-Ceiling Windows", "Concierge", "Gym", "Gallery Walls"}', 'available'::"public"."property_status"),

-- 12
('Biscayne Modern', 'biscayne-modern', 'Sleek white architecture meets the blue waters of Biscayne Bay.', 6500000, '300 Bay Dr', 'Miami', 'house'::"public"."property_type", 4, 5, 5200, 25.8482, -80.1291, 
  '{"https://images.unsplash.com/photo-1613490493576", "https://images.unsplash.com/photo-1613977257363", "https://images.unsplash.com/photo-1613977257592", "https://images.unsplash.com/photo-1512918728675", "https://images.unsplash.com/photo-1523217582562"}', 
  '{"Bay Front", "Pool", "Home Automation", "Modernist", "Garage"}', 'available'::"public"."property_status"),

-- 13
('The Forest Hideaway', 'forest-hideaway', 'Hidden among the trees, this wood and glass structure is the ultimate private retreat.', 2800000, '55 Secret Rd', 'Aspen', 'house'::"public"."property_type", 2, 2, 2100, 39.2000, -106.8500, 
  '{"https://images.unsplash.com/photo-1518780664697", "https://images.unsplash.com/photo-1542718610-a1d656d1884c", "https://images.unsplash.com/photo-1476514525535", "https://images.unsplash.com/photo-1510798831971", "https://images.unsplash.com/photo-1449156001437"}', 
  '{"Secluded", "Fireplace", "Natural Light", "Deck", "Custom Woodwork"}', 'available'::"public"."property_status"),

-- 14
('Beverly Hills Classic', 'beverly-hills-classic', 'Timeless elegance in the most famous zip code in the world.', 18500000, '90210 Sunset Blvd', 'Los Angeles', 'mansion'::"public"."property_type", 7, 9, 12000, 34.0736, -118.4004, 
  '{"https://images.unsplash.com/photo-1600585154340", "https://images.unsplash.com/photo-1600596542815", "https://images.unsplash.com/photo-1600210491892", "https://images.unsplash.com/photo-1600566752355", "https://images.unsplash.com/photo-1600047509807"}', 
  '{"Movie Theater", "Grand Ballroom", "Library", "Pool", "Gated Entry"}', 'available'::"public"."property_status"),

-- 15
('SoHo Artist Loft', 'soho-artist-loft', 'Double-height ceilings and massive windows in Manhattan’s premier cultural district.', 4800000, '12 Greene St', 'New York', 'loft'::"public"."property_type", 2, 2, 2800, 40.7233, -74.0017, 
  '{"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", "https://images.unsplash.com/photo-1560184897-ae75f418493e", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0", "https://images.unsplash.com/photo-1560185127-6ed189bf02f4", "https://images.unsplash.com/photo-1560185893-a55caf0a52f9"}', 
  '{"Art Studio", "Brick Walls", "Chef Kitchen", "Natural Light", "Wine Storage"}', 'available'::"public"."property_status"),

-- 16
('Vista Del Mar', 'vista-del-mar', 'Panoramic ocean views from every room in this cliffside architectural feat.', 14200000, 'Ocean Wy', 'Los Angeles', 'house'::"public"."property_type", 4, 5, 5800, 34.0259, -118.7798, 
  '{"https://images.unsplash.com/photo-1512917774080", "https://images.unsplash.com/photo-1600607687920", "https://images.unsplash.com/photo-1600566753190", "https://images.unsplash.com/photo-1600585154340", "https://images.unsplash.com/photo-1600210492486"}', 
  '{"Ocean View", "Infinity Pool", "Gym", "Deck", "Wine Cellar"}', 'available'::"public"."property_status"),

-- 17
('The Gilded Age Mansion', 'gilded-age-mansion', 'Historical restoration of a 19th-century limestone mansion.', 28000000, 'Upper East Side', 'New York', 'mansion'::"public"."property_type", 9, 12, 18000, 40.7736, -73.9592, 
  '{"https://images.unsplash.com/photo-1613490493576", "https://images.unsplash.com/photo-1613977257363", "https://images.unsplash.com/photo-1613977257592", "https://images.unsplash.com/photo-1512918728675", "https://images.unsplash.com/photo-1523217582562"}', 
  '{"Historical", "Ballroom", "Elevator", "Private Garden", "Library"}', 'available'::"public"."property_status"),

-- 18
('Snowfall Chalet', 'snowfall-chalet', 'The ultimate winter escape with direct access to the most exclusive slopes.', 5900000, 'Alpine Pass', 'Aspen', 'house'::"public"."property_type", 4, 4, 4200, 39.1911, -106.8175, 
  '{"https://images.unsplash.com/photo-1518780664697", "https://images.unsplash.com/photo-1542718610-a1d656d1884c", "https://images.unsplash.com/photo-1476514525535", "https://images.unsplash.com/photo-1510798831971", "https://images.unsplash.com/photo-1449156001437"}', 
  '{"Ski Access", "Hot Tub", "Fire Pit", "Cinema", "Wine Room"}', 'available'::"public"."property_status"),

-- 19
('Key Biscayne Estate', 'key-biscayne-estate', 'Tropical modernism at its finest on the quiet end of Key Biscayne.', 11500000, 'Harbor Dr', 'Miami', 'villa'::"public"."property_type", 5, 6, 7800, 25.6937, -80.1631, 
  '{"https://images.unsplash.com/photo-1600585154340", "https://images.unsplash.com/photo-1600596542815", "https://images.unsplash.com/photo-1600210491892", "https://images.unsplash.com/photo-1600566752355", "https://images.unsplash.com/photo-1600047509807"}', 
  '{"Waterfront", "Pool", "Smart Home", "Dock", "Guest Suite"}', 'available'::"public"."property_status"),

-- 20
('Fifth Avenue Duplex', 'fifth-ave-duplex', 'Pre-war grandeur meets contemporary design in this legendary building.', 13800000, 'Fifth Ave', 'New York', 'apartment'::"public"."property_type", 4, 4, 5200, 40.7711, -73.9642, 
  '{"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", "https://images.unsplash.com/photo-1560184897-ae75f418493e", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0", "https://images.unsplash.com/photo-1560185127-6ed189bf02f4", "https://images.unsplash.com/photo-1560185893-a55caf0a52f9"}', 
  '{"Central Park View", "Doorman", "Chef Kitchen", "Concierge", "Library"}', 'available'::"public"."property_status"),

-- 21
('Bel Air Crest', 'bel-air-crest', 'A palatial estate with breathtaking views of the city and sea.', 24000000, 'Crest Wy', 'Los Angeles', 'mansion'::"public"."property_type", 7, 10, 14000, 34.1000, -118.4500, 
  '{"https://images.unsplash.com/photo-1512917774080", "https://images.unsplash.com/photo-1600607687920", "https://images.unsplash.com/photo-1600566753190", "https://images.unsplash.com/photo-1600585154340", "https://images.unsplash.com/photo-1600210492486"}', 
  '{"Infinity Pool", "Vineyard", "Cinema", "Helipad", "Smart Home"}', 'available'::"public"."property_status"),

-- 22
('Miami Beach Penthouse', 'miami-beach-penthouse', 'Double-height ceilings and a private roof deck in Miami.', 8200000, 'South of Fifth', 'Miami', 'penthouse'::"public"."property_type", 3, 4, 4200, 25.7684, -80.1322, 
  '{"https://images.unsplash.com/photo-1613490493576", "https://images.unsplash.com/photo-1613977257363", "https://images.unsplash.com/photo-1613977257592", "https://images.unsplash.com/photo-1512918728675", "https://images.unsplash.com/photo-1523217582562"}', 
  '{"Private Roof", "Ocean Front", "Concierge", "Wine Cellar", "Gym"}', 'available'::"public"."property_status"),

-- 23
('The Silver Lining Chalet', 'silver-lining-chalet', 'Modernist architecture in the heart of the mountains.', 4500000, 'Silver Ln', 'Aspen', 'house'::"public"."property_type", 3, 3, 3500, 39.1833, -106.8167, 
  '{"https://images.unsplash.com/photo-1518780664697", "https://images.unsplash.com/photo-1542718610-a1d656d1884c", "https://images.unsplash.com/photo-1476514525535", "https://images.unsplash.com/photo-1510798831971", "https://images.unsplash.com/photo-1449156001437"}', 
  '{"Panoramic View", "Fireplace", "Natural Light", "Modernist", "Sauna"}', 'available'::"public"."property_status"),

-- 24
('Gramercy Park Residence', 'gramercy-park-residence', 'Historic elegance with a coveted key to Gramercy Park.', 6800000, 'Gramercy Park', 'New York', 'apartment'::"public"."property_type", 3, 3, 2900, 40.7378, -73.9858, 
  '{"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", "https://images.unsplash.com/photo-1560184897-ae75f418493e", "https://images.unsplash.com/photo-1560185007", "https://images.unsplash.com/photo-1560185127", "https://images.unsplash.com/photo-1560185893"}', 
  '{"Park Key", "Classic Design", "Doorman", "Library", "Terrace"}', 'available'::"public"."property_status"),

-- 25
('Beverly Hills Modern', 'beverly-hills-modern-2', 'Newly built architectural masterpiece in the Flats of Beverly Hills.', 19200000, 'Beverly Dr', 'Los Angeles', 'mansion'::"public"."property_type", 6, 8, 11000, 34.0736, -118.4004, 
  '{"https://images.unsplash.com/photo-1600585154340", "https://images.unsplash.com/photo-1600596542815", "https://images.unsplash.com/photo-1600210491892", "https://images.unsplash.com/photo-1600566752355", "https://images.unsplash.com/photo-1600047509807"}', 
  '{"Smart Home", "Guest House", "Infinity Pool", "Gym", "Cinema"}', 'available'::"public"."property_status"),

-- 26
('Coconut Grove Sanctuary', 'coconut-grove-sanctuary', 'Tropical architecture surrounded by lush gardens and ancient oaks.', 5200000, 'Bay Shore Dr', 'Miami', 'house'::"public"."property_type", 4, 4, 4500, 25.7285, -80.2384, 
  '{"https://images.unsplash.com/photo-1613490493576", "https://images.unsplash.com/photo-1613977257363", "https://images.unsplash.com/photo-1613977257592", "https://images.unsplash.com/photo-1512918728675", "https://images.unsplash.com/photo-1523217582562"}', 
  '{"Garden", "Natural Light", "Pool", "Deck", "Modernist", "Privacy"}', 'available'::"public"."property_status"),

-- 27
('The Peak Penthouse', 'the-peak-penthouse', 'High-altitude luxury with unparalleled views of the Rockies.', 3900000, 'Ridge Wy', 'Aspen', 'penthouse'::"public"."property_type", 2, 3, 2800, 39.1911, -106.8175, 
  '{"https://images.unsplash.com/photo-1518780664697", "https://images.unsplash.com/photo-1542718610-a1d656d1884c", "https://images.unsplash.com/photo-1476514525535", "https://images.unsplash.com/photo-1510798831971", "https://images.unsplash.com/photo-1449156001437"}', 
  '{"Mountain View", "Private Lift", "Sauna", "Smart Home", "Terrace"}', 'available'::"public"."property_status"),

-- 28
('Upper West Side Classic', 'upper-west-side-classic', 'A perfectly preserved architectural gem overlooking the Museum of Natural History.', 10500000, 'Central Park West', 'New York', 'apartment'::"public"."property_type", 4, 4, 4800, 40.7811, -73.9742, 
  '{"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", "https://images.unsplash.com/photo-1560184897-ae75f418493e", "https://images.unsplash.com/photo-1560185007", "https://images.unsplash.com/photo-1560185127", "https://images.unsplash.com/photo-1560185893"}', 
  '{"Central Park View", "Doorman", "Chef Kitchen", "Historical", "High Ceilings"}', 'available'::"public"."property_status"),

-- 29
('Malibu Cove Villa', 'malibu-cove-villa', 'Modern beach living in an ultra-exclusive private cove.', 16500000, 'Broad Beach Rd', 'Los Angeles', 'villa'::"public"."property_type", 4, 4, 5200, 34.0381, -118.6923, 
  '{"https://images.unsplash.com/photo-1512917774080", "https://images.unsplash.com/photo-1600607687920", "https://images.unsplash.com/photo-1600566753190", "https://images.unsplash.com/photo-1600585154340", "https://images.unsplash.com/photo-1600210492486"}', 
  '{"Beach Front", "Private Cove", "Deck", "Wine Cellar", "Smart Home"}', 'available'::"public"."property_status"),

-- 30
('Bal Harbour Penthouse', 'bal-harbour-penthouse', 'The ultimate in luxury shopping and living on the shores of Miami.', 14800000, 'Collins Ave', 'Miami', 'penthouse'::"public"."property_type", 4, 5, 5800, 25.8975, -80.1225, 
  '{"https://images.unsplash.com/photo-1613490493576", "https://images.unsplash.com/photo-1613977257363", "https://images.unsplash.com/photo-1613977257592", "https://images.unsplash.com/photo-1512918728675", "https://images.unsplash.com/photo-1523217582562"}', 
  '{"Ocean View", "Private Pool", "Concierge", "Wine Cellar", "Gym"}', 'available'::"public"."property_status");
