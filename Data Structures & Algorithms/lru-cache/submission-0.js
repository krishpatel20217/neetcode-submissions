
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        // Dummy nodes to simplify insertion and removal
        this.left = new Node(0, 0);  // Least recently used side
        this.right = new Node(0, 0); // Most recently used side

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // Remove a node from the linked list
    remove(node) {
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    // Insert a node at the most recently used end
    insert(node) {
        const prev = this.right.prev;

        prev.next = node;
        node.prev = prev;

        node.next = this.right;
        this.right.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);

        // Mark this key as recently used
        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key, value) {
        // If key exists, remove its old node
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        // Create and store the updated node
        const node = new Node(key, value);
        this.cache.set(key, node);
        this.insert(node);

        // Evict the least recently used key if over capacity
        if (this.cache.size > this.capacity) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
