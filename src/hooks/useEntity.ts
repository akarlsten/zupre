import { useCallback } from 'preact/hooks'

import { useStore } from '@store'

const useEntity = (entityId: string) => {
  const store = useStore()

  return store(useCallback(({ hass }) => hass?.states[entityId], [entityId]))
}

export default useEntity
