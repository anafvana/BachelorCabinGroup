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
      "Cabin1 har h??y standard og ligger i 10 minutters gangavstand til sentrum",
    longDescription:
      "Cabin1 er Companys nyeste hytte, og den er bygget/modernisert 2004/2005. Hytta har h??y standard, og best??r av stort kj??kken, stue, 5 soverom (2 med dobbeltseng og 3 med k??yesenger/twinsenger) = 10 sengeplasser totalt, 2 bad, badstue og veranda. Hytta best??r av en opprinnelig gammel t??mmerhytte (som utgj??r stue og kj??kken) og en helt ny del hvor gang, soverom, bad osv. ligger. Hytta ligger i 10 minutters gangavstand til sentrum (ca. like langt fra sentrum som Fanitullhytta), p?? h??yre side av hovedveien n??r du kommer til Hemsedal ??stfra. Bilvei helt fram. Hytta har ikke tr??dl??st nett, men det er god 4G-dekning.",
    pictures: {
      mainPicture: { filename: "Cabin1-Main.JPEG", altText: "Main Cabin1" },
      otherPictures: [
        { filename: "Cabin1-Main.JPEG", altText: "Main Cabin1" },
        { filename: "Cabin1-utsikt1.JPEG", altText: "Cabin1 utsikt" },
        { filename: "Cabin1-utsikt2.JPEG", altText: "Cabin1 utsikt" },
        { filename: "Cabin1-utenfor.JPEG", altText: "Cabin1 utenfor" },
        { filename: "Cabin1-Stue.JPEG", altText: "Cabin1 stue" },
        { filename: "Cabin1-kjokken.JPEG", altText: "Cabin1 kj??kken" },
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
      "N??r du kommer til Hemsedal f??r du Saga Apartments (den gamle Coop-butikken) p?? h??yre hand. Ta av til h??yre rett f??r, inn Tr??imvegen. F??lg Tr??imvegen ca. 200 meter oppover bakken og noen svinger Ta til h??yre inn Tunvegen og f??lg den ca. 100 m. Kj??r inn p?? tunet til g??rden (gult hus og r??d l??ve ??? det er her hytteeier bor!) Ta av til venstre med ??n gang (mellom en liten brun hytte som du f??r p?? venstre h??nd og et stabbur som du f??r p?? h??yre h??nd). F??lg veien ca. 300 m, og du er framme ved hytta. Veien g??r bare til hytta og stopper der. Hytta er den eneste bygningen etter at du har kj??rt gjennom tunet, og hytta er brun med hvite vinduskarmer. Kj??r opp p?? baksiden av hytta, der er det godt med parkeringsplasser og der er hyttas hovedinngang. Adressen er Tunvegen 11.",
    price: 1200,
    cleaningPrice: 1200,
    features: { bad: 2, soverom: 5, sengeplasser: 10, wifi: false },
    other: {
      huskeliste: [
        "Senget??y",
        "H??ndkl??r",
        "Stearinlys",
        "T??rkeh??ndkle",
        "Toalettpapir",
        "T??rkerull",
      ],
      kildesortering:
        "Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken, ta f??rste vei til h??yre etter ?? ha kj??rt over broen i retning Skarsnuten. Containere straks etter krysset. Her har ogs?? R??de Kors Hjelpekorps egen container for panteflasker.",
    },
  },

  {
    _id: "Cabin2",
    active: true,
    shortDescription:
      "Fanitullhytta ligger sentrumsn??rt i Hemsedal og er bygget i 1997. Hytta har god standard.",
    longDescription:
      "Fanitullhytta ligger sentrumsn??rt i Hemsedal og er bygget i 1997. Hytta har god standard og best??r av stue, spisestua med kj??kken, 4 soverom (2 med dobbeltseng, 2 med k??yeseng), 8 sengeplasser totalt, 2 bad, badstue og bod. Det er tr??dl??st nett p?? hytta, info om p??logging finner du i gangen.",
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
        { filename: "Cabin2-kjokken.jpg", altText: "Cabin2 kj??kken" },
        { filename: "Cabin2-gang.jpg", altText: "Cabin2 gang" },
        { filename: "Cabin2-bad.jpg", altText: "Cabin2 bad" },
      ],
    },
    address: "Torsetvegen 494",
    coordinates: { latitude: 60.858358, longitude: 8.562537 },
    directions:
      "Kj??r til Hemsedal sentrum og ta av til venstre etter at du har passert Hemsedal Cafe??? og Cabin2 Hotell (venstre h??nd). Kj??r over broen (du har Apoteket p?? h??yre side i det du skal passere broen) og f??lg Fanitullvegen ca. 800 meter s??r??st ned mot Gol. Hytta ligger p?? vestre side; det er 3 hytter som ligger ca. 15 meter fra hverandre vi har den som ligger n??rmest Gol (den siste du kommer til). Hytta er gulbrun. Det st??r Company p?? vindu ved d??ren. Adresse: Torsetvegen 494",
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
        "Senget??y",
        "H??ndkl??r",
        "Stearinlys",
        "T??rkeh??ndkle",
        "Toalettpapir",
        "T??rkerull",
      ],
      kildesortering:
        "Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken, ta f??rste vei til h??yre etter ?? ha kj??rt over broen i retning Skarsnuten. Containere straks etter krysset. Her har ogs?? R??de Kors Hjelpekorps egen container for panteflasker.",
    },
  },

  {
    _id: "Cabin3",
    active: true,
    shortDescription:
      "Hytta har godt standard og ble bygget i 1991. Alle rom er oppvarmet med gulvvarme og hytta har lader til El-bil.",
    longDescription:
      "Hytta har god standard, bygget i 1991; 4 soverom: 2 m/dobbeltsenger, 1 m/k??yer med bred underk??ye, 1 m/ k??yeseng. Fj??rmadrasser, dyner og puter. Stort ??pent allrom med stue m/natursteinspeis, TV/parabol, langbord med plass til 10, kj??kken i furu m/komfyr, mikro, kj??l/frys, oppvaskmaskin, kaffetrakter mm. Utstyrt til 10 personer. 1 bad m dusj, badstu, og WC. 1 WC-rom. Entr??. God skapplass p?? alle rommene. Innvendig bodrom. Veranda med utgang fra stua. Alle rom er oppvarmet med gulvvarme. Keramiske fliser p?? alle rom, eks. soverom. Innvendig panel, og med villmarkspanel i allrommet. Hytta er oppgradert med ny salong og spisestue. Hytta har n?? tr??dl??st nett (fiber) og lader til El-bil.",
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
    address: "Gr??ndalsvegen 764",
    coordinates: { latitude: 60.931958, longitude: 8.410119 },
    directions:
      "Kj??r gjennom Hemsedal sentrum. Fortsett ca. 5 km etter Riksvei 52 til du kommer til Tuv; her tar du av til h??yre ved skilt ???til Gr??ndalen???. Etter ca. 6 km innover dalen kommer du til stort opplyst skilt med ???Solheisen??, ???Solsiden Hyttegrend??? og ???Solstua???. Fortsett videre innover Gr??ndalen. Golfbanen passeres p?? venstre side av veien, og etter ca. 1,5 km, der gatelysene p?? h??yre side av veien skifter over til venstre side, er det ca. 100 meter til hytta.  Du passerer den siste g??rden p?? h??yre side av veien, med 2 r??de l??ver og et stort 2-etasjers hvitt hus (Arild Gr??ndalen sin g??rd). Her er det ca. 100 meter til avkj??ring p?? h??yre side. Sving av veien opp til h??yre ved den siste gatelysstolpen. Hytta er helt p?? toppen av bakken, ca. 100 meter opp, (det er bilvei helt frem). Adresse: Gr??ndalsvegen 764. P?? vinterstid anbefaler vi ??kjetting p?? boks?? evt. spesiell avfetting for ?? ta vekk alt saltet p?? dekkene, f??r dere kj??rer opp bakken.",
    price: 1200,
    cleaningPrice: 1200,
    features: { bad: 1, soverom: 4, sengeplasser: 8, wifi: true },
    other: {
      huskeliste: [
        "Senget??y",
        "H??ndkl??r",
        "Stearinlys",
        "T??rkeh??ndkle",
        "Toalettpapir",
        "T??rkerull",
      ],
      kildesortering:
        "S??ppelcontainer finnes p?? h??yre siden av veien ca. 1 km etter at du har passert ???Solheisen??? p?? vei til Tuv. Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken; ta f??rste vei til h??yre etter ?? ha kj??rt over broen i retning Skarsnuten. Containere rett f??r bomveien. Her har ogs?? R??de Kors Hjelpekorps egen container for panteflasker.",
    },
  },

  {
    _id: "Cabin4",
    active: true,
    shortDescription:
      "Hytta ligger fint i Gr??ndalen i Hemsedal. Hytta ble modernisert i 2008 og har god standard.",
    longDescription:
      "??Randen?? ligger fint i Gr??ndalen i Hemsedal. Hytta ble modernisert i 2008 og har god standard. Hytta best??r av stue, spisestua med kj??kkenR, 4 soverom (2 med dobbeltseng, 1 med k??yeseng og 1 med familiek??ye) - 8 sengeplasser totalt, 2 bad, badstue og veranda. Hytta har n?? tr??dl??st nett (fiber) og lader til El-bil.",
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
          altText: "Cabin4 kj??kken og stue",
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
    address: "Gr??ndalsvegen 762",
    coordinates: { latitude: 60.931994, longitude: 8.411819 },
    directions:
      "Kj??r gjennom Hemsedal sentrum. Fortsett ca. 5 km etter Riksvei 52 til du kommer til Tuv; her tar du av til h??yre ved skilt ???til Gr??ndalen???. Etter ca. 6 km innover dalen kommer du til stort opplyst skilt med ???Solheisen???, ???Solsiden Hyttegrend??? og ???Solstua???. Fortsett videre innover Gr??ndalen. Golfbanen passeres p?? venstre side av veien, og etter ca. 1,5 km der gatelysene p?? h??yre side av veien skifter over til venstre side, er det ca. 100 meter til hytta. Du passerer den siste g??rden p?? h??yre side av veien, med 2 r??de l??ver og et stort 2-etasjers hvitt hus (Arild Gr??ndalen sin g??rd). Her er det ca. 100 meter til avkj??ring p?? h??yre side. Sving av veien opp til h??yre ved den siste gatelysstolpen. Hytta er den f??rste hytta p?? h??yre side, ca. 40 meter opp bakken, (det er bilvei helt frem og mulig ?? snu bilen foran hytta). Adresse: Gr??ndalsvegen 762",
    price: 1200,
    cleaningPrice: 1200,
    features: { bad: 2, soverom: 4, sengeplasser: 8, wifi: true },
    other: {
      huskeliste: [
        "Senget??y",
        "H??ndkl??r",
        "Stearinlys",
        "T??rkeh??ndkle",
        "Toalettpapir",
        "T??rkerull",
      ],
      kildesortering:
        "S??ppelcontainer finnes p?? h??yre siden av veien ca. 1 km etter at du har passert ???Solheisen??? p?? vei til Tuv. Det er kildesortering ved Hemsedal Skisenter. Sving av fra hovedveien mot bakken; ta f??rste vei til h??yre etter ?? ha kj??rt over broen i retning Skarsnuten. Containere rett f??r bomveien. Her har ogs?? R??de Kors Hjelpekorps egen container for panteflasker.",
    },
  },
]);
