import { HomeAssistant } from 'custom-card-helpers'
import { create } from 'zustand'

import { Config } from 'types'

import createStoreContext from 'store/createStoreContext'

// TODO: Implement/modify https://github.com/pmndrs/zustand/issues/128#issuecomment-1832321201

interface Store {
  hass?: HomeAssistant
  config?: Config
}
const store = create<Store>(() => ({}))

// const createStore = () => create<Store>(() => ({}))

// const [StoreProvider, useStore] = createStoreContext(createStore)

export default store
