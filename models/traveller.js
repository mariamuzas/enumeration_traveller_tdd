const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transportJourney) {
  return this.journeys.filter((journey) => journey.transport === transportJourney);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => total + journey.distance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
//   let uniques = [];
//   const isNotUnique = function(item) {
//     return uniques.includes(item);
//   };
//   this.journeys.forEach((journey) => {if(!isNotUnique(journey.transport)) { uniques.push(journey.transport) }}
//   );
//   return uniques;
// };


module.exports = Traveller;
