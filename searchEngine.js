const addSpace = (item) => {
    return item + " ";
};

const searchEngine = (input) => {
    const allLines = input.split(/\n/);

    for (let i = 0; i < allLines.length; i++) {
        let line = allLines[i];

        const numberOfItems = parseInt(line.split(" ")[0]);
        const numberOfQueries = parseInt(line.split(" ")[1]);

        if (!isNaN(numberOfItems) && !isNaN(numberOfQueries)) {
            const testCase = allLines.splice(
                i + 1,
                numberOfItems + numberOfQueries
            );
            const databaseItems = testCase
                .splice(0, numberOfItems)
                .map(addSpace);
            const queries = testCase.splice(0, numberOfQueries).map(addSpace);

            const arr = Array(numberOfQueries).fill(0);
            for (let j = 0; j < queries.length; j++) {
                for (let k = 0; k < databaseItems.length; k++) {
                    console.log(databaseItems[k].indexOf(queries[j]) >= 0);
                    const queryExists =
                        databaseItems[k].indexOf(queries[j]) >= 0;
                    if (queryExists) {
                        arr[j]++;
                    }
                }
            }
            console.log(arr);
        }
    }
};

// class Case {
//     constructor(N, Q) {
//         this.N = N;
//         this.Q = Q;
//     }
// }

// function inputHandler(input) {
//     const inputArr = input.split("\n");
//     const inputObject = {
//         T: parseInt(inputArr[0]),
//         Cases: [],
//     };
//     let i = 1;
//     while (i < inputArr.length) {
//         let [numOfN, numOfQ] = inputArr[i].split(" ");
//         numOfN = parseInt(numOfN);
//         numOfQ = parseInt(numOfQ);
//         const N = [];
//         const Q = [];
//         for (let j = 1; j <= numOfN; j++) {
//             N.push(inputArr[i + j]);
//         }
//         for (let k = 1; k <= numOfQ; k++) {
//             Q.push(inputArr[i + numOfN + k]);
//         }
//         const kase = new Case(N, Q);
//         inputObject.Cases.push(kase);
//         i += numOfN + numOfQ + 1;
//     }
//     return inputObject;
// }

// function searchEngine(input) {
//     const inputObject = inputHandler(input);
//     console.log(inputObject.Cases)

//     const output = "Case 1:\n2\n2\n3\n3\n0\n1\nCase 2:\n1\n1\n3";
//     return output;
// }

searchEngine(`2
3 6
apple lettuce limes avocado
onion cranberries apple limes
escarole corn28corn apple lettuce limes avocado
limes avocado
apple lettuce
limes
apple
app
apple limes
3 3
apple iphone se 2
iphone 11 max pro
iphone 11 pro max
apple iphone
max pro
iphone`);
