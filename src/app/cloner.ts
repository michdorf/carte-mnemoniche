export class Cloner {
    static clone(obj) {
        if (null === obj || 'object' !== typeof obj){ return obj; }
        if (Array.isArray(obj)) {
            return obj.map(function (a) { return Cloner.clone(a); });
        }
        const copy = obj.constructor();
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) { copy[attr] = obj[attr]; }
        }
        return copy;
    }

    static clone2(object) {
        return JSON.parse(JSON.stringify(object));
    }

    static test() {
        const iterations = 100;
        const obj = {
            ID: 'Michele-1222',
            d: new Date(),
            name: 'Michele',
            int: 20,
            fl: 2.3,
            big: 12333
        };

        let tmp;
        let start = Date.now();
        for (let i = 0; i < iterations; i++) {
            tmp = Cloner.clone(obj);
        }
        let diff = Date.now() - start;
        console.log('Spend ' + diff + 'ms on 1st version');

        start = Date.now();
        for (let i = 0; i < iterations; i++) {
            tmp = Cloner.clone2(obj);
        }
        diff = Date.now() - start;
        console.log('Spend ' + diff + 'ms on 2st version');
    }
}
