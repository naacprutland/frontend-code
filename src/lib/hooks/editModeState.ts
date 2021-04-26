import { useState } from 'react'

function useEditModeState() {
  const [isEditMode] = useState(false);

  return isEditMode;
}

export default useEditModeState