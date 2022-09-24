export class Board{

    constructor(boardId, boardValues){
        if (boardId === 0){
            this.boardId = uuid();
        }else{
            this.boardId = boardId;
        }

        this.boardValues = boardValues;
    }

    toMap(){
        return {
            'boardId' : this.boardId,
            'boardValues' : this.boardValues 
        }
    }
    // SHITTER FUNCTION, CAN TAKE A REALLY LONG TIME IF THERE IS ONE THING LEFT, 
    // STORE ALL THE UNREVEALED TILES IN AN ARRAY AND SELECT + REMOVE FROM THAT
    revealRandom( randomVal ){ //function takes in a random integer value
        for (let i = 0; i<randomVal; i++){ // the function generates 'randomNum' amount of random numbers
            revealIndex = Math.floor(Math.random()*20);
            if (boardValues[randomVal] === 0){
                boardValues[randomVal] = 1; //if the tile isin't already revealed, then revealed it
            }else{
                i --; //if it the tile is already flipped over, then just generate another random number
            }
        }
    }

}

export function fromBoardMap(boardMap){
    return new Board(boardMap['boardId'], boardMap ['boardValues']);
}
