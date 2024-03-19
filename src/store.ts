import { HomeAssistant } from 'custom-card-helpers'
import { create } from 'zustand'

import { Config } from 'types'

interface Store {
  hass?: HomeAssistant
  config?: Config
}

const store = create<Store>(() => ({}))

export default store
