
class MyCircularQueue {
    constructor(k) {
        this.capacity = k;
        this.queue = new Array(k);
        this.front = 0;
        this.size = 0;
    }

    enQueue(value) {
        if (this.isFull()) {
            return false;
        }

        const rear = (this.front + this.size) % this.capacity;
        this.queue[rear] = value;
        this.size++;

        return true;
    }

    deQueue() {
        if (this.isEmpty()) {
            return false;
        }

        this.front = (this.front + 1) % this.capacity;
        this.size--;

        return true;
    }

    Front() {
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue[this.front];
    }

    Rear() {
        if (this.isEmpty()) {
            return -1;
        }

        const rear = (this.front + this.size - 1) % this.capacity;
        return this.queue[rear];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}
