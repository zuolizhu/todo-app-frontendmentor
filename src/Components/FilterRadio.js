import useStore from '../store'

export default function FilterRadio() {
  // Fake radio buttons made from button
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  const handleRadioButtonClick = (event) => {
    const clickedOption = event.target.dataset.option
    if (clickedOption === 'all') {
      setFilter('')
    } else {
      setFilter(clickedOption)
    }
  }

  return (
    <div className="radios">
      <button 
        onClick={handleRadioButtonClick}
        data-option="all" 
        className={`radio-input t-radio-label${filter === '' ? ' checked': ''}`}>All</button>
      <button 
        onClick={handleRadioButtonClick}
        data-option="active" 
        className={`radio-input t-radio-label${filter === 'active' ? ' checked': ''}`}>Active</button>
      <button 
        onClick={handleRadioButtonClick}
        data-option="completed" 
        className={`radio-input t-radio-label${filter === 'completed' ? ' checked' : ''}`}>Completed</button>
    </div>
  )
}
