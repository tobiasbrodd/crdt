export default class CRDT {
    constructor() {
        const MIN = 0;
        const MAX = Number.MAX_SAFE_INTEGER;
        this.addSet = {
            MIN: { character: "", timestamp: 0 },
            MAX: { character: "", timestamp: 0 }
        };
        this.removeSet = {};
        this.positions = [MIN, MAX];
    }

    get addSet() {
        return this.addSet;
    }

    get removeSet() {
        return this.removeSet;
    }

    get positions() {
        return this.positions;
    }

    add(character, position) {
        this.positions.push(position);
        this.addSet[position] = {
            character: character,
            timestamp: new Date().getTime()
        };
    }

    remove(position) {
        if (position in this.addSet) {
            this.removeSet[position] = new Date().getTime();
        }
    }

    generatePosition(left, right) {
        let position = left;

        while (position in this.addSet) {
            position = Math.floor(Math.random() * (right - left)) + left;
        }
        return position;
    }

    toString() {
        let output = "";
        const addPositions = Object.keys(this.addSet).sort();

        for (let i = 0; i < addPositions.length; i++) {
            const addPosition = addPositions[i];
            if (addPosition in this.removeSet) {
                const addTimestamp = this.addSet[addPosition].timestamp;
                const removeTimestamp = this.removeSet[addPosition];

                if (addTimestamp > removeTimestamp) {
                    output += this.addSet[addPosition].character;
                }
            } else {
                output += this.addSet[addPosition].character;
            }
        }

        return output;
    }
}