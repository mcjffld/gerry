

const world = [
    [-3,0,6,1,-5,3],
    [0,2,-6,-8,5,4],
    [8,2,-3,5,-2,-1],
    [-9,3,-7,-5,-7,1],
    [8,9,7,-4,-6,4],
    [-4,7,-2,6,-1,-8]
]

function getCount(x,y) {
    if (x < 0 || x > 5 || y < 0 || y > 5) {
        throw new Error("past the edge of the world")
    }
    return world[x][y]
}

function getDistrictCount(precinctList) {
    let districtCount = 0
    precinctList.forEach(precinct => {
        districtCount += getCount(precinct[0], precinct[1])
    });
    return districtCount
}

const districtList = [
    [ [0,0],[0,1],[1,0],[1,1] ],
    [ [0,2],[0,3],[1,2],[1,3] ],
    [ [0,4],[0,5],[1,4],[1,5] ],
    [ [2,0],[2,1],[3,0],[3,1] ],
    [ [2,2],[2,3],[3,2],[3,3] ],
    [ [2,4],[2,5],[3,4],[3,5] ],
    [ [4,0],[4,1],[5,0],[5,1] ],
    [ [4,2],[4,3],[5,2],[5,3] ],
    [ [4,4],[4,5],[5,4],[5,5] ],

]

let districtId = 1

let aCount = 0
let bCount = 0
let tieCount = 0
districtList.forEach(precinctList => {
    const count = getDistrictCount(precinctList)
    if (count < 0) {
        console.log(`Party A won District ${districtId} by ${Math.abs(count)} votes`)      
        aCount++
    } else if (count > 0) {
        console.log(`Party B won District ${districtId} by ${count} votes`)      
        bCount++
    } else {
        console.log(`District ${districtId} is a tie`)
        tieCount++
    }
    districtId++
})

console.log(`Party A won ${aCount} disticts`)
console.log(`Party B won ${bCount} disticts`)
console.log(`${tieCount} disticts are tied`)

if (aCount > bCount) {
    console.log("Party A won")
} else if (bCount > aCount) {
    console.log("Party B won")
} else {
    console.log("It is a tie")
}