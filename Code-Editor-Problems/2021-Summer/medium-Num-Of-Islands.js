let islands = [
[1,1,0,0,1,0,1],
[0,1,0,1,1,0,1],
[0,0,0,0,0,0,0],
[0,1,1,0,0,0,0],
[1,0,1,0,0,1,0],
[1,0,0,0,1,1,0]
]

const numIslands = (grid) => {

    let islands = 0
    let maxRows = grid.length
    let maxColumns = grid[0].length
    
    const dfs = (grid,r,c) => {
        //base case to break out of our recursive function
        if ( r < 0 || c < 0 || r >= maxRows || c >= maxColumns || grid[r][c] === 0) return
        
        //the core 'work' -- converting 1 >> 0
        grid[r][c] = 0

        //recursively invoking the dfs function to adjacent neighbors
        dfs(grid,r-1,c)
        dfs(grid,r+1,c)
        dfs(grid,r,c-1)
        dfs(grid,r,c+1)
    }   

    for ( let i = 0; i < maxRows; i++){
        for (let j = 0; j < maxColumns; j++) {
            if (grid[i][j] === 1){
                islands+= 1
                dfs(grid, i, j)
            }
        }
    }
    
    return islands
}

console.log(numIslands(islands))



