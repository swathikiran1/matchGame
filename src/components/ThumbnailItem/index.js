import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickThumbnailItem} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnailBtn = () => {
    clickThumbnailItem(id)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailBtn}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
