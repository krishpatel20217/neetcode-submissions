class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }

        this.map.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.map.has(key)) {
            return "";
        }

        const arr = this.map.get(key);

        let left = 0;
        let right = arr.length - 1;
        let ans = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid][0] <= timestamp) {
                ans = arr[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }
}