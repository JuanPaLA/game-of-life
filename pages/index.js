import { StyledMain } from "../styles/Globals"
import ControlBar from "../components/controls/Controls"
import Grid from "../components/grid/Grid"
import Status from "../components/status/Status"
import ModalControl from "../components/controls/ModalControl"
export default function Home() {
  return (
    <StyledMain>
      <ControlBar />
      <Grid />
      <Status />
      <ModalControl />
    </StyledMain>
  )
}
