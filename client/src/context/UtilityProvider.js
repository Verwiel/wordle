// Provider to handle utility fnctions such as modal toggles
import { createContext, useState, useContext } from 'react'

const utilityContext = createContext()

export const useUtilityCtx = () => useContext(utilityContext)

export const UtilityProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalName, setModalName] = useState('')

  const toggleModal = (selectedModal, action) => {
    // selected modal can be: help, stats, or settings
    if(action === 'open'){
      setModalName(selectedModal)
      setModalOpen(true)
    } else if(action === 'close'){
      setModalOpen(false)
      setModalName('')
    }
  }

  return (
    <utilityContext.Provider value={{
      modalOpen,
      modalName,
      toggleModal
    }}>
      {children}
    </utilityContext.Provider>
  )
}
