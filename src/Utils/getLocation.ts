
/** 
 *If the user allows the application to determine the location, it returns an object containing long and lat values. 

*/
import { PermissionsAndroid } from 'react-native';
import GetLocation from 'react-native-get-location';
export default async function(){
    let locData;
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,     
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            locData =await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            })
            .then(location => {
              return location;
             
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
          
            
        } 
        else {
            console.log("Location permission denied")
        }
    } catch (error) {
        console.log(error);
        
    }
   
    return locData;
   
    
        
         
        
    
}