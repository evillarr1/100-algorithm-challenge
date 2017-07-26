class Search {
    binarySearch(list, value) {
        let left = 0;
        let right = list.length - 1;

        while (left <= right) {
            let middle = Math.floor((right + left) / 2);

            if (value < list[middle]) {
                right = middle - 1;
            } else if (value > list[middle]) {
                left = middle + 1;
            } else {
                return middle;
            }
        }

        return -1;
    }
}

module.exports = Search;
