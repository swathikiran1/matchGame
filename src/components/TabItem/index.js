import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabBtn = () => {
    clickTabItem(tabId)
  }

  const tabClsValue = isActive ? 'tab-btn1' : 'tab-btn2'

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${tabClsValue}`}
        onClick={onClickTabBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
