import { HomeAssistant } from 'custom-card-helpers'
import { create } from 'zustand'

import { Config } from 'types'

import createStoreContext from '@store/createStoreContext'

interface Store {
  hass?: HomeAssistant
  config?: Config
  setHass: (hass: Store['hass']) => void
  setConfig: (config: Store['config']) => void
}

const createStore = () =>
  create<Store>((set) => ({
    hass: null,
    config: null,
    setHass: (hass) => set(() => ({ hass })),
    setConfig: (config: Config) => set(() => ({ config })),
  }))

const [StoreProvider, useStore] = createStoreContext<Store>(createStore)

export { StoreProvider, useStore }
