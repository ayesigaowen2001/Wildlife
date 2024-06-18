// "import React, { useContext } from "react";
// import { BingMap, Pushpin } from "bingmaps-react";
// import { AnimalContext, AnimalContextType } from "../../Data/StateManagement/animalContext";

// const AnimalLocationMap: React.FC = () => {
// const { animalData } = useContext<AnimalContextType>(AnimalContext);

// const formatGPSLocations = (animal: any) => {
// if (animal.gps_locations?.length > 0) {
// return (
// <Pushpin color="red">
// {animal.gps_locations.map((location: any, index: number) => (
// <li key={index}>
// {location.latitude}, {location.longitude}
// </li>
// ))}
// </Pushpin>
// );
// }
// return null;
// };

// return (
// <BingMap>
// {animalData.map((animal, index) => (
// <React.Fragment key={index}>{formatGPSLocations(animal)}</React.Fragment>
// ))}
// </BingMap>
// );
// };
