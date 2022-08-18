import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = 'nmasterplan/garment-booking-orders/read-by-no';

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("nmasterplan");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter) })
        .then(results => {
            return results.data
        });
}