import axios from "axios";
import { get, lowerCase, sortBy } from "lodash";
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
        const series = [];

        const resp = await axios.get(`https://api.cricapi.com/v1/series?apikey=e5dc35f0-1ff0-422f-b494-9999047708de&offset=0`);

        const data = get(resp, "data.data", []);
        series.push(...data);
        const formattedSeries = getFormattedSeries(series);

        return formattedSeries;
    } catch (e) {
        console.log(e);
    }
}

const getFormattedSeries = (series) => {
    const sortedSeries = sortBy(series,["startDate","desc"]).map(s => {
        // {
        //     "id": "53d2aa5c-8ece-43a5-a779-e571a26c55c4",
        //     "name": "Ireland tour of England ODI Series, 2023",
        //     "startDate": "2023-09-20",
        //     "endDate": "Sep 26",
        //     "odi": 3,
        //     "t20": 0,
        //     "test": 0,
        //     "squads": 0,
        //     "matches": 3
        // }
        const name = s.name.toLowerCase();

        const isIccEvent = name.includes("icc");
        const isBilateralSeries = name.includes("tour");
        const isLeague = !isIccEvent && !isBilateralSeries;
        const isWomenSeries = name.includes("women");

        let team1, team2;
        
        if(isBilateralSeries) {
            team1 = countries.find(c => name.includes(c.name.toLowerCase()));
            team2 = team1 != -1 ? countries.find(c => c.name.toLowerCase() != team1.name.toLowerCase() && name.includes(c.name.toLowerCase())) : undefined;

            const sIndex1 = name.indexOf(team1.name.toLowerCase());
            const sIndex2 = name.indexOf(team2.name.toLowerCase());

            if(sIndex1 != -1 && sIndex2 != -1 && sIndex1 > sIndex2) {
                const temp = team1;
                team1 = team2;
                team2 = temp;
            }
        }

        return {
            ...s,
            from: getColor(isIccEvent, isBilateralSeries, team1, "from"),
            to: getColor(isIccEvent, isBilateralSeries, team2, "to")
        }
    });

    return sortedSeries;
}

const getColor = (isIccEvent, isBilateralSeries, team, dir) => {
    if(!isBilateralSeries && !isIccEvent)  return 'tw-bg-rose-700';
    if(isIccEvent)  return 'tw-bg-yellow-600';
    if(isBilateralSeries) 
        return team[dir];
    return "tw-bg-violet-400";
}

export {
    getCountriesWithFlag,
    formatCountriesData,
    getSeriesList,
    getFormattedSeries
}
