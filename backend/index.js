const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: 'https://country-iohi.onrender.com', // Allow requests from this specific origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));


// Example endpoint for fetching country data
app.get('/api/countries', (req, res) => {
    const countries = [
      {
        "name": {
          "common": "South Georgia",
          "official": "South Georgia and the South Sandwich Islands",
          "nativeName": {
            "eng": {
              "official": "South Georgia and the South Sandwich Islands",
              "common": "South Georgia"
            }
          }
        },
        "tld": [".gs"],
        "cca2": "GS",
        "ccn3": "239",
        "cca3": "SGS",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
          "SHP": {
            "name": "Saint Helena pound",
            "symbol": "£"
          }
        },
        "capital": ["King Edward Point"],
        "region": "Antarctic",
        "languages": {
          "eng": "English"
        },
        "latlng": [-54.5, -37.0],
        "area": 3903.0,
        "population": 30,
        "timezones": ["UTC-02:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/gs.png"
        }
      },
      {
        "name": {
          "common": "Grenada",
          "official": "Grenada",
          "nativeName": {
            "eng": {
              "official": "Grenada",
              "common": "Grenada"
            }
          }
        },
        "tld": [".gd"],
        "cca2": "GD",
        "ccn3": "308",
        "cca3": "GRD",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
          "XCD": {
            "name": "Eastern Caribbean dollar",
            "symbol": "$"
          }
        },
        "capital": ["St. George's"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
          "eng": "English"
        },
        "population": 112519,
        "timezones": ["UTC-04:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/gd.png"
        }
      },
      {
        "name": {
          "common": "Switzerland",
          "official": "Swiss Confederation",
          "nativeName": {
            "fra": {
              "official": "Confédération suisse",
              "common": "Suisse"
            },
            "gsw": {
              "official": "Schweizerische Eidgenossenschaft",
              "common": "Schweiz"
            }
          }
        },
        "tld": [".ch"],
        "cca2": "CH",
        "ccn3": "756",
        "cca3": "CHE",
        "cioc": "SUI",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
          "CHF": {
            "name": "Swiss franc",
            "symbol": "Fr."
          }
        },
        "capital": ["Bern"],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
          "fra": "French",
          "gsw": "Swiss German",
          "ita": "Italian",
          "roh": "Romansh"
        },
        "population": 8654622,
        "timezones": ["UTC+01:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/ch.png"
        }
      },
      {
        "name": {
          "common": "Sierra Leone",
          "official": "Republic of Sierra Leone",
          "nativeName": {
            "eng": {
              "official": "Republic of Sierra Leone",
              "common": "Sierra Leone"
            }
          }
        },
        "tld": [".sl"],
        "cca2": "SL",
        "ccn3": "694",
        "cca3": "SLE",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
          "SLL": {
            "name": "Sierra Leonean leone",
            "symbol": "Le"
          }
        },
        "capital": ["Freetown"],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
          "eng": "English"
        },
        "population": 7976985,
        "timezones": ["UTC"],
        "flags": {
          "png": "https://flagcdn.com/w320/sl.png"
        }
      },
      {
        "name": {
          "common": "Hungary",
          "official": "Hungary",
          "nativeName": {
            "hun": {
              "official": "Magyarország",
              "common": "Magyarország"
            }
          }
        },
        "tld": [".hu"],
        "cca2": "HU",
        "ccn3": "348",
        "cca3": "HUN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
          "HUF": {
            "name": "Hungarian forint",
            "symbol": "Ft"
          }
        },
        "capital": ["Budapest"],
        "region": "Europe",
        "subregion": "Central Europe",
        "languages": {
          "hun": "Hungarian"
        },
        "population": 9749763,
        "timezones": ["UTC+01:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/hu.png"
        }
      },
      {
        "name": {
          "common": "Taiwan",
          "official": "Republic of China (Taiwan)",
          "nativeName": {
            "zho": {
              "official": "中華民國",
              "common": "台灣"
            }
          }
        },
        "tld": [".tw", ".台灣", ".台湾"],
        "cca2": "TW",
        "ccn3": "158",
        "cca3": "TWN",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
          "TWD": {
            "name": "New Taiwan dollar",
            "symbol": "$"
          }
        },
        "capital": ["Taipei"],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
          "zho": "Chinese"
        },
        "population": 23503349,
        "timezones": ["UTC+08:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/tw.png"
        }
      },
      {
        "name": {
          "common": "Wallis and Futuna",
          "official": "Territory of the Wallis and Futuna Islands",
          "nativeName": {
            "fra": {
              "official": "Territoire des îles Wallis et Futuna",
              "common": "Wallis et Futuna"
            }
          }
        },
        "tld": [".wf"],
        "cca2": "WF",
        "ccn3": "876",
        "cca3": "WLF",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
          "XPF": {
            "name": "CFP franc",
            "symbol": "₣"
          }
        },
        "capital": ["Mata-Utu"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
          "fra": "French"
        },
        "population": 11750,
        "timezones": ["UTC+12:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/wf.png"
        }
      },
      {
        "name": {
          "common": "Barbados",
          "official": "Barbados",
          "nativeName": {
            "eng": {
              "official": "Barbados",
              "common": "Barbados"
            }
          }
        },
        "tld": [".bb"],
        "cca2": "BB",
        "ccn3": "052",
        "cca3": "BRB",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
          "BBD": {
            "name": "Barbadian dollar",
            "symbol": "$"
          }
        },
        "capital": ["Bridgetown"],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
          "eng": "English"
        },
        "population": 287371,
        "timezones": ["UTC-04:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/bb.png"
        }
      },
      {
        "name": {
          "common": "Pitcairn Islands",
          "official": "Pitcairn Group of Islands",
          "nativeName": {
            "eng": {
              "official": "Pitcairn Group of Islands",
              "common": "Pitcairn Islands"
            }
          }
        },
        "tld": [".pn"],
        "cca2": "PN",
        "ccn3": "612",
        "cca3": "PCN",
        "independent": false,
        "status": "officially-assigned",
        "unMember": false,
        "currencies": {
          "NZD": {
            "name": "New Zealand dollar",
            "symbol": "$"
          }
        },
        "capital": ["Adamstown"],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
          "eng": "English"
        },
        "population": 56,
        "timezones": ["UTC-08:00"],
        "flags": {
          "png": "https://flagcdn.com/w320/pn.png"
        }
      }
    
  ];
  
    // Respond with country data
    res.status(200).json(countries);
  });

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
