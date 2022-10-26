import React from 'react'
import { Context } from '../../Context';
import { StyledNav} from './Status.module';
export default function Status() {
    const context = React.useContext(Context);
    const { status } = context;

  return (
    <StyledNav>
        {status === -1 ? "Click Start to begin" : status === 0 ? "Click Start to resume" : "Click Stop to pause"}
    </StyledNav>
  )
}
