export function PlantnetService() {
    const getAllReferentials= async() => {
        const referentials = [
            {
              "id": "the-plant-list",
              "title": "Flore mondiale",
              "description": "Flore du monde"
            },
            {
              "id": "useful",
              "title": "Plantes utiles",
              "description": "Plantes cultivées et d'ornement"
            },
            {
              "id": "weeds",
              "title": "Adventices des cultures",
              "description": "Biodiversité des champs cultivés d'Europe"
            },
            {
              "id": "invasion",
              "title": "Plantes envahissantes",
              "description": "Plantes présentant un potentiel d'envahissement dans le monde"
            },
            {
              "id": "prota",
              "title": "Plantes utiles d'Afrique tropicale",
              "description": "Ressources végétales de l’Afrique tropicale"
            },
            {
              "id": "prosea",
              "title": "Plantes utiles d'Asie",
              "description": "Ressources végétales d'Asie"
            },
            {
              "id": "weurope",
              "title": "Europe de l'Ouest",
              "description": "Plantes d'Europe de l'Ouest"
            },
            {
              "id": "canada",
              "title": "Canada",
              "description": "Plantes du Canada"
            },
            {
              "id": "namerica",
              "title": "USA",
              "description": "Plantes des États-Unis"
            },
            {
              "id": "central-america",
              "title": "Amérique centrale",
              "description": "Plantes du Costa Rica"
            },
            {
              "id": "antilles",
              "title": "Antilles",
              "description": "Plantes de Guadeloupe"
            },
            {
              "id": "colombia",
              "title": "Colombie",
              "description": "Plantes de Colombie"
            },
            {
              "id": "guyane",
              "title": "Amazonie",
              "description": "Plantes de Guyane Française"
            },
            {
              "id": "brazil",
              "title": "Brésil",
              "description": "Plantes du Brésil"
            },
            {
              "id": "lapaz",
              "title": "Andes tropicales",
              "description": "Plantes de la vallée de La Paz, Bolivie"
            },
            {
              "id": "martinique",
              "title": "Martinique",
              "description": "Plantes de Martinique"
            },
            {
              "id": "afn",
              "title": "Afrique du Nord",
              "description": "Plantes d'Afrique du Nord"
            },
            {
              "id": "aft",
              "title": "Afrique tropicale",
              "description": "Plantes d'Afrique tropicale"
            },
            {
              "id": "reunion",
              "title": "La Réunion",
              "description": "Plantes de La Réunion"
            },
            {
              "id": "maurice",
              "title": "Maurice",
              "description": "Plantes de l'Île Maurice"
            },
            {
              "id": "comores",
              "title": "Archipel des Comores",
              "description": "Plantes des Comores"
            },
            {
              "id": "medor",
              "title": "Méditerranée orientale",
              "description": "Plantes de Méditerranée orientale"
            },
            {
              "id": "malaysia",
              "title": "Malaisie",
              "description": "Malaisie"
            },
            {
              "id": "japan",
              "title": "Japon",
              "description": "Flore du Japon"
            },
            {
              "id": "nepal",
              "title": "Népal",
              "description": "Plantes du Népal"
            },
            {
              "id": "endemia",
              "title": "Nouvelle-Calédonie",
              "description": "Plantes de Nouvelle-Calédonie"
            },
            {
              "id": "hawai",
              "title": "Hawaï",
              "description": "Plantes d'Hawaï"
            },
            {
              "id": "polynesiefr",
              "title": "Polynésie française",
              "description": "Plantes de Polynésie française"
            },
            {
              "id": "salad",
              "title": "Les Ecologistes de l'Euzière",
              "description": "Salades sauvages"
            },
            {
              "id": "iscantree",
              "title": "Arbres d'Afrique du Sud",
              "description": "Arbres indigènes d'Afrique du Sud"
            },
            {
              "id": "provence",
              "title": "Provence",
              "description": "Flore provençale Dép. des Bouches-du-Rhône"
            },
            {
              "id": "lewa",
              "title": "LEWA in KENYA",
              "description": "Lewa Wildlife Conservancy"
            },
            {
              "id": "ordesa",
              "title": "Ordesa",
              "description": "Les plantes du parc national d'Ordesa"
            },
            {
              "id": "cevennes",
              "title": "Cévennes",
              "description": "Flore du Parc national des Cévennes"
            },
            {
              "id": "monver",
              "title": "Arbres ornementaux méditerranéens",
              "description": "Arbres et arbustes pour les villes et les jardins en Méditerranée"
            },
            {
              "id": "eu-crops",
              "title": "Cultures européennes",
              "description": "Cultures plantées et cultivées en Europe"
            },
            {
              "id": "alpes-maritimes",
              "title": "Flore remarquable des Alpes-Maritimes",
              "description": "Flore patrimoniale des parcs naturels départementaux des Alpes-Maritimes "
            },
            {
              "id": "esalq",
              "title": "ESALQ and Piracicaba trees",
              "description": "Trees and shrubs of ESALQ park and surrounding areas"
            },
            {
              "id": "gbb-cf",
              "title": "Gardens by the Bay - Cloud Forest",
              "description": "Singapour"
            },
            {
              "id": "gbb-fd",
              "title": "Gardens by the Bay - Flower Dome",
              "description": "Singapour"
            }
          ]
        return Promise.resolve(referentials);

    }
    return {
        getAllReferentials
    }
}