namespace KnightTour {

/*
 * https://www.geeksforgeeks.org/the-knights-tour-problem
 *
 * https://www.tutorialspoint.com/data_structures_algorithms/knight_tour_problem.htm
 *
 * https://en.wikipedia.org/wiki/Knight%27s_tour
 * - from general https://en.wikipedia.org/wiki/Hamiltonian_path_problem
 */
type blopType = number[][]
const knightMoves: blopType = [
    //[2, 1], [2, -1], [-2, 1], [-2, -1],
    //[1, 2], [1, -2], [-1, 2], [-1, -2]

    [0, 1], [0, -1], [-1, 0], [1, 0]
]
var sizen: number = 3

// board
function init(): blopType {
    let board: blopType = []
    for (let i: number = 0; i < sizen; i++) {
        board[i] = []
        for (let j: number = 0; j < sizen; j++) {
            board[i][j] = 0
        }
    }
    return board
}

// print
function print_it(board: blopType) {
    board.forEach((row: any) => {
        console.log(row.join(','))
    })
    console.log(".")
}

function canMove(board: blopType, x: number, y: number): boolean
{
    return (x >= 0 && x < sizen && y >= 0 && y < sizen && board[x][y] === 0)
}

function log(txt: string): void
{
    console.log(txt)
}

// recurse
function doMove(board: blopType = [], x: number, y: number, num: number): boolean
{
    log('-> x'+x+', '+'y'+y+' num'+num)

    //SOLVEx
    //board[x][y] = num

    if (sizen*sizen === num) {
        log('finished: num'+num)
        print_it(board)
        return true
    }

    for (let i: number = 0; i < knightMoves.length; i++) {
// knightMoves.forEach((kmove: number[]) => { // ERROR local return !!!
        let next_x = x + knightMoves[i][0]
        let next_y = y + knightMoves[i][1]

        if (canMove(board, next_x, next_y)) {
            //SOLVEnext
            board[next_x][next_y] = num+1
            print_it(board)
            log('canmove  x'+next_x+',y'+next_y+' with '+(num+1))

            if (doMove(board, next_x, next_y, num+1)) {
                log('ok for x'+next_x+',y'+next_y)

                return true
            } else {
                //SOLVEnext
                board[next_x][next_y] = 0 // backtracking
                log('reverse x'+next_x+',y'+next_y)
            }
        }
    }

    //SOLVEx
    //board[x][y] = 0 // backtracking
    //log('reverse x'+x+',y'+y+' on '+num)

    //console.log('false')
    return false
}

function solve(): void
{
    let board: blopType = init()

    if (doMove(board, 1, 0, 0)) { // recurse until end
        console.log("OK ")
        //print_it(board)
    } else {
        console.log("No solution ")
        //print_it(board)
    }
}

solve()

} //ns