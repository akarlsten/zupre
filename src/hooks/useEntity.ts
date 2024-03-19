import { useCallback } from 'preact/hooks'

import store from 'store'

const useEntity = (entityId: string) =>
  store(useCallback(({ hass }) => hass?.states[entityId], [entityId]))

export default useEntity
