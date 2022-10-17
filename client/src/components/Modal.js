import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useUtilityCtx } from "../context/UtilityProvider"
import { useOutsideClick } from '../hooks/useOutsideClick'
import HowToPlay from './HowToPlay'
import Settings from './Settings'
import Statistics from './Statistics'

const Modal = () => {
  const { modalName, toggleModal } = useUtilityCtx()
  const modalRef = useRef()
  useOutsideClick(modalRef, () => toggleModal('close', ''))

  let displayedModal = '' 
  switch(modalName){
    case 'help':
      displayedModal = <HowToPlay />
      break;
    case 'settings':
      displayedModal = <Settings />
      break;
    case 'stats':
      displayedModal = <Statistics />
      break;
    default: 
      break;
  }

  return (
    <div className='modal'>
      <section className='modal-body' ref={modalRef}>
        <button onClick={() => toggleModal('close', '')} className='modal-close'>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>Modal</h2> 
        {displayedModal}
      </section>
    </div>
  )
}

export default Modal
