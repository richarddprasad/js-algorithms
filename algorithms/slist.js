// A singly-linked list implementation
// Sentinel nodes are used on both ends to simplify the code

function LinkedList() {

    // Helper class
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = new Node(null);
    let tail = new Node(null);
    head.next = tail;
    tail.next = null;

    // Add element to the end of the list
    this.append = function (element) {
        let node = new Node(element);
        let current;

        // Case 1: Empty list insertion



    };

    // Insert element at the specified position
    this.insert = function (position, element) {

    };

    // Remove an element from the list
    this.remove = function (element) {

    };

    // Remove an element from the specified position
    this.removeAt = function (position) {

    };

    // Return index of element in the list, -1 if not found
    this.indexOf = function (element) {

    };

    this.isEmpty = function () {
        return head.next === tail;
    };

    this.size = function () {

    };

    this.toString = function () {

    };

    this.print = function () {

    };

}


let list = new LinkedList();
console.log("List is empty: ", list.isEmpty());