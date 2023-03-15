import {
  Filter,
  SelectedButton,
  NotSelectedButton,
  FilterImg,
  SelectedFilterLane,
  NotSelectedFilterLane,
  Toggle,
  ToggleCircleRight,
  ToggleCircleLeft
} from "./styles"

// Change the filter between payment and free activities
export function PaidFilterFree(props) {
  return (
    <Filter onClick={props.onClick}>
      <SelectedButton>
        <FilterImg src="/images/dollar.png" alt="" />
        <SelectedFilterLane />
      </SelectedButton>
      <Toggle>
        <ToggleCircleLeft />
      </Toggle>
      <NotSelectedButton>
        <FilterImg src="/images/dollar.png" alt="" />
      </NotSelectedButton>
    </Filter>
  )
}

export function PaidFilterPayment(props) {
  return (
    <Filter onClick={props.onClick}>
      <NotSelectedButton>
        <FilterImg src="/images/dollar.png" alt="" />
        <NotSelectedFilterLane />
      </NotSelectedButton>
      <Toggle>
        <ToggleCircleRight />
      </Toggle>
      <SelectedButton>
        <FilterImg src="/images/dollar.png" alt="" />
      </SelectedButton>
    </Filter>
  )
}