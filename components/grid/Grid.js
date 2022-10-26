import React, {useEffect, useState} from 'react';
import Cell from '../cell/Cell';
import {  StyledGrid, StyledRow } from './Grid.module';
import { Context } from '../../Context';


function grid_setter(x_,y_){
    const INITIAL_STATE = []
    for (let i = 0; i < y_; i++) {
        INITIAL_STATE.push([])
        for (let j = 0; j < x_; j++) {
          var aux = {
            [`${i}-${j}`]: {
              key_: `${i}-${j}`,
              alive: false,
              x: j,
              y: i
            }
          }
          INITIAL_STATE[i].push(aux)
        }
      }
    return INITIAL_STATE;
}


export default function Grid() {    
    const context = React.useContext(Context);
    const { flag, setFlag, status, setStatus } = context;
    const [grid, setGrid] = useState(null);
    const [flag_, setFlag_] = useState(false);
    const [_x, setX] = useState(10);
    const [_y, setY] = useState(16);
    
    const handleGridState = (x, y, alive) => {        
        const newGrid = [...grid]
        newGrid[y][x][`${y}-${x}`].alive = alive;
        setGrid(newGrid)        
    }

    const findNeighbors = (x, y) => {
        const neighbors = []
        const newGrid = [...grid]
        let top        
        let bottom;
        let left;
        let right;
        y === 0 ? top = 9 : top = y - 1;
        y === _y - 1 ? bottom = 0 : bottom = y + 1;
        x === 0 ? left = 5 : left = x - 1;
        x === _x - 1 ? right = 0 : right = x + 1;
        const top_left = [top, left]
        const top_right = [top, right]
        const bottom_left = [bottom, left]
        const bottom_right = [bottom, right]
        const top_row = [top, x]
        const bottom_row = [bottom, x]
        const left_col = [y, left]
        const right_col = [y, right]
        const neighbors_coords = [top_left, top_right, bottom_left, bottom_right, top_row, bottom_row, left_col, right_col]
        neighbors_coords.forEach(coord => {
            const [y, x] = coord
            // if (y >= 0 && y < 10 && x >= 0 && x < 6) {
                neighbors.push(newGrid[y][x][`${y}-${x}`])
            // }
        })
        //count alive and not alive neighbors
        let alive_neighbors = 0
        let dead_neighbors = 0;
        neighbors.forEach(neighbor => {
            if (neighbor.alive) {
                alive_neighbors += 1
            }else{
                dead_neighbors += 1
            }
        })
        
        console.log(`alive: ${alive_neighbors}, dead: ${dead_neighbors}`);
        console.table(neighbors);
        return [neighbors, alive_neighbors, dead_neighbors]
    }

    const setNextState = (x,y) => {        
        let top        
        let bottom;
        let left;
        let right;
        y === 0 ? top = 9 : top = y - 1;
        y === 9 ? bottom = 0 : bottom = y + 1;
        x === 0 ? left = 5 : left = x - 1;
        x === 5 ? right = 0 : right = x + 1;
        
        let top_left = [top, left]
        let top_right = [top, right]
        let bottom_left = [bottom, left]
        let bottom_right = [bottom, right]
        let top_row = [top, x]
        let bottom_row = [bottom, x]
        let left_col = [y, left]
        let right_col = [y, right]
        
        let neighbors_coords = [top_left, top_right, bottom_left, bottom_right, top_row, bottom_row, left_col, right_col]        

        let neighbors = [];
        let newGrid = [...grid];
        try{
            neighbors_coords.forEach(coord => {
                let [y, x] = coord;           
                neighbors.push(newGrid[y][x][`${y}-${x}`]);            
            });
        }catch(e){
            console.log('fail on: ' + x + ' ' + y);
            console.log(e);
        }

        let alive_neighbors = 0;

        let alive = newGrid[y][x][`${y}-${x}`].alive;

        neighbors.forEach(neighbor => {
            if (neighbor.alive) {
                alive_neighbors += 1
            }
        })

        let next_state;
        if (alive) {
            if (alive_neighbors < 2) {
                next_state = false;
            }else if (alive_neighbors === 2 || alive_neighbors === 3) {
                next_state = true;
            }else if (alive_neighbors > 3) {
                next_state = false;
            }
        }else{
            if (alive_neighbors === 3) {
                next_state = true;
            }else{
                next_state = false;
            }
        }

        // return next_state;
        newGrid[y][x][`${y}-${x}`].alive = next_state;
        return newGrid;        
    }

    const handleNextState = () => {
        let newGrid = [...grid];
        for (let i = 0; i < _y; i++) {
            for (let j = 0; j < _x; j++) {
                newGrid = setNextState(j,i);
            }
        }
        setGrid(newGrid);
    }
    
    useEffect(() => {
        if(!flag_){
            let newGrid = grid_setter(_x, _y);
            setGrid(newGrid)
            setFlag_(true)
        }
    }, [flag_])
    
    useEffect(() => {
        if(status !== -1 && flag){
            const interval = setInterval(() => {
                handleNextState();
            }, 500);
            return () => clearInterval(interval);
        }
    }, [flag, status])

  return (    
    <>
    <StyledGrid>
        {
          flag_ && grid.map((row, i) => (
            <StyledRow key={i}>
              {row.map((cell, j) => (
                <div key={j}>
                  <Cell 
                    key_={Object.keys(cell)[0]} 
                    cell={Object.values(cell)[0]} 
                    handler={handleGridState}
                    finder={findNeighbors}
                />
                </div>
              ))}
            </StyledRow>
          ))
        }
      </StyledGrid>
      <button onClick={()=>{findNeighbors(0, 0)}}>botonerA</button>
    </>
  )
}


