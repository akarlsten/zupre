import { useCallback } from 'preact/hooks'

import { useStore } from '@store'

const useEntities = (entityIds: string[]) => {
  const store = useStore()
  return store(
    useCallback(
      ({ hass }) => Object.fromEntries(entityIds.map((id) => [id, hass?.states[id]])),
      [entityIds]
    )
  )
}
export default useEntities
