use hyttegruppen;

db.faq.drop()
db.cabins.drop()

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
      "Fringilla urna porttitor rhoncus dolor purus non enim.",
    longDescription:
      "Fringilla urna porttitor rhoncus dolor purus non enim. Purus sit amet luctus venenatis. Facilisi cras fermentum odio eu feugiat pretium. A arcu cursus vitae congue mauris rhoncus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Malesuada fames ac turpis egestas integer eget aliquet. Tristique sollicitudin nibh sit amet. Mattis pellentesque id nibh tortor id. ",
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
    address: "Skjerven 11",
    coordinates: { latitude: 59.984503, longitude: 10.752817 },
    directions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Netus et malesuada fames ac turpis egestas. Egestas sed tempus urna et. Arcu ac tortor dignissim convallis aenean et tortor. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Varius morbi enim nunc faucibus a pellentesque. Laoreet sit amet cursus sit amet. Eget egestas purus viverra accumsan in nisl. Quam quisque id diam vel. Felis eget velit aliquet sagittis.",
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
        "Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae.",
    },
  },

  {
    _id: "Cabin2",
    active: true,
    shortDescription:
      "Risus feugiat in ante metus dictum at tempor. Imperdiet nulla malesuada pellentesque elit eget gravida cum.",
    longDescription:
      "Risus feugiat in ante metus dictum at tempor. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Id ornare arcu odio ut sem nulla pharetra diam sit. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Convallis posuere morbi leo urna.",
    pictures: {
      mainPicture: { filename: "Cabin2-utside.jpg", altText: "Main Cabin2" },
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
    address: "Sognsvann 30",
    coordinates: { latitude: 59.974562, longitude: 10.726268 },
    directions:
      "Quam quisque id diam vel quam elementum pulvinar. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Bibendum arcu vitae elementum curabitur vitae nunc. Placerat orci nulla pellentesque dignissim enim sit amet. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Faucibus pulvinar elementum integer enim neque. Maecenas accumsan lacus vel facilisis volutpat.",
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
        "Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Nisl tincidunt eget nullam non nisi est sit amet.",
    },
  },

  {
    _id: "Cabin3",
    active: true,
    shortDescription:
      "Mauris vitae ultricies leo integer malesuada nunc vel risus. Eget arcu dictum varius duis at consectetur.",
    longDescription:
      "Mauris vitae ultricies leo integer malesuada nunc vel risus. Eget arcu dictum varius duis at consectetur. Sit amet venenatis urna cursus eget nunc scelerisque. Ornare lectus sit amet est placerat in egestas erat. Dolor magna eget est lorem ipsum dolor. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Amet consectetur adipiscing elit duis tristique. Etiam tempor orci eu lobortis elementum nibh. Mattis pellentesque id nibh tortor id aliquet. Nulla facilisi nullam vehicula ipsum a. Leo in vitae turpis massa sed elementum tempus egestas sed.",
    pictures: {
      mainPicture: { filename: "Cabin3-utsikt-vinter.jpg", altText: "Cabin3 utsikt vinter" },
      otherPictures: [
        { filename: "Cabin3-utsikt-vinter.jpg", altText: "Cabin3 utsikt vinter" },
        { filename: "Cabin3-utsikt-sommer.jpg", altText: "Kanusen utsikt sommer" },
        { filename: "Cabin3-stue.jpg", altText: "Cabin3 stue" },
        { filename: "Cabin3-spisestue.jpg", altText: "Cabin3 spisestue" },
        { filename: "Cabin3-do.jpg", altText: "Cabin3 do" },
        { filename: "Cabin3-badstue.jpg", altText: "Cabin3 badstue" },
        { filename: "Cabin3-kjokken-stue.jpg", altText: "Kanusen kjokken/stue" },
        { filename: "Cabin3-kjokken.jpg", altText: "Kanusen kjokken" },
        { filename: "Cabin3-soverom-1.jpg", altText: "Cabin3 soverom 1" },
        { filename: "Cabin3-soverom-2.jpg", altText: "Cabin3 soverom 2" },
        { filename: "Cabin3-soverom-3.jpg", altText: "Cabin3 soverom 3" },        
        { filename: "Cabin3-soverom-4.jpg", altText: "Cabin3 soverom 4" },
        { filename: "Cabin3-soverom-5.jpg", altText: "Cabin3 soverom 5" },
      ],
    },
    address: "Svartkulp 43",
    coordinates: { latitude: 59.9750749, longitude: 10.7294093 },
    directions:
      "Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Ut sem viverra aliquet eget sit. Fringilla ut morbi tincidunt augue interdum velit euismod in. Neque laoreet suspendisse interdum consectetur libero id. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Sem viverra aliquet eget sit amet tellus cras adipiscing enim.",
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
        "Elit scelerisque mauris pellentesque pulvinar pellentesque. Id faucibus nisl tincidunt eget nullam non nisi. Pellentesque habitant morbi tristique senectus et. Vitae congue eu consequat ac felis donec.",
    },
  },

  {
    _id: "Cabin4",
    active: true,
    shortDescription:
      "Pretium vulputate sapien nec sagittis aliquam.",
    longDescription:
      "Pretium vulputate sapien nec sagittis aliquam. Accumsan tortor posuere ac ut consequat semper viverra nam libero. A diam maecenas sed enim ut sem. Habitant morbi tristique senectus et netus et malesuada. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. ",
    pictures: {
      mainPicture: { filename: "cabin4-siden.jpg", altText: "Cabin4 main" },
      otherPictures: [
        { filename: "cabin4-siden.jpg", altText: "Cabin4 main" },
        { filename: "cabin4-utenfra.jpg", altText: "Cabin4 utenfra" },
        { filename: "cabin4-kjokken-og-stue.jpg", altText: "Cabin4 kjøkken og stue" },
        { filename: "cabin4-peis.jpg", altText: "Cabin4 peis" },
        { filename: "cabin4-parkering.jpg", altText: "Cabin4 parkering" },
      ],
    },
    address: "Maridalsveien 476",
    coordinates: { latitude: 59.9875969, longitude: 10.7505639 },
    directions:
      "A arcu cursus vitae congue mauris rhoncus aenean. Elementum curabitur vitae nunc sed velit dignissim sodales. Egestas erat imperdiet sed euismod nisi porta lorem mollis. In vitae turpis massa sed elementum tempus egestas. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Orci nulla pellentesque dignissim enim sit amet. Tortor pretium viverra suspendisse potenti nullam. Feugiat pretium nibh ipsum consequat nisl vel. Massa sed elementum tempus egestas sed. Congue quisque egestas diam in. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Tellus orci ac auctor augue mauris augue neque. Ut eu sem integer vitae justo eget magna. A diam maecenas sed enim ut.",
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
        "Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Elit eget gravida cum sociis natoque penatibus et magnis dis. Amet consectetur adipiscing elit duis. Et pharetra pharetra massa massa ultricies.",
    },
  },
]);