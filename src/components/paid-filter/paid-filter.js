import {
  Filter,
  LeftButton,
  RightButton,
  FilterImg,
  FilterLane,
  Toggle,
  ToggleCircle,
} from "./styles"

export function PaidFilter(props) {
  return (
    <Filter>
      <LeftButton>
        <FilterImg src="/images/dollar.png" alt="" />
        <FilterLane />
      </LeftButton>
      <Toggle>
        <ToggleCircle />
      </Toggle>
      <RightButton>
        <FilterImg src="/images/dollar.png" alt="" />
      </RightButton>
    </Filter>
  )
}
