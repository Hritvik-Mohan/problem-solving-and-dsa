class MaxHeap {
    constructor() {
        this.arr = [];
    }

    upheapify(idx) {
        /**
         * Time: O(logn) Space: O(1)
         */
        while(idx > 0) { // we cannot upheapify roo, we will stop the loop, when we reach root
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.arr[parentIdx] < this.arr[idx]) {
                // if parent in less than child, swap then
                let temp = this.arr[parentIdx];
                this.arr[parentIdx] = this.arr[idx];
                this.arr[idx] = temp;

                // move upwards
                idx = parentIdx;
            } else {
                // already a max heap
                break;
            }
        }
    }

    insert(x) {
        // this function inserts x correctly in max heap
        this.arr.push(x);
        this.upheapify(this.arr.length - 1); // arr.len - 1 is the index on which x is added
    }
}