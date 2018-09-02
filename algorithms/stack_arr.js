// An array-based stack implementation

// TODO: Thoroughly test code

const ELEM_SIZE = 4; // in bytes

class Stack {
    constructor(size) {
        this._MAX = size;
        this._len = 0;

        this._buffer = new ArrayBuffer(ELEM_SIZE * this._MAX);
        this._view = new Int32Array(this._buffer);
    }

    print(verbose) {
        console.log("Buffer size:", this._buffer.byteLength, "bytes");
        console.log("Length of view:", this._view.length);

        if (verbose) {
            console.log("Contents of array:");
            for (let i = 0; i < this._len; i++) {
                console.log(i + " : " + this._view[i]);
            }
        }
    }

    isEmpty() {
        return this._len === 0;
    }

    isFull() {
        return this._len === this._MAX;
    }

    size() {
        return this._len;
    }

    push(elem) {
        if (!this.isFull()) {
            this._view[++this._len - 1] = elem;
            return true;
        }
        return false;
    }

    pop() {
        if(!this.isEmpty()) {
            return this._view[--this._len];
        }
        return null;
    }

    peek() {
        if(!this.isEmpty()) {
            return this._view[this._len-1];
        }
        return null;
    }

    clear() {
        if(!this.isEmpty()) {
            for(let i = 0; i < this._view.length; i++) {
                this._view[i] = undefined;
            }
        }
        this._len = 0;
    }

}

const stack = new Stack(5);
stack.print(true);