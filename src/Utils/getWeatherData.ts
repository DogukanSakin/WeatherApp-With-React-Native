/**
 * Using the query parameter retrieved, it returns the JSON result from the API by storing it inside an object. 
 * @param {string} query
 */

import axios from "axios";
import Config from "react-native-config";
export default async function(query:string){
    try {
        const data:any = await axios.get(Config.SEARCH_CITY_API_URL+query);
        const parsedData= Object.keys(data).map(function(key){
            return data[key];
        });
        const dataDetail:any={
            cityName:parsedData[0]['location'].name,
            temp_c:parsedData[0]['current'].temp_c,
            conditionText:parsedData[0]['current'].condition.text,
            wind:parsedData[0]['current'].wind_kph,
            humidity:parsedData[0]['current'].humidity,
            feelsLike_c:parsedData[0]['current'].feelslike_c,
            visibility: parsedData[0]['current'].vis_km,
            country:parsedData[0]['location'].country,
        };
        return dataDetail;
    } catch (error) {
        console.log(error);
        
    }

}