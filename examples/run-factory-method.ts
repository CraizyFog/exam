import { RoadLogistics, SeaLogistics } from '../src/creational/factory/factory-method';

console.log("=== FACTORY METHOD ===");

const roadLogistics = new RoadLogistics();
roadLogistics.planDelivery();

const seaLogistics = new SeaLogistics();
seaLogistics.planDelivery();