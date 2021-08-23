let grid = [
    ["A","B","B"],
    ["C","D","A"],
    ["B","C","D"]

]

let word = 'BACB'

var exist = function(board, word) {
    
    let result = false;
    let maxRows = board.length
    let maxColumns = board[0].length
    
    const dfs = (r,c, str, grid) => {
        if ( r < 0 || r >= maxRows || c < 0 || c >= maxColumns || grid[r][c] === 0) {return}
        
        console.log(r,c,str,result)

        let temp = grid[r][c]
        
        if (str[0] === grid[r][c]){
            grid[r][c] = 0;
            if (str.length === 1) {
                result = true;
                return
            }
            str = str.slice(1) ? str.slice(1) : ''
            dfs(r+1, c, str, grid);
            dfs(r-1, c, str, grid);
            dfs(r, c+1, str, grid);
            dfs(r, c-1, str, grid);
            
        }
        
        grid[r][c] = temp;
        
    }
    
    for ( let i = 0; i < maxRows; i++){
        for (let j = 0; j < maxColumns; j++){
            if (board[i][j] === word[0]) dfs(i,j,word,board)
        }
    }
    
    return result
    
};

console.log(exist(grid, word))