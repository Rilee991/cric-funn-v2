import axios from "axios";
import { get, lowerCase } from "lodash";
import { countries } from "../common/countrieswithflags/flags";

import { apisUrl } from "../common/enum";
import { db } from "../firebase/config";

const getCountriesWithFlag = async () => {
    try {
        let countries = [], i = 0;

        while(i < 250) {
            const resp = await axios.get(`https://api.cricapi.com/v1/countries?apikey=e5dc35f0-1ff0-422f-b494-9999047708de&offset=${i}`);
            const data = get(resp, "data.data", []);

            if(data.length == 0)    break;

            countries.push(...data);
            i += 25;
        }

        console.log(JSON.stringify(countries));
    } catch (e) {
        console.log(e);
    }
}

const formatCountriesData = () => {
    const mCountriesMap = {
        "South Africa": "rsa",
        "United States of America": "usa",
        "New Zealand": "nz",
        "Netherlands": "ned",
        "Sri Lanka": "sl",
        "Hong Kong": "hk",
        "United Arab Emirates": "uae"

    };

    const mCountries = countries.map(country => {
        const shortName = mCountriesMap[country.name]?? lowerCase(country.name.slice(0,3));

        return {
            ...country,
            shortName
        }
    });

    console.log(JSON.stringify(mCountries));
}

const getSeriesList = async () => {
    try {
        // const series = [], i = 0;

        // while(i < 215) {
        //     const resp = await axios.get(`https://api.cricapi.com/v1/series?apikey=e5dc35f0-1ff0-422f-b494-9999047708de&offset=${i}`);
        //     const data = get(resp, "data.data", []);

        //     if(data.length == 0)    break;

        //     series.push(...data);
        //     i += 25;
        // }

        // console.log(JSON.stringify(series));
        const series = [
            {
            "id": "53d2aa5c-8ece-43a5-a779-e571a26c55c4",
            "name": "Ireland tour of England ODI Series, 2023",
            "startDate": "2023-09-20",
            "endDate": "Sep 26",
            "odi": 3,
            "t20": 0,
            "test": 0,
            "squads": 0,
            "matches": 3
            },
            {
            "id": "470b23ea-3810-49ff-9d3c-467f434a6bbf",
            "name": "Sri Lanka Women tour of England, 2023",
            "startDate": "2023-09-02",
            "endDate": "Sep 19",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "e7fc5404-3053-4026-97bc-b2d24649d2bd",
            "name": "New Zealand tour of England, 2023",
            "startDate": "2023-08-30",
            "endDate": "Sep 15",
            "odi": 4,
            "t20": 4,
            "test": 0,
            "squads": 0,
            "matches": 8
            },
            {
            "id": "e484511b-4751-40c2-9b18-4abcbb76d314",
            "name": "Ireland tour of England Only Test, 2023",
            "startDate": "2023-06-01",
            "endDate": "Jun 04",
            "odi": 0,
            "t20": 0,
            "test": 1,
            "squads": 0,
            "matches": 1
            },
            {
            "id": "c059609d-19c0-4c11-9639-082a8db9f914",
            "name": "New Zealand tour of Pakistan, 2023",
            "startDate": "2023-04-13",
            "endDate": "May 07",
            "odi": 5,
            "t20": 5,
            "test": 0,
            "squads": 0,
            "matches": 10
            },
            {
            "id": "02ac344b-3fe0-4f75-8e3f-855ec59d2db0",
            "name": "Netherlands tour of South Africa, 2023",
            "startDate": "2023-03-31",
            "endDate": "Apr 02",
            "odi": 2,
            "t20": 0,
            "test": 0,
            "squads": 0,
            "matches": 2
            },
            {
            "id": "c00dbd54-38b1-4be6-ae07-5fa5e4d22440",
            "name": "Sri Lanka tour New Zealand, 2023",
            "startDate": "2023-03-08",
            "endDate": "Apr 08",
            "odi": 3,
            "t20": 3,
            "test": 2,
            "squads": 0,
            "matches": 8
            },
            {
            "id": "76415032-6cac-4946-83c3-eaaa8c7ca56c",
            "name": "England tour of Bangladesh, 2023",
            "startDate": "2023-03-01",
            "endDate": "Mar 14",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "bcf9efa5-0d55-4b63-b583-aff617b05222",
            "name": "West Indies tour of South Africa, 2023",
            "startDate": "2023-02-28",
            "endDate": "Mar 28",
            "odi": 3,
            "t20": 3,
            "test": 2,
            "squads": 0,
            "matches": 8
            },
            {
            "id": "08aec6c1-125f-40b9-8bdf-1891016a9008",
            "name": "England tour of New Zealand, 2023",
            "startDate": "2023-02-16",
            "endDate": "Feb 28",
            "odi": 0,
            "t20": 0,
            "test": 2,
            "squads": 0,
            "matches": 2
            },
            {
            "id": "f2f02a29-5800-4b95-8774-b170cdbfd308",
            "name": "ICC Womens T20 World Cup 2023",
            "startDate": "2023-02-10",
            "endDate": "Feb 26",
            "odi": 0,
            "t20": 23,
            "test": 0,
            "squads": 0,
            "matches": 20
            },
            {
            "id": "8087933a-cd0b-4adc-b7b9-a00c1dc75eb2",
            "name": "Australia tour of India, 2023",
            "startDate": "2023-02-09",
            "endDate": "Mar 22",
            "odi": 3,
            "t20": 0,
            "test": 4,
            "squads": 0,
            "matches": 7
            },
            {
            "id": "c5783d8f-4336-4679-9010-90b86d105938",
            "name": "West Indies tour of Zimbabwe, 2023",
            "startDate": "2023-02-04",
            "endDate": "Feb 16",
            "odi": 0,
            "t20": 0,
            "test": 2,
            "squads": 0,
            "matches": 2
            },
            {
            "id": "f0225e41-4ead-4a07-82be-711fd6ccd4e9",
            "name": "England tour of South Africa, 2023",
            "startDate": "2023-01-27",
            "endDate": "Feb 01",
            "odi": 3,
            "t20": 0,
            "test": 0,
            "squads": 0,
            "matches": 3
            },
            {
            "id": "a97e447c-48f1-47dd-9874-df01ee948dec",
            "name": "Womens T20I Tri-Series in South Africa 2023",
            "startDate": "2023-01-19",
            "endDate": "Feb 02",
            "odi": 0,
            "t20": 7,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "9d9e4ce5-9683-4d01-9891-c0940557c405",
            "name": "New Zealand tour of India, 2023",
            "startDate": "2023-01-18",
            "endDate": "Feb 01",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "fc9f69cc-6b64-422b-9676-0dc9d5e26580",
            "name": "Pakistan Women tour of Australia, 2023",
            "startDate": "2023-01-16",
            "endDate": "Jan 29",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "aff508e4-ff16-441c-8c3e-ac876cdb98bf",
            "name": "ICC Under 19 Womens T20 World Cup 2023",
            "startDate": "2023-01-14",
            "endDate": "Jan 29",
            "odi": 0,
            "t20": 41,
            "test": 0,
            "squads": 0,
            "matches": 24
            },
            {
            "id": "a27bd920-9b07-4c46-8b67-aaf6b81b7f5e",
            "name": "Ireland tour of Zimbabwe, 2023",
            "startDate": "2023-01-12",
            "endDate": "Jan 23",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "9ee27942-3859-4b48-bc0c-954694117f28",
            "name": "SA20, 2023",
            "startDate": "2023-01-10",
            "endDate": "Feb 11",
            "odi": 0,
            "t20": 33,
            "test": 0,
            "squads": 0,
            "matches": 30
            },
            {
            "id": "c05482f4-1ee5-41c5-b2f7-9b60eb270698",
            "name": "Bangladesh Premier League 2023",
            "startDate": "2023-01-06",
            "endDate": "Feb 16",
            "odi": 0,
            "t20": 46,
            "test": 0,
            "squads": 0,
            "matches": 42
            },
            {
            "id": "e8528bc5-309b-4640-bcbd-3cb31941ff98",
            "name": "Sri Lanka tour of India, 2023",
            "startDate": "2023-01-03",
            "endDate": "Jan 15",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "fba50f1a-0d29-44e7-af59-f0ebcb50ffb4",
            "name": "New Zealand tour of Pakistan, 2022-23",
            "startDate": "2022-12-27",
            "endDate": "Jan 13",
            "odi": 3,
            "t20": 0,
            "test": 2,
            "squads": 0,
            "matches": 5
            },
            {
            "id": "3be89e8f-6fbc-483c-b4bb-b73fde55733f",
            "name": "India Women Under-19s tour of South Africa, 2022-23",
            "startDate": "2022-12-27",
            "endDate": "Jan 04",
            "odi": 0,
            "t20": 5,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "5f9c3c16-002e-485f-89f0-584ec832ae4f",
            "name": "Super Smash 2022-23",
            "startDate": "2022-12-23",
            "endDate": "Feb 11",
            "odi": 0,
            "t20": 32,
            "test": 0,
            "squads": 0,
            "matches": 30
            }
        ];

    } catch (e) {
        console.log(e);
    }
}

export {
    getCountriesWithFlag,
    formatCountriesData
}
