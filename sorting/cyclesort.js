import {mySort} from "../imports/arrayHelper";

const cyclesort = (array) => {
    const size = array.length;
    for (let start = 0; start <= size - 2; start++) {
        let element = array[start];
        let position = start;
        for (let i = start + 1; i < size; i++)
            if (array[i] < element)
                position++;
        if (position === start)
            continue;
        while (element === array[position])
            position++;
        if (position !== start)
            [element, array[position]] = [array[position], element];
        while (position !== start) {
            position = start;
            for (let i = start + 1; i < size; i++)
                if (array[i] < element)
                    position++;
            while (element === array[position])
                position++;
            if (element !== array[position])
                [element, array[position]] = [array[position], element]
        }
    }
    return array;
};

mySort(cyclesort);