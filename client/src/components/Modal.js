import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useUtilityCtx } from "../context/UtilityProvider"

const Modal = () => {
  const { modalName, toggleModal } = useUtilityCtx()
  return (
    <div className='modal'>
      <section className='modal-body'>
        <button onClick={() => toggleModal('close', '')} className='modal-close'>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>Modal</h2> 
        <p>{modalName}</p>
      </section>
    </div>
  )
}

export default Modal
