import { useState } from 'react'

function useEditModeState() {
  const [isEditMode] = useState(true);

  return isEditMode;
}

export default useEditModeState