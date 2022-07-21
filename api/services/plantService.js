const plantnetService = require("./plantnetService");
const toxicityService = require("./toxicityService");
const userDAO = require("../dao/user");

class PlantService {
    getAllPlantsToxicity = () =>{
        return toxicityService.getAllPlantsToxicity();
    }
    analyseImage = async (userId, file) => {
        const apiKey = await userDAO.getUserApiKey(userId);
        //const plantNetResponse = await plantnetService.searchPlantnet(file, apiKey);
        const plantNetResponse = {
            "query": {
                "project": "all",
                "images": [
                    "2c8e57ae4c8b2aa35fe91462ea368543"
                ],
                "organs": [
                    "flower"
                ],
                "includeRelatedImages": true
            },
            "language": "fr",
            "preferedReferential": "the-plant-list",
            "bestMatch": "Geum urbanum L.",
            "results": [
                {
                    "score": 0.5859,
                    "species": {
                        "scientificNameWithoutAuthor": "Geum urbanum",
                        "scientificNameAuthorship": "L.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Geum",
                            "scientificNameAuthorship": "",
                            "scientificName": "Geum"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Benoîte commune",
                            "Benoîte urbaine",
                            "Benoîte des villes"
                        ],
                        "scientificName": "Geum urbanum L."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "Loïc Tulasne",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1620495974766,
                                "string": "8 mai 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/6868100dc66c9fbaa5ff2f3a1e4fcac646d78d59",
                                "m": "https://bs.plantnet.org/image/m/6868100dc66c9fbaa5ff2f3a1e4fcac646d78d59",
                                "s": "https://bs.plantnet.org/image/s/6868100dc66c9fbaa5ff2f3a1e4fcac646d78d59"
                            },
                            "citation": "Loïc Tulasne / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Erik Berkhof",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1623256542531,
                                "string": "9 juin 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/d5141b7c0acdb27273bcff8ca216d8034235aa65",
                                "m": "https://bs.plantnet.org/image/m/d5141b7c0acdb27273bcff8ca216d8034235aa65",
                                "s": "https://bs.plantnet.org/image/s/d5141b7c0acdb27273bcff8ca216d8034235aa65"
                            },
                            "citation": "Erik Berkhof / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Radagast The Brown",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1496749029000,
                                "string": "6 juin 2017"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/05a822f33f0a89b71fbc7860ba49c8111113eab9",
                                "m": "https://bs.plantnet.org/image/m/05a822f33f0a89b71fbc7860ba49c8111113eab9",
                                "s": "https://bs.plantnet.org/image/s/05a822f33f0a89b71fbc7860ba49c8111113eab9"
                            },
                            "citation": "Radagast The Brown / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "claire boissieres",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1620304403322,
                                "string": "6 mai 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/94748ef0be2d8c5bfd9ef95b381545e2f4427d29",
                                "m": "https://bs.plantnet.org/image/m/94748ef0be2d8c5bfd9ef95b381545e2f4427d29",
                                "s": "https://bs.plantnet.org/image/s/94748ef0be2d8c5bfd9ef95b381545e2f4427d29"
                            },
                            "citation": "claire boissieres / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Simon Fou",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1652459416486,
                                "string": "13 mai 2022"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/7cf9f3863c82f910083ff8961caea16817a4bf65",
                                "m": "https://bs.plantnet.org/image/m/7cf9f3863c82f910083ff8961caea16817a4bf65",
                                "s": "https://bs.plantnet.org/image/s/7cf9f3863c82f910083ff8961caea16817a4bf65"
                            },
                            "citation": "Simon Fou / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Andy",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1588511099496,
                                "string": "3 mai 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/fdb98a5d5e947e29485c81cf00edac01bc730232",
                                "m": "https://bs.plantnet.org/image/m/fdb98a5d5e947e29485c81cf00edac01bc730232",
                                "s": "https://bs.plantnet.org/image/s/fdb98a5d5e947e29485c81cf00edac01bc730232"
                            },
                            "citation": "Andy / Pl@ntNet, cc-by-sa"
                        }
                    ],
                    "gbif": {
                        "id": "5369652"
                    }
                },
                {
                    "score": 0.19806,
                    "species": {
                        "scientificNameWithoutAuthor": "Geum macrophyllum",
                        "scientificNameAuthorship": "Willd.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Geum",
                            "scientificNameAuthorship": "",
                            "scientificName": "Geum"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Benoîte à grandes feuilles"
                        ],
                        "scientificName": "Geum macrophyllum Willd."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "Rolf Keller",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1588847124470,
                                "string": "7 mai 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/b4190ce0ed25df0f29b2130d8fa3e15e976741ff",
                                "m": "https://bs.plantnet.org/image/m/b4190ce0ed25df0f29b2130d8fa3e15e976741ff",
                                "s": "https://bs.plantnet.org/image/s/b4190ce0ed25df0f29b2130d8fa3e15e976741ff"
                            },
                            "citation": "Rolf Keller / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "roel henskens",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1593334936491,
                                "string": "28 juin 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/9ec48ebda57dbcb671fdae58e5aca6837524a8e9",
                                "m": "https://bs.plantnet.org/image/m/9ec48ebda57dbcb671fdae58e5aca6837524a8e9",
                                "s": "https://bs.plantnet.org/image/s/9ec48ebda57dbcb671fdae58e5aca6837524a8e9"
                            },
                            "citation": "roel henskens / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Ulrichs Verena",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1652948588149,
                                "string": "19 mai 2022"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/87cbb44054e2611c7072c2a470ad126fde5f5542",
                                "m": "https://bs.plantnet.org/image/m/87cbb44054e2611c7072c2a470ad126fde5f5542",
                                "s": "https://bs.plantnet.org/image/s/87cbb44054e2611c7072c2a470ad126fde5f5542"
                            },
                            "citation": "Ulrichs Verena / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Jessica Sivret",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1623074473354,
                                "string": "7 juin 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/44c5882f163974ce72b4ad4a94778990b7655c36",
                                "m": "https://bs.plantnet.org/image/m/44c5882f163974ce72b4ad4a94778990b7655c36",
                                "s": "https://bs.plantnet.org/image/s/44c5882f163974ce72b4ad4a94778990b7655c36"
                            },
                            "citation": "Jessica Sivret / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Patrick Fournier",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1588779511975,
                                "string": "6 mai 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/c239014fbef82300523f3ef65a6803c03d0b09d7",
                                "m": "https://bs.plantnet.org/image/m/c239014fbef82300523f3ef65a6803c03d0b09d7",
                                "s": "https://bs.plantnet.org/image/s/c239014fbef82300523f3ef65a6803c03d0b09d7"
                            },
                            "citation": "Patrick Fournier / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Manfred Strasser",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1653935305924,
                                "string": "30 mai 2022"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/f89f1e3c66fef9dbdfb1849f9551a832fc25f226",
                                "m": "https://bs.plantnet.org/image/m/f89f1e3c66fef9dbdfb1849f9551a832fc25f226",
                                "s": "https://bs.plantnet.org/image/s/f89f1e3c66fef9dbdfb1849f9551a832fc25f226"
                            },
                            "citation": "Manfred Strasser / Pl@ntNet, cc-by-sa"
                        }
                    ],
                    "gbif": {
                        "id": "5369784"
                    }
                },
                {
                    "score": 0.04237,
                    "species": {
                        "scientificNameWithoutAuthor": "Geum aleppicum",
                        "scientificNameAuthorship": "Jacq.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Geum",
                            "scientificNameAuthorship": "",
                            "scientificName": "Geum"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Benoîte d'Alep"
                        ],
                        "scientificName": "Geum aleppicum Jacq."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "that's someguy",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1571774609527,
                                "string": "22 octobre 2019"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/ed15dc4635825548fa15debb40dfa719677eabb5",
                                "m": "https://bs.plantnet.org/image/m/ed15dc4635825548fa15debb40dfa719677eabb5",
                                "s": "https://bs.plantnet.org/image/s/ed15dc4635825548fa15debb40dfa719677eabb5"
                            },
                            "citation": "that's someguy / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Joni Apt",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1628733575029,
                                "string": "12 août 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/f6224d0d77357f41af860d7b157f3ce71b3277b5",
                                "m": "https://bs.plantnet.org/image/m/f6224d0d77357f41af860d7b157f3ce71b3277b5",
                                "s": "https://bs.plantnet.org/image/s/f6224d0d77357f41af860d7b157f3ce71b3277b5"
                            },
                            "citation": "Joni Apt / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "EOL − Superior National Forest",
                            "license": "cc-by",
                            "date": {
                                "timestamp": 1482264513841,
                                "string": "20 décembre 2016"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/69d431ede5302cd7ad433031263be1d0099b480f",
                                "m": "https://bs.plantnet.org/image/m/69d431ede5302cd7ad433031263be1d0099b480f",
                                "s": "https://bs.plantnet.org/image/s/69d431ede5302cd7ad433031263be1d0099b480f"
                            },
                            "citation": "EOL − Superior National Forest / Pl@ntNet, cc-by"
                        }
                    ],
                    "gbif": {
                        "id": "5369685"
                    }
                },
                {
                    "score": 0.01752,
                    "species": {
                        "scientificNameWithoutAuthor": "Geum virginianum",
                        "scientificNameAuthorship": "L.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Geum",
                            "scientificNameAuthorship": "",
                            "scientificName": "Geum"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Benoîte de Virginie"
                        ],
                        "scientificName": "Geum virginianum L."
                    },
                    "images": [
                        {
                            "organ": "leaf",
                            "author": "William Coville",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1640625221293,
                                "string": "27 décembre 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/4b0c2c97572664d8fcaa7e469be1210878151f12",
                                "m": "https://bs.plantnet.org/image/m/4b0c2c97572664d8fcaa7e469be1210878151f12",
                                "s": "https://bs.plantnet.org/image/s/4b0c2c97572664d8fcaa7e469be1210878151f12"
                            },
                            "citation": "William Coville / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "leaf",
                            "author": "William Coville",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1640625221293,
                                "string": "27 décembre 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/f320488fc1c0e538c10543c9b365a62f72823106",
                                "m": "https://bs.plantnet.org/image/m/f320488fc1c0e538c10543c9b365a62f72823106",
                                "s": "https://bs.plantnet.org/image/s/f320488fc1c0e538c10543c9b365a62f72823106"
                            },
                            "citation": "William Coville / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "leaf",
                            "author": "Casey Harmon",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1611451731742,
                                "string": "24 janvier 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/27074c2c7de4fdddf438f17ce276a432a64e0a85",
                                "m": "https://bs.plantnet.org/image/m/27074c2c7de4fdddf438f17ce276a432a64e0a85",
                                "s": "https://bs.plantnet.org/image/s/27074c2c7de4fdddf438f17ce276a432a64e0a85"
                            },
                            "citation": "Casey Harmon / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "leaf",
                            "author": "Casey Harmon",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1611451731742,
                                "string": "24 janvier 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/c64f633853601b7a23ce19fc72513e4cbc73af78",
                                "m": "https://bs.plantnet.org/image/m/c64f633853601b7a23ce19fc72513e4cbc73af78",
                                "s": "https://bs.plantnet.org/image/s/c64f633853601b7a23ce19fc72513e4cbc73af78"
                            },
                            "citation": "Casey Harmon / Pl@ntNet, cc-by-sa"
                        }
                    ],
                    "gbif": {
                        "id": "5369702"
                    }
                },
                {
                    "score": 0.01482,
                    "species": {
                        "scientificNameWithoutAuthor": "Geum pyrenaicum",
                        "scientificNameAuthorship": "Mill.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Geum",
                            "scientificNameAuthorship": "",
                            "scientificName": "Geum"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Benoîte des Pyrénées"
                        ],
                        "scientificName": "Geum pyrenaicum Mill."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "Sara",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1654951083689,
                                "string": "11 juin 2022"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/f24f0d80bdd5e3ede93793f232385ceddcd489ec",
                                "m": "https://bs.plantnet.org/image/m/f24f0d80bdd5e3ede93793f232385ceddcd489ec",
                                "s": "https://bs.plantnet.org/image/s/f24f0d80bdd5e3ede93793f232385ceddcd489ec"
                            },
                            "citation": "Sara / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "habit",
                            "author": "Pricia",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1591084985964,
                                "string": "2 juin 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/bfe3d607af971acc7da94aa1aa0d5afc00593f71",
                                "m": "https://bs.plantnet.org/image/m/bfe3d607af971acc7da94aa1aa0d5afc00593f71",
                                "s": "https://bs.plantnet.org/image/s/bfe3d607af971acc7da94aa1aa0d5afc00593f71"
                            },
                            "citation": "Pricia / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Pricia",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1591084985964,
                                "string": "2 juin 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/9753bdbd6e34d4cedd761aa26cff2742f64c64b9",
                                "m": "https://bs.plantnet.org/image/m/9753bdbd6e34d4cedd761aa26cff2742f64c64b9",
                                "s": "https://bs.plantnet.org/image/s/9753bdbd6e34d4cedd761aa26cff2742f64c64b9"
                            },
                            "citation": "Pricia / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Tela Botanica − Mathieu MENAND",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1329226063000,
                                "string": "14 février 2012"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/385f61c2e653c25220b1d6b2082bf3ac18c7ab57",
                                "m": "https://bs.plantnet.org/image/m/385f61c2e653c25220b1d6b2082bf3ac18c7ab57",
                                "s": "https://bs.plantnet.org/image/s/385f61c2e653c25220b1d6b2082bf3ac18c7ab57"
                            },
                            "citation": "Tela Botanica − Mathieu MENAND / Pl@ntNet, cc-by-sa"
                        }
                    ],
                    "gbif": {
                        "id": "5369919"
                    }
                },
                {
                    "score": 0.00453,
                    "species": {
                        "scientificNameWithoutAuthor": "Geum hispidum",
                        "scientificNameAuthorship": "Fr.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Geum",
                            "scientificNameAuthorship": "",
                            "scientificName": "Geum"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Benoîte hispide"
                        ],
                        "scientificName": "Geum hispidum Fr."
                    },
                    "images": [
                        {
                            "organ": "other",
                            "author": "Photoflora - Benoit BOCK",
                            "license": "©",
                            "date": {
                                "timestamp": 1607596842712,
                                "string": "10 décembre 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/72b1fca6406c3824a96c4b6ab60326b829b33b3e",
                                "m": "https://bs.plantnet.org/image/m/72b1fca6406c3824a96c4b6ab60326b829b33b3e",
                                "s": "https://bs.plantnet.org/image/s/72b1fca6406c3824a96c4b6ab60326b829b33b3e"
                            },
                            "citation": "Photoflora - Benoit BOCK / Pl@ntNet, ©"
                        }
                    ],
                    "gbif": {
                        "id": "5369717"
                    }
                },
                {
                    "score": 0.00199,
                    "species": {
                        "scientificNameWithoutAuthor": "Agrimonia striata",
                        "scientificNameAuthorship": "Michx.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Agrimonia",
                            "scientificNameAuthorship": "",
                            "scientificName": "Agrimonia"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Aigremoine striée"
                        ],
                        "scientificName": "Agrimonia striata Michx."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "Danielle Mccloy",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1625453210499,
                                "string": "5 juillet 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/557cf808a3edbdfbc818c191c1cd82e62c4b888c",
                                "m": "https://bs.plantnet.org/image/m/557cf808a3edbdfbc818c191c1cd82e62c4b888c",
                                "s": "https://bs.plantnet.org/image/s/557cf808a3edbdfbc818c191c1cd82e62c4b888c"
                            },
                            "citation": "Danielle Mccloy / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Marc Moretti",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1565466106110,
                                "string": "10 août 2019"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/09be360250bc615934c5212302185a6cb5914eaa",
                                "m": "https://bs.plantnet.org/image/m/09be360250bc615934c5212302185a6cb5914eaa",
                                "s": "https://bs.plantnet.org/image/s/09be360250bc615934c5212302185a6cb5914eaa"
                            },
                            "citation": "Marc Moretti / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "EOL − USDA NRCS Wetland Science Institute.",
                            "license": "public",
                            "date": {
                                "timestamp": 1482317740542,
                                "string": "21 décembre 2016"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/9bc9cca359a62f1a418a3dce90592af440e5c7d3",
                                "m": "https://bs.plantnet.org/image/m/9bc9cca359a62f1a418a3dce90592af440e5c7d3",
                                "s": "https://bs.plantnet.org/image/s/9bc9cca359a62f1a418a3dce90592af440e5c7d3"
                            },
                            "citation": "EOL − USDA NRCS Wetland Science Institute. / Pl@ntNet, public"
                        }
                    ],
                    "gbif": {
                        "id": "3001999"
                    }
                },
                {
                    "score": 0.00185,
                    "species": {
                        "scientificNameWithoutAuthor": "Aremonia agrimonoides",
                        "scientificNameAuthorship": "(L.) DC.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Aremonia",
                            "scientificNameAuthorship": "",
                            "scientificName": "Aremonia"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [],
                        "scientificName": "Aremonia agrimonoides (L.) DC."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "zmei",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1558985316525,
                                "string": "27 mai 2019"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/2ee377442244cedce03c242fe42cd57b036d56bb",
                                "m": "https://bs.plantnet.org/image/m/2ee377442244cedce03c242fe42cd57b036d56bb",
                                "s": "https://bs.plantnet.org/image/s/2ee377442244cedce03c242fe42cd57b036d56bb"
                            },
                            "citation": "zmei / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Denis Bastianelli",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1651427921857,
                                "string": "1 mai 2022"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/3eb69296b7d148d424ddb5e5eeb0c399124bed1d",
                                "m": "https://bs.plantnet.org/image/m/3eb69296b7d148d424ddb5e5eeb0c399124bed1d",
                                "s": "https://bs.plantnet.org/image/s/3eb69296b7d148d424ddb5e5eeb0c399124bed1d"
                            },
                            "citation": "Denis Bastianelli / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Sretko Popadic",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1651700626641,
                                "string": "4 mai 2022"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/d2e5047de45389df15536a8fa63d2b2aa48b5c6f",
                                "m": "https://bs.plantnet.org/image/m/d2e5047de45389df15536a8fa63d2b2aa48b5c6f",
                                "s": "https://bs.plantnet.org/image/s/d2e5047de45389df15536a8fa63d2b2aa48b5c6f"
                            },
                            "citation": "Sretko Popadic / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "Andrew Gagg",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1622705122352,
                                "string": "3 juin 2021"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/8e1c801d834df3dffffd7cc0c33ede206e484c30",
                                "m": "https://bs.plantnet.org/image/m/8e1c801d834df3dffffd7cc0c33ede206e484c30",
                                "s": "https://bs.plantnet.org/image/s/8e1c801d834df3dffffd7cc0c33ede206e484c30"
                            },
                            "citation": "Andrew Gagg / Pl@ntNet, cc-by-sa"
                        }
                    ],
                    "gbif": {
                        "id": "2988624"
                    }
                },
                {
                    "score": 0.00177,
                    "species": {
                        "scientificNameWithoutAuthor": "Ranunculus macounii",
                        "scientificNameAuthorship": "Britton",
                        "genus": {
                            "scientificNameWithoutAuthor": "Ranunculus",
                            "scientificNameAuthorship": "",
                            "scientificName": "Ranunculus"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Ranunculaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Ranunculaceae"
                        },
                        "commonNames": [
                            "Renoncule de Macoun"
                        ],
                        "scientificName": "Ranunculus macounii Britton"
                    },
                    "images": [
                        {
                            "organ": "leaf",
                            "author": "Cathy Francis",
                            "license": "cc-by-sa",
                            "date": {
                                "timestamp": 1654639385167,
                                "string": "7 juin 2022"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/548db4f89d4f2ccf6ecfeaa877f0ff2c885539fa",
                                "m": "https://bs.plantnet.org/image/m/548db4f89d4f2ccf6ecfeaa877f0ff2c885539fa",
                                "s": "https://bs.plantnet.org/image/s/548db4f89d4f2ccf6ecfeaa877f0ff2c885539fa"
                            },
                            "citation": "Cathy Francis / Pl@ntNet, cc-by-sa"
                        },
                        {
                            "organ": "habit",
                            "author": "EOL − This image is not copyrighted and may be freely used for any purpose. Please credit the artist, original publication if applicable, and the USDA-NRCS PLANTS Database. The following format is suggested and will be appreciated: Sheri Hagwood @ USDA-NRCS PLANTS Database If you cite PLA",
                            "license": "public",
                            "date": {
                                "timestamp": 1482276095953,
                                "string": "20 décembre 2016"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/aadfcd018d9c92b027ea45102f7ac241b5654c52",
                                "m": "https://bs.plantnet.org/image/m/aadfcd018d9c92b027ea45102f7ac241b5654c52",
                                "s": "https://bs.plantnet.org/image/s/aadfcd018d9c92b027ea45102f7ac241b5654c52"
                            },
                            "citation": "EOL − This image is not copyrighted and may be freely used for any purpose. Please credit the artist, original publication if applicable, and the USDA-NRCS PLANTS Database. The following format is suggested and will be appreciated: Sheri Hagwood @ USDA-NRCS PLANTS Database If you cite PLA / Pl@ntNet, public"
                        }
                    ],
                    "gbif": {
                        "id": "3033430"
                    }
                },
                {
                    "score": 0.00168,
                    "species": {
                        "scientificNameWithoutAuthor": "Geum heterocarpum",
                        "scientificNameAuthorship": "Boiss.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Geum",
                            "scientificNameAuthorship": "",
                            "scientificName": "Geum"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Benoîte à fruits divers",
                            "Benoîte à fruits variables"
                        ],
                        "scientificName": "Geum heterocarpum Boiss."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "Photoflora - Jean-Luc TASSET",
                            "license": "©",
                            "date": {
                                "timestamp": 1607596842691,
                                "string": "10 décembre 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/ff6e3f2d7cbbc10a00d21d0e1d1578ac2de14b67",
                                "m": "https://bs.plantnet.org/image/m/ff6e3f2d7cbbc10a00d21d0e1d1578ac2de14b67",
                                "s": "https://bs.plantnet.org/image/s/ff6e3f2d7cbbc10a00d21d0e1d1578ac2de14b67"
                            },
                            "citation": "Photoflora - Jean-Luc TASSET / Pl@ntNet, ©"
                        },
                        {
                            "organ": "flower",
                            "author": "Photoflora - Jean-Luc TASSET",
                            "license": "©",
                            "date": {
                                "timestamp": 1607596842691,
                                "string": "10 décembre 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/cc7c44ec5d1de4580cbca32a6ab078e0401bbad0",
                                "m": "https://bs.plantnet.org/image/m/cc7c44ec5d1de4580cbca32a6ab078e0401bbad0",
                                "s": "https://bs.plantnet.org/image/s/cc7c44ec5d1de4580cbca32a6ab078e0401bbad0"
                            },
                            "citation": "Photoflora - Jean-Luc TASSET / Pl@ntNet, ©"
                        },
                        {
                            "organ": "flower",
                            "author": "Photoflora - Jean-Luc TASSET",
                            "license": "©",
                            "date": {
                                "timestamp": 1607596842701,
                                "string": "10 décembre 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/b2c93c02fd8b3dce965dcaae0db21c7b101cf899",
                                "m": "https://bs.plantnet.org/image/m/b2c93c02fd8b3dce965dcaae0db21c7b101cf899",
                                "s": "https://bs.plantnet.org/image/s/b2c93c02fd8b3dce965dcaae0db21c7b101cf899"
                            },
                            "citation": "Photoflora - Jean-Luc TASSET / Pl@ntNet, ©"
                        },
                        {
                            "organ": "flower",
                            "author": "Photoflora - Jean-Luc TASSET",
                            "license": "©",
                            "date": {
                                "timestamp": 1607596842716,
                                "string": "10 décembre 2020"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/548373c15c073f321562646c40ba57070dd7f1b4",
                                "m": "https://bs.plantnet.org/image/m/548373c15c073f321562646c40ba57070dd7f1b4",
                                "s": "https://bs.plantnet.org/image/s/548373c15c073f321562646c40ba57070dd7f1b4"
                            },
                            "citation": "Photoflora - Jean-Luc TASSET / Pl@ntNet, ©"
                        }
                    ],
                    "gbif": {
                        "id": "5369961"
                    }
                },
                {
                    "score": 0.00134,
                    "species": {
                        "scientificNameWithoutAuthor": "Agrimonia pubescens",
                        "scientificNameAuthorship": "Wallr.",
                        "genus": {
                            "scientificNameWithoutAuthor": "Agrimonia",
                            "scientificNameAuthorship": "",
                            "scientificName": "Agrimonia"
                        },
                        "family": {
                            "scientificNameWithoutAuthor": "Rosaceae",
                            "scientificNameAuthorship": "",
                            "scientificName": "Rosaceae"
                        },
                        "commonNames": [
                            "Aigremoine pubescente"
                        ],
                        "scientificName": "Agrimonia pubescens Wallr."
                    },
                    "images": [
                        {
                            "organ": "flower",
                            "author": "EOL − Ron Thomas",
                            "license": "cc-by-nc-sa",
                            "date": {
                                "timestamp": 1482317737562,
                                "string": "21 décembre 2016"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/e1e178b9b8deece6aa183d5bbfe6a5ecb16dd57e",
                                "m": "https://bs.plantnet.org/image/m/e1e178b9b8deece6aa183d5bbfe6a5ecb16dd57e",
                                "s": "https://bs.plantnet.org/image/s/e1e178b9b8deece6aa183d5bbfe6a5ecb16dd57e"
                            },
                            "citation": "EOL − Ron Thomas / Pl@ntNet, cc-by-nc-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "EOL − Ron Thomas",
                            "license": "cc-by-nc-sa",
                            "date": {
                                "timestamp": 1482317737562,
                                "string": "21 décembre 2016"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/84efa99e3323085b7862ce3224d4baf53a71dd89",
                                "m": "https://bs.plantnet.org/image/m/84efa99e3323085b7862ce3224d4baf53a71dd89",
                                "s": "https://bs.plantnet.org/image/s/84efa99e3323085b7862ce3224d4baf53a71dd89"
                            },
                            "citation": "EOL − Ron Thomas / Pl@ntNet, cc-by-nc-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "EOL − Ron Thomas",
                            "license": "cc-by-nc-sa",
                            "date": {
                                "timestamp": 1482317737562,
                                "string": "21 décembre 2016"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/89c465bb134a0a34c4f8d3b7761f264d623c879d",
                                "m": "https://bs.plantnet.org/image/m/89c465bb134a0a34c4f8d3b7761f264d623c879d",
                                "s": "https://bs.plantnet.org/image/s/89c465bb134a0a34c4f8d3b7761f264d623c879d"
                            },
                            "citation": "EOL − Ron Thomas / Pl@ntNet, cc-by-nc-sa"
                        },
                        {
                            "organ": "flower",
                            "author": "EOL − Ron Thomas",
                            "license": "cc-by-nc-sa",
                            "date": {
                                "timestamp": 1482317737563,
                                "string": "21 décembre 2016"
                            },
                            "url": {
                                "o": "https://bs.plantnet.org/image/o/c1d2b7e9d3c11e928ec3fc2c299c062379f01d18",
                                "m": "https://bs.plantnet.org/image/m/c1d2b7e9d3c11e928ec3fc2c299c062379f01d18",
                                "s": "https://bs.plantnet.org/image/s/c1d2b7e9d3c11e928ec3fc2c299c062379f01d18"
                            },
                            "citation": "EOL − Ron Thomas / Pl@ntNet, cc-by-nc-sa"
                        }
                    ],
                    "gbif": {
                        "id": "3001959"
                    }
                }
            ],
            "version": "2022-06-14 (6.0)",
            "remainingIdentificationRequests": 488
        }
        return toxicityService.getPlantsToxicity(plantNetResponse.results);
    }
}
module.exports = new PlantService();