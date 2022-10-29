import React, { useEffect, useState, useRef } from 'react';
import Cell from '../cell/Cell';
import { GridContent, StyledGrid, StyledRow, } from './Grid.module';
import { Context } from '../../Context';

function grid_setter(x_, y_, random) {
  const INITIAL_STATE = []
  for (let i = 0; i < y_; i++) {
    INITIAL_STATE.push([])
    for (let j = 0; j < x_; j++) {
      var aux = {
        [`${i}-${j}`]: {
          key_: `${i}-${j, random}`,
          alive: random ? Math.floor(Math.random() * 10) % 2 === 0 : false,            
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
  const { 
    flag,
    setFlag,
    count,
    setCount,
    _x,    
    _y,
    delay,
    startrandom,
  } = context;
  const [grid, setGrid] = useState(null);
  const [flag_, setFlag_] = useState(false);

  const handleGridState = (y, x, alive) => {
    const newGrid = [...grid];
    newGrid[y][x][`${y}-${x}`].alive = alive;
    setGrid(newGrid);
  }

  const getAliveNeighbors = (y, x) => {
    try{
      const neighbors = []
      const newGrid = [...grid]
      let top
      let bottom;
      let left;
      let right;
      y === 0 ? top = _y - 1 : top = y - 1;
      y === _y - 1 ? bottom = 0 : bottom = y + 1;
      x === 0 ? left = _x - 1 : left = x - 1;
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
        neighbors.push(newGrid[y][x][`${y}-${x}`])
      })    
      let alive_neighbors = 0
      neighbors.forEach(neighbor => {
        if (neighbor.alive) {
          alive_neighbors += 1
        }
      })    
      return alive_neighbors;
    }catch(e){
      console.log(e)
    }
  }

  const handleNextState = () => {    
    let aux = grid.map((row, y) => {
      return row.map((cell, x) => {
        return {
          [`${y}-${x}`]: {
            ...cell[`${y}-${x}`],
            alive: applyRules(getAliveNeighbors(y, x), cell[`${y}-${x}`].alive)
          }
        }
      })
    })
    if(flag) {setGrid(aux);}
  }

  const applyRules = (alives, alive) => {
    if (alive) {
      if (alives < 2) {
        return false;
      } else if (alives === 2 || alives === 3) {
        return true;
      } else if (alives > 3) {
        return false;
      }
    } else {
      if (alives === 3) {
        return true;
      } else {
        return false;
      }
    }
  }

  useEffect(() => {
    if (!flag_) {
      setGrid(grid_setter(_x, _y, startrandom));
      setFlag_(true)
    }
  }, [])

  useEffect(() => {    
      setFlag(false)
      setGrid(grid_setter(_x, _y, startrandom));
      // setFlag(true)
  }, [_x, _y, startrandom])

  useInterval(() => {
    if(flag){  
      handleNextState() ;
      setCount(count + 1);
    }    
  }, delay)


  return (
    <GridContent>
      <StyledGrid>
        {
          flag_ && grid.map((row, i) => (
            <StyledRow key={i}>
              {row.map((cell, j) => (
                <Cell
                  key={`${i}-${j}`}
                  cell={cell[`${i}-${j}`]}
                  handler={handleGridState}
                />
              ))}
            </StyledRow>
          ))
        }
      </StyledGrid>            
    </GridContent>
  )
}

function useInterval(callback, delay) {
  const context = React.useContext(Context);
  const { flag } = context;

  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}