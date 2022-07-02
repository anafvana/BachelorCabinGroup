//run mongosh nosql-windows-cabins.js from the setup and you are good to go :)

db = connect("mongodb://localhost/hyttegruppen");
db.dropDatabase();

db = connect("mongodb://localhost/hyttegruppen");

db.createCollection("cabins", {
  validator: {
    $jsonSchema: {
      title: "cabin",
      bsonType: "object",
      required: [
        "_id",
        "active",
        "shortDescription",
        "longDescription",
        "pictures",
        "address",
        "coordinates",
        "directions",
        "price",
        "cleaningPrice",
        "features",
      ],
      properties: {
        _id: { bsonType: "string" },
        active: { bsonType: "bool" },
        shortDescription: { bsonType: "string" },
        longDescription: { bsonType: "string" },
        pictures: {
          bsonType: "object",
          required: ["otherPictures"],
          properties: {
            mainPicture: {
              bsonType: "object",
            },
            otherPictures: {
              bsonType: "array",
            },
          },
          additionalProperties: false,
        },
        address: { bsonType: "string" },
        coordinates: {
          bsonType: "object",
          required: ["latitude", "longitude"],
          properties: {
            latitude: { bsonType: "number" },
            longitude: { bsonType: "number" },
          },
          additionalProperties: false,
        },
        directions: { bsonType: "string" },
        price: {
          bsonType: "number",
          minimum: 0,
        },
        cleaningPrice: {
          bsonType: "number",
          minimum: 0,
        },
        features: {
          bsonType: "object",
          required: ["bad", "soverom", "sengeplasser", "wifi"],
          properties: {
            bad: {
              bsonType: "number",
              minimum: 0,
            },
            sengeplasser: {
              bsonType: "number",
              minimum: 0,
            },
            soverom: {
              bsonType: "number",
              minimum: 0,
            },
            wifi: {
              bsonType: "bool",
            },
            other: {
              bsonType: "object",
            },
          },
          additionalProperties: false,
        },
        other: { bsonType: "object" },
      },
      additionalProperties: false,
    },
  },
});

db.cabins.insertMany([
  {
    _id: "Cabin1",
    active: true,
    shortDescription:
      "Cabin1 har høy standard og ligger i 10 minutters gangavstand til sentrum",
    longDescription:
      "Cabin1 er Companys nyeste hytte, og den er bygget/modernisert 2004/2005. Hytta har høy standard, og består av stort kjøkken, stue, 5 soverom (2 med dobbeltseng og 3 med køyesenger/twinsenger) = 10 sengeplasser totalt, 2 bad, badstue og veranda. Hytta består av en opprinnelig gammel tømmerhytte (som utgjør stue og kjøkken) og en helt ny del hvor gang, soverom, bad osv. ligger. Hytta ligger i 10 minutters gangavstand til sentrum (ca. like langt fra sentrum som Fanitullhytta), på høyre side av hovedveien når du kommer til Hemsedal østfra. Bilvei helt fram. Hytta har ikke trådløst nett, men det er god 4G-dekning.",
    pictures: {
      mainPicture: { filename: "Cabin1-Main.JPEG", altText: "Main Cabin1" },
      otherPictures: [
        { filename: "Cabin1-Main.JPEG", altText: "Main Cabin1" },
        { filename: "Cabin1-utsikt1.JPEG", altText: "Cabin1 utsikt" },
        { filename: "Cabin1-utsikt2.JPEG", altText: "Cabin1 utsikt" },
        { filename: "Cabin1-utenfor.JPEG", altText: "Cabin1 utenfor" },
        { filename: "Cabin1-Stue.JPEG", altText: "Cabin1 stue" },
        { filename: "Cabin1-kjokken.JPEG", altText: "Cabin1 kjøkken" },
        {
          filename: "Cabin1-dobbeltseng.JPEG",
          altText: "Cabin1 dobbeltseng",
        },
        { filename: "Cabin1-soverom.JPEG", altText: "Cabin1 soverom" },
        { filename: "Cabin1-gang.JPEG", altText: "Cabin1 gang" },
      ],
    },
    address: "Tunvegen 11",
    coordinates: { latitude: 60.86467, longitude: 8.563759 },
    directions:
      "Når du kommer til Hemsedal får du Saga Apartments (den gamle Coop-butikken) på høyre hand. Ta av til høyre rett før, inn Trøimvegen. Følg Trøimvegen ca. 200 meter oppover bakken og noen svinger Ta til høyre inn Tunvegen og følg den ca. 100 m. Kjør inn på tunet til gården (gult hus og rød låve – det er her hytteeier bor!) Ta av til venstre med én gang (mellom en liten brun hytte som du får på venstre hånd og et stabbur som du får på høyre hånd). Følg veien ca. 300 m, og du er framme ved hytta. Veien går bare til hytta og stopper der. Hytta er den eneste bygningen etter at du har kjørt gjennom tunet, og hytta er brun med hvite vinduskarmer. Kjør opp på baksiden av hytta, der er det godt med parkeringsplasser og der er hyttas hovedinngang. Adressen er Tunvegen 11.",
    price: 1200,
    cleaningPrice: 1200,
    features: { bad: 2, soverom: 5, sengeplasser: 10, wifi: false },
    other: {
      huskeliste: [
        "Sengetøy",
        "Håndklær",
        "Stearinlys",
        "Tørkehåndkle",
        "Toalettpapir",
        "Tørkerull",
      ],
      kildesortering:
        "Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken, ta første vei til høyre etter å ha kjørt over broen i retning Skarsnuten. Containere straks etter krysset. Her har også Røde Kors Hjelpekorps egen container for panteflasker.",
    },
  },

  {
    _id: "Cabin2",
    active: true,
    shortDescription:
      "Fanitullhytta ligger sentrumsnært i Hemsedal og er bygget i 1997. Hytta har god standard.",
    longDescription:
      "Fanitullhytta ligger sentrumsnært i Hemsedal og er bygget i 1997. Hytta har god standard og består av stue, spisestua med kjøkken, 4 soverom (2 med dobbeltseng, 2 med køyeseng), 8 sengeplasser totalt, 2 bad, badstue og bod. Det er trådløst nett på hytta, info om pålogging finner du i gangen.",
    pictures: {
      mainPicture: {
        filename: "Cabin2-utside.jpg",
        altText: "Main Cabin2",
      },
      otherPictures: [
        { filename: "Cabin2-utside.jpg", altText: "Main Cabin2" },
        { filename: "Cabin2-utside2.jpg", altText: "Cabin2 utside" },
        { filename: "Cabin2-stue.jpg", altText: "Cabin2 stue" },
        { filename: "Cabin2-soverom.jpg", altText: "Cabin2 soverom" },
        { filename: "Cabin2-kjokken.jpg", altText: "Cabin2 kjøkken" },
        { filename: "Cabin2-gang.jpg", altText: "Cabin2 gang" },
        { filename: "Cabin2-bad.jpg", altText: "Cabin2 bad" },
      ],
    },
    address: "Torsetvegen 494",
    coordinates: { latitude: 60.858358, longitude: 8.562537 },
    directions:
      "Kjør til Hemsedal sentrum og ta av til venstre etter at du har passert Hemsedal Cafe’ og Cabin2 Hotell (venstre hånd). Kjør over broen (du har Apoteket på høyre side i det du skal passere broen) og følg Fanitullvegen ca. 800 meter sørøst ned mot Gol. Hytta ligger på vestre side; det er 3 hytter som ligger ca. 15 meter fra hverandre vi har den som ligger nærmest Gol (den siste du kommer til). Hytta er gulbrun. Det står Company på vindu ved døren. Adresse: Torsetvegen 494",
    price: 1200,
    cleaningPrice: 1200,
    features: {
      bad: 2,
      soverom: 4,
      sengeplasser: 8,
      wifi: true,
      other: {
        naturpeis: true,
      },
    },
    other: {
      huskeliste: [
        "Sengetøy",
        "Håndklær",
        "Stearinlys",
        "Tørkehåndkle",
        "Toalettpapir",
        "Tørkerull",
      ],
      kildesortering:
        "Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken, ta første vei til høyre etter å ha kjørt over broen i retning Skarsnuten. Containere straks etter krysset. Her har også Røde Kors Hjelpekorps egen container for panteflasker.",
    },
  },

  {
    _id: "Cabin3",
    active: true,
    shortDescription:
      "Hytta har godt standard og ble bygget i 1991. Alle rom er oppvarmet med gulvvarme og hytta har lader til El-bil.",
    longDescription:
      "Hytta har god standard, bygget i 1991; 4 soverom: 2 m/dobbeltsenger, 1 m/køyer med bred underkøye, 1 m/ køyeseng. Fjærmadrasser, dyner og puter. Stort åpent allrom med stue m/natursteinspeis, TV/parabol, langbord med plass til 10, kjøkken i furu m/komfyr, mikro, kjøl/frys, oppvaskmaskin, kaffetrakter mm. Utstyrt til 10 personer. 1 bad m dusj, badstu, og WC. 1 WC-rom. Entré. God skapplass på alle rommene. Innvendig bodrom. Veranda med utgang fra stua. Alle rom er oppvarmet med gulvvarme. Keramiske fliser på alle rom, eks. soverom. Innvendig panel, og med villmarkspanel i allrommet. Hytta er oppgradert med ny salong og spisestue. Hytta har nå trådløst nett (fiber) og lader til El-bil.",
    pictures: {
      mainPicture: {
        filename: "Cabin3-utsikt-vinter.jpg",
        altText: "Cabin3 utsikt vinter",
      },
      otherPictures: [
        {
          filename: "Cabin3-utsikt-vinter.jpg",
          altText: "Cabin3 utsikt vinter",
        },
        {
          filename: "Cabin3-utsikt-sommer.jpg",
          altText: "Kanusen utsikt sommer",
        },
        { filename: "Cabin3-stue.jpg", altText: "Cabin3 stue" },
        { filename: "Cabin3-spisestue.jpg", altText: "Cabin3 spisestue" },
        { filename: "Cabin3-do.jpg", altText: "Cabin3 do" },
        { filename: "Cabin3-badstue.jpg", altText: "Cabin3 badstue" },
        {
          filename: "Cabin3-kjokken-stue.jpg",
          altText: "Kanusen kjokken/stue",
        },
        { filename: "Cabin3-kjokken.jpg", altText: "Kanusen kjokken" },
        { filename: "Cabin3-soverom-1.jpg", altText: "Cabin3 soverom 1" },
        { filename: "Cabin3-soverom-2.jpg", altText: "Cabin3 soverom 2" },
        { filename: "Cabin3-soverom-3.jpg", altText: "Cabin3 soverom 3" },
        { filename: "Cabin3-soverom-4.jpg", altText: "Cabin3 soverom 4" },
        { filename: "Cabin3-soverom-5.jpg", altText: "Cabin3 soverom 5" },
      ],
    },
    address: "Grøndalsvegen 764",
    coordinates: { latitude: 60.931958, longitude: 8.410119 },
    directions:
      "Kjør gjennom Hemsedal sentrum. Fortsett ca. 5 km etter Riksvei 52 til du kommer til Tuv; her tar du av til høyre ved skilt “til Grøndalen”. Etter ca. 6 km innover dalen kommer du til stort opplyst skilt med “Solheisen», ”Solsiden Hyttegrend” og ”Solstua”. Fortsett videre innover Grøndalen. Golfbanen passeres på venstre side av veien, og etter ca. 1,5 km, der gatelysene på høyre side av veien skifter over til venstre side, er det ca. 100 meter til hytta.  Du passerer den siste gården på høyre side av veien, med 2 røde låver og et stort 2-etasjers hvitt hus (Arild Grøndalen sin gård). Her er det ca. 100 meter til avkjøring på høyre side. Sving av veien opp til høyre ved den siste gatelysstolpen. Hytta er helt på toppen av bakken, ca. 100 meter opp, (det er bilvei helt frem). Adresse: Grøndalsvegen 764. På vinterstid anbefaler vi «kjetting på boks» evt. spesiell avfetting for å ta vekk alt saltet på dekkene, før dere kjører opp bakken.",
    price: 1200,
    cleaningPrice: 1200,
    features: { bad: 1, soverom: 4, sengeplasser: 8, wifi: true },
    other: {
      huskeliste: [
        "Sengetøy",
        "Håndklær",
        "Stearinlys",
        "Tørkehåndkle",
        "Toalettpapir",
        "Tørkerull",
      ],
      kildesortering:
        "Søppelcontainer finnes på høyre siden av veien ca. 1 km etter at du har passert “Solheisen” på vei til Tuv. Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken; ta første vei til høyre etter å ha kjørt over broen i retning Skarsnuten. Containere rett før bomveien. Her har også Røde Kors Hjelpekorps egen container for panteflasker.",
    },
  },

  {
    _id: "Cabin4",
    active: true,
    shortDescription:
      "Hytta ligger fint i Grøndalen i Hemsedal. Hytta ble modernisert i 2008 og har god standard.",
    longDescription:
      "«Randen» ligger fint i Grøndalen i Hemsedal. Hytta ble modernisert i 2008 og har god standard. Hytta består av stue, spisestua med kjøkkenR, 4 soverom (2 med dobbeltseng, 1 med køyeseng og 1 med familiekøye) - 8 sengeplasser totalt, 2 bad, badstue og veranda. Hytta har nå trådløst nett (fiber) og lader til El-bil.",
    pictures: {
      mainPicture: {
        filename: "cabin4-siden.jpg",
        altText: "Cabin4 main",
      },
      otherPictures: [
        {
          filename: "cabin4-siden.jpg",
          altText: "Cabin4 main",
        },
        {
          filename: "cabin4-utenfra.jpg",
          altText: "Cabin4 utenfra",
        },
        {
          filename: "cabin4-kjokken-og-stue.jpg",
          altText: "Cabin4 kjøkken og stue",
        },
        {
          filename: "cabin4-peis.jpg",
          altText: "Cabin4 peis",
        },
        {
          filename: "cabin4-parkering.jpg",
          altText: "Cabin4 parkering",
        },
      ],
    },
    address: "Grøndalsvegen 762",
    coordinates: { latitude: 60.931994, longitude: 8.411819 },
    directions:
      "Kjør gjennom Hemsedal sentrum. Fortsett ca. 5 km etter Riksvei 52 til du kommer til Tuv; her tar du av til høyre ved skilt “til Grøndalen”. Etter ca. 6 km innover dalen kommer du til stort opplyst skilt med “Solheisen”, ”Solsiden Hyttegrend” og ”Solstua”. Fortsett videre innover Grøndalen. Golfbanen passeres på venstre side av veien, og etter ca. 1,5 km der gatelysene på høyre side av veien skifter over til venstre side, er det ca. 100 meter til hytta. Du passerer den siste gården på høyre side av veien, med 2 røde låver og et stort 2-etasjers hvitt hus (Arild Grøndalen sin gård). Her er det ca. 100 meter til avkjøring på høyre side. Sving av veien opp til høyre ved den siste gatelysstolpen. Hytta er den første hytta på høyre side, ca. 40 meter opp bakken, (det er bilvei helt frem og mulig å snu bilen foran hytta). Adresse: Grøndalsvegen 762",
    price: 1200,
    cleaningPrice: 1200,
    features: { bad: 2, soverom: 4, sengeplasser: 8, wifi: true },
    other: {
      huskeliste: [
        "Sengetøy",
        "Håndklær",
        "Stearinlys",
        "Tørkehåndkle",
        "Toalettpapir",
        "Tørkerull",
      ],
      kildesortering:
        "Søppelcontainer finnes på høyre siden av veien ca. 1 km etter at du har passert “Solheisen” på vei til Tuv. Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken; ta første vei til høyre etter å ha kjørt over broen i retning Skarsnuten. Containere rett før bomveien. Her har også Røde Kors Hjelpekorps egen container for panteflasker.",
    },
  },
]);
