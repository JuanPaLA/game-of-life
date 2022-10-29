import React from 'react'
import { Context } from '../../Context';
import { StyledNav} from './Status.module';
export default function Status() {
    const context = React.useContext(Context);
    const { count } = context;

  return (
    <StyledNav>
        {/* Cicles: {count} */}
    </StyledNav>
  )
}
