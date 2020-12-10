// Filters reducer
// Default state defined in variable

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or name
  startDate: undefined,
  endDate: undefined,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      }
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name',
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
    default:
      return state
  }
}

export default filtersReducer
