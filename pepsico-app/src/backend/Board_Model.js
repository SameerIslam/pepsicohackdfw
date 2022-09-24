import uuid from "react-uuid";

export class Board{
    constructor(boardId, boardValues,remainingIndicies,dateCreated= new Date(), resolved = false){
        if (boardId === 0){
            this.boardId = uuid();
        }else{
            this.boardId = boardId;
        }

        this.boardValues = boardValues;
        this.remainingIndicies = remainingIndicies;
        this.dateCreated = dateCreated;
        this.resolved = resolved;
    }

    toMap(){
        return {
            boardId : this.boardId,
            boardValues : this.boardValues, 
            remainingIndicies : this.remainingIndicies,
            dateCreated : this.dateCreated,
            resolved : this.resolved,
        }
    }
    // SHITTER FUNCTION, CAN TAKE A REALLY LONG TIME IF THERE IS ONE THING LEFT, 
    // STORE ALL THE UNREVEALED TILES IN AN ARRAY AND SELECT + REMOVE FROM THAT
    //nvm fixed it
    revealRandom( randomVal ){ //function takes in a random integer value
        if (this.remainingIndicies.length === 0){
            this.resolved = true;
        }
        for (let i = 0; i<randomVal; i++){ // the function generates 'randomNum' amount of random numbers
            var revealIndex = Math.floor(Math.random()*this.remainingIndicies.length);
            this.boardValues[this.remainingIndicies[revealIndex]] = 1;
            this.remainingIndicies.splice(revealIndex,1);
        }
    }

}

export function fromBoardMap(boardMap){
    return new Board(boardMap['boardId'], boardMap ['boardValues'],boardMap['remainingIndicies'],boardMap['dateCreated'],boardMap['resolved']);
}
