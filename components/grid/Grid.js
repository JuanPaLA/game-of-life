import React, { useEffect, useState, useRef } from 'react';
import Cell from '../cell/Cell';
import { GridContent, StyledGrid, StyledRow, StyledInputs } from './Grid.module';
import { Context } from '../../Context';


function grid_setter(x_, y_) {
  const INITIAL_STATE = []
  for (let i = 0; i < y_; i++) {
    INITIAL_STATE.push([])
    for (let j = 0; j < x_; j++) {
      var aux = {
        [`${i}-${j}`]: {
          key_: `${i}-${j}`,
          alive: Math.floor(Math.random() * 10) % 2 === 0,            
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
  const { flag, count, setCount, setFlag } = context;
  const [grid, setGrid] = useState(null);
  const [flag_, setFlag_] = useState(false);
  const [_x, setX] = useState(10);
  const [_y, setY] = useState(16);
  const [delay, setDelay] = useState(1000);

  const handleGridState = (y, x, alive) => {
    const newGrid = [...grid]
    newGrid[y][x][`${y}-${x}`].alive = alive;
    setGrid(newGrid)
  }

  const getAliveNeighbors = (y, x) => {
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
    //count alive and not alive neighbors
    let alive_neighbors = 0
    neighbors.forEach(neighbor => {
      if (neighbor.alive) {
        alive_neighbors += 1
      }
    })

    const current_cell = newGrid[y][x][`${y}-${x}`]

    console.log(alive_neighbors, applyRules(alive_neighbors, current_cell.alive));
    return alive_neighbors;
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
    setGrid(aux)
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

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  useEffect(() => {
    if (!flag_) {
      setGrid(grid_setter(_x, _y));
      setFlag_(true)
    }
  }, [])

  useEffect(() => {
    // if (!flag_) {
      setFlag(false)
      setGrid(grid_setter(_x, _y));
      setFlag(true)
    // }
  }, [_x, _y])

  useInterval(() => {
    flag && handleNextState() 
    flag && setCount(count + 1)
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
      <StyledInputs>
        <fieldset>
          <legend>Set the delay</legend>
          <div>            
            <input type="range" min="0" max="20000" value={delay} onChange={handleDelayChange} /><p>{delay} ms</p>
          </div>
        </fieldset>        
      </StyledInputs>
      <StyledInputs>
        <fieldset>
          <legend>Set the AXIS</legend>
          <div>
            
          <p>y: {_y}</p><input type="range" min="5" max="25" value={_y} onChange={(e)=>{setY(e.target.value)}} />          
          <p>x: {_x}</p><input type="range" min="10" max="100" value={_x} onChange={(e)=>{setX(e.target.value)}} />
          </div>
        </fieldset>
      </StyledInputs>
    </GridContent>
  )
}

function useInterval(callback, delay) {
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