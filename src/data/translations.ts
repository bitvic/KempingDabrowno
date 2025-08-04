export interface Translation {
  // Navigation
  about: string;
  offer: string;
  gallery: string;
  nav_reviews: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  learnMore: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription: string;
  
  // Offer Section
  offerTitle: string;
  waterEquipmentTitle: string;
  waterEquipmentDescription: string;
  attractionsTitle: string;
  attractionsDescription: string;
  landActivitiesTitle: string;
  landActivitiesDescription: string;
  eventsTitle: string;
  eventsDescription: string;
  foodTitle: string;
  foodDescription: string;
  barTitle: string;
  barDescription: string;
  
  // Gallery Section
  galleryTitle: string;
  viewMorePhotos: string;
  
  // Reviews Section
  reviewsTitle: string;
  joinHappyGuests: string;
  bookYourStay: string;
  
  // Contact Section
  contactTitle: string;
  reserveNow: string;
  callNow: string;
  facebook: string;
  phone: string;
  address: string;
  season: string;
  parking: string;
  pets: string;
  monitoring: string;
  seasonInfo: string;
  parkingInfo: string;
  petsInfo: string;
  dailyHours: string;
  mapTitle: string;
  mapDescription: string;
  openInMaps: string;
  
  // Reviews data
  reviews: {
    text: string;
    author: string;
  }[];
}

export const translations: Record<string, Translation> = {
  pl: {
    // Navigation
    about: 'O Nas',
    offer: 'Nasza Oferta',
    gallery: 'Galeria',
    nav_reviews: 'Opinie',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Przeżyj Niezapomniane Chwile na Kemping Dąbrówno',
    heroSubtitle: 'Codziennie palone ognisko, świeże powietrze, atrakcje dla całej rodziny i wyjątkowe wspomnienia nad jeziorem!',
    learnMore: 'Dowiedz Się Więcej',
    
    // About Section
    aboutTitle: 'O Nas',
    aboutDescription: 'Położony nad malowniczym jeziorem w sercu Warmii i Mazur, Kemping Dąbrówno oferuje idealne warunki do wypoczynku blisko natury. Rodzinna atmosfera, komfortowe udogodnienia i codzienne ogniska sprawiają, że każdy pobyt staje się niezapomnianą przygodą.',
    
    // Offer Section
    offerTitle: 'Nasza Oferta',
    waterEquipmentTitle: 'Sprzęt Wodny',
    waterEquipmentDescription: 'Kajaki, SUP-y, rowerki wodne dla wszystkich gości. Odkryj piękno jeziora z perspektywy wody.',
    attractionsTitle: 'Atrakcje dla Dzieci',
    attractionsDescription: 'Trampoliny, dmuchańce, huśtawki, plac zabaw, plaża. Zabawa dla całej rodziny.',
    landActivitiesTitle: 'Aktywności na Lądzie',
    landActivitiesDescription: 'Gokarty, leżaki z widokiem na jezioro. Relaks i aktywność w jednym miejscu.',
    eventsTitle: 'Wydarzenia i Rozrywka',
    eventsDescription: 'DJ-e, muzyka na żywo, codzienne wspólne ogniska. Niezapomniane wieczory przy ogniu.',
    foodTitle: 'Pyszne Jedzenie',
    foodDescription: 'Wędzona ryba, szarlotka, zupy, kebab, frytki, zapiekanki. Domowe smaki nad jeziorem.',
    barTitle: 'Bar i Napoje',
    barDescription: 'Napoje zimne i gorące, drinki, lokalne piwa, kawa. Orzeźwienie w każdej chwili.',
    
    // Gallery Section
    galleryTitle: 'Galeria Zdjęć',
    viewMorePhotos: 'Zobacz Więcej Zdjęć',
    
    // Reviews Section
    reviewsTitle: 'Opinie Gości',
    joinHappyGuests: 'Dołącz do zadowolonych gości!',
    bookYourStay: 'Zarezerwuj Pobyt',
    
    // Contact Section
    contactTitle: 'Kontakt i Rezerwacja',
    reserveNow: 'Zarezerwuj swój pobyt już dziś!',
    callNow: 'Zadzwoń Teraz',
    facebook: 'Znajdź nas na Facebooku',
    phone: 'Telefon',
    address: 'Adres',
    season: 'Sezon',
    parking: 'Parking',
    pets: 'Zwierzęta',
    monitoring: 'Monitoring',
    seasonInfo: 'Maj - Wrzesień',
    parkingInfo: 'Dostępny dodatkowo płatny',
    petsInfo: 'Mile widziane',
    dailyHours: 'Codziennie 8:00 - 22:00',
    mapTitle: 'Mapa Dojazdu',
    mapDescription: 'Kemping znajduje się 2 km od centrum Dąbrówna, przy drodze wojewódzkiej nr 527',
    openInMaps: 'Otwórz w Google Maps',
    
    // Reviews data
    reviews: [
      {
        text: 'Świetne miejsce 😍 naprawdę warto odwiedzić. Widać, że właściciele włożyli w to dużo serca 🙂 Czysto, kulturalnie, dużo rozrywek na terenie kempingu. Atmosfera bardzo miła i cena pobytu bardzo przystępna 😉 Naprawdę z czystym sumieniem mogę polecić 😉',
        author: 'Daria B'
      },
      {
        text: 'Przyjechałam ze znajomymi na parę dni pod namiot, świetne miejsce do odpoczynku, leżaki do dyspozycji. Czyste zaplecze sanitarne i miła obsługa. Idealne na relaks blisko natury. Już planujemy ponowny przyjazd za rok 😌😌',
        author: 'Ola E'
      },
      {
        text: 'Przecudne miejsce dla rodzin, par, singli, paczek przyjaciół. Jak Wam wygodnie tak zaglądajcie, bo... WARTO!! Wszędzie sympatyczni ludzie – zaczynając od właścicieli!! Baaaardzo polecam! :D',
        author: 'Beata P'
      },
      {
        text: 'Bardzo fajne miejsce, można się zrelaksować, zjeść, wypić piwo lub coś mocniejszego. Pyszne rybki wędzone na miejscu, muzyka dla każdego, organizowane są różnego rodzaju warsztaty. Bardzo sympatyczni właściciele. Wiem, że tam wrócę. Polecam !!!',
        author: 'Katarzyna K'
      }
    ]
  },
  en: {
    // Navigation
    about: 'About Us',
    offer: 'Our Offer',
    gallery: 'Gallery',
    nav_reviews: 'Reviews',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Experience Unforgettable Moments at Kemping Dąbrówno',
    heroSubtitle: 'Daily bonfires, fresh air, family attractions and unique memories by the lake!',
    learnMore: 'Learn More',
    
    // About Section
    aboutTitle: 'About Us',
    aboutDescription: 'Located on a picturesque lake in the heart of Warmia and Masuria, Kemping Dąbrówno offers perfect conditions for relaxation close to nature. Family atmosphere, comfortable amenities and daily bonfires make every stay an unforgettable adventure.',
    
    // Offer Section
    offerTitle: 'Our Offer',
    waterEquipmentTitle: 'Water Equipment',
    waterEquipmentDescription: 'Kayaks, SUPs, water bikes for all guests. Discover the beauty of the lake from the water.',
    attractionsTitle: 'Kids Attractions',
    attractionsDescription: 'Trampolines, inflatables, swings, playground, beach. Fun for the whole family.',
    landActivitiesTitle: 'Land Activities',
    landActivitiesDescription: 'Go-karts, loungers with lake view. Relaxation and activity in one place.',
    eventsTitle: 'Events & Entertainment',
    eventsDescription: 'DJs, live music, daily communal bonfires. Unforgettable evenings by the fire.',
    foodTitle: 'Delicious Food',
    foodDescription: 'Smoked fish, apple pie, soups, kebab, fries, casseroles. Homemade flavors by the lake.',
    barTitle: 'Bar & Drinks',
    barDescription: 'Cold and hot drinks, cocktails, local beers, coffee. Refreshment at any time.',
    
    // Gallery Section
    galleryTitle: 'Photo Gallery',
    viewMorePhotos: 'View More Photos',
    
    // Reviews Section
    reviewsTitle: 'Guest Reviews',
    joinHappyGuests: 'Join our happy guests!',
    bookYourStay: 'Book Your Stay',
    
    // Contact Section
    contactTitle: 'Contact & Booking',
    reserveNow: 'Book your stay today!',
    callNow: 'Call Now',
    facebook: 'Find us on Facebook',
    phone: 'Phone',
    address: 'Address',
    season: 'Season',
    parking: 'Parking',
    pets: 'Pets',
    monitoring: 'Monitoring',
    seasonInfo: 'May - September',
    parkingInfo: 'Available for an additional fee',
    petsInfo: 'Welcome',
    dailyHours: 'Daily 8:00 AM - 10:00 PM',
    mapTitle: 'Directions',
    mapDescription: 'The campground is located 2 km from Dąbrówno center, on provincial road No. 527',
    openInMaps: 'Open in Google Maps',
    
    // Reviews data
    reviews: [
      {
        text: 'Best campground in the area! Daily bonfires, great food and lots of attractions. Kids loved the trampolines and beach. We will definitely come back!',
        author: 'Janusz & Katarzyna with family'
      },
      {
        text: 'Beautiful lakeside location with amazing atmosphere. Go-karts are a hit, and evening bonfires with live music are something special. We recommend to everyone!',
        author: 'The Kowalski Family'
      },
      {
        text: 'Kemping Dąbrówno is paradise for nature lovers and active recreation. Clean lake, great kayaks and the best smoked fish in the area!',
        author: 'Anna & Michał'
      },
      {
        text: 'Wonderful place for family vacation. Kids had lots of fun, and we could relax on the loungers. The bar serves excellent drinks!',
        author: 'The Nowak Family'
      }
    ]
  },
  de: {
    // Navigation
    about: 'Über Uns',
    offer: 'Unser Angebot',
    gallery: 'Galerie',
    nav_reviews: 'Bewertungen',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Erleben Sie unvergessliche Momente im Kemping Dąbrówno',
    heroSubtitle: 'Tägliche Lagerfeuer, frische Luft, Familienattraktionen und einzigartige Erinnerungen am See!',
    learnMore: 'Mehr Erfahren',
    
    // About Section
    aboutTitle: 'Über Uns',
    aboutDescription: 'Am malerischen See im Herzen von Warmia und Masuria gelegen, bietet Kemping Dąbrówno perfekte Bedingungen für Entspannung in der Nähe der Natur. Familienatmosphäre, komfortable Annehmlichkeiten und tägliche Lagerfeuer machen jeden Aufenthalt zu einem unvergesslichen Abenteuer.',
    
    // Offer Section
    offerTitle: 'Unser Angebot',
    waterEquipmentTitle: 'Wassersport',
    waterEquipmentDescription: 'Kajaks, SUPs, Wasserfahrräder für alle Gäste. Entdecken Sie die Schönheit des Sees vom Wasser aus.',
    attractionsTitle: 'Kinderattraktionen',
    attractionsDescription: 'Trampoline, Hüpfburgen, Schaukeln, Spielplatz, Strand. Spaß für die ganze Familie.',
    landActivitiesTitle: 'Landaktivitäten',
    landActivitiesDescription: 'Go-Karts, Liegestühle mit Seeblick. Entspannung und Aktivität an einem Ort.',
    eventsTitle: 'Events & Unterhaltung',
    eventsDescription: 'DJs, Live-Musik, tägliche gemeinsame Lagerfeuer. Unvergessliche Abende am Feuer.',
    foodTitle: 'Leckeres Essen',
    foodDescription: 'Geräucherter Fisch, Apfelkuchen, Suppen, Kebab, Pommes, Aufläufe. Hausgemachte Aromen am See.',
    barTitle: 'Bar & Getränke',
    barDescription: 'Kalte und warme Getränke, Cocktails, lokale Biere, Kaffee. Erfrischung zu jeder Zeit.',
    
    // Gallery Section
    galleryTitle: 'Fotogalerie',
    viewMorePhotos: 'Mehr Fotos Ansehen',
    
    // Reviews Section
    reviewsTitle: 'Gästebewertungen',
    joinHappyGuests: 'Werden Sie Teil unserer zufriedenen Gäste!',
    bookYourStay: 'Jetzt Buchen',
    
    // Contact Section
    contactTitle: 'Kontakt & Buchung',
    reserveNow: 'Buchen Sie Ihren Aufenthalt noch heute!',
    callNow: 'Jetzt Anrufen',
    facebook: 'Finden Sie uns auf Facebook',
    phone: 'Telefon',
    address: 'Adresse',
    season: 'Saison',
    parking: 'Parkplatz',
    pets: 'Haustiere',
    monitoring: 'Überwachung',
    seasonInfo: 'Mai - September',
    parkingInfo: 'Gegen Aufpreis verfügbar',
    petsInfo: 'Willkommen',
    dailyHours: 'Täglich 8:00 - 22:00 Uhr',
    mapTitle: 'Anfahrt',
    mapDescription: 'Der Campingplatz liegt 2 km vom Zentrum Dąbrówno entfernt, an der Landesstraße Nr. 527',
    openInMaps: 'In Google Maps Öffnen',
    
    // Reviews data
    reviews: [
      {
        text: 'Bester Campingplatz in der Gegend! Tägliche Lagerfeuer, tolles Essen und viele Attraktionen. Kinder liebten die Trampoline und den Strand. Wir kommen definitiv wieder!',
        author: 'Janusz & Katarzyna mit Familie'
      },
      {
        text: 'Wunderschöne Lage am See mit fantastischer Atmosphäre. Go-Karts sind ein Hit, und abendliche Lagerfeuer mit Live-Musik sind etwas Besonderes. Wir empfehlen es jedem!',
        author: 'Familie Kowalski'
      },
      {
        text: 'Kemping Dąbrówno ist ein Paradies für Naturliebhaber und aktive Erholung. Sauberer See, tolle Kajaks und der beste geräucherte Fisch in der Gegend!',
        author: 'Anna & Michał'
      },
      {
        text: 'Wunderbarer Ort für Familienurlaub. Kinder hatten viel Spaß, und wir konnten uns auf den Liegestühlen entspannen. Die Bar serviert ausgezeichnete Getränke!',
        author: 'Familie Nowak'
      }
    ]
  }
};
