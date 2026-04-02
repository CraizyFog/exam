export interface Transport {
    deliver(): void;
}

export class Truck implements Transport {
    deliver(): void {
        console.log("Доставка вантажівкою по суші.");
    }
}

export class Ship implements Transport {
    deliver(): void {
        console.log("Доставка кораблем по морю.");
    }
}

export abstract class Logistics {
    // Фабричний метод
    abstract createTransport(): Transport;

    planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

export class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}