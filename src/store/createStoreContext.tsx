import { ComponentChildren, type FunctionComponent, createContext } from 'preact'
import type { StoreApi, UseBoundStore } from 'zustand'

import { useContext, useState } from 'preact/hooks'

/**
 * Higher-order function to create a context provider and a custom hook for a given Zustand store.
 *
 * @param createStore - A factory function that creates a new Zustand store.
 * @returns A tuple containing the context provider and the custom hook.
 */
function createStoreContext<TState>(createStore: () => UseBoundStore<StoreApi<TState>>) {
  /**
   * React context created to provide the Zustand store to components.
   * This context will hold the Zustand store created by `createStore`.
   */
  const StoreContext = createContext<UseBoundStore<StoreApi<TState>>>(createStore())

  /**
   * React component that provides the Zustand store to its children components.
   * It uses the `createStore` function to create a store instance and provides it via `StoreContext`.
   */
  const StoreProvider: FunctionComponent = ({
    children,
  }: {
    children: ComponentChildren
  }) => {
    const [useStore] = useState(createStore)

    return <StoreContext.Provider value={useStore}>{children}</StoreContext.Provider>
  }

  /**
   * Custom hook that provides access to the Zustand store within components.
   * It uses `useContext` to access the store from `RowStoreContext` and returns the hook returned by the Zustand store.
   */
  const useStore = () => {
    const useZustandStore = useContext(StoreContext)

    return useZustandStore()
  }

  return [StoreProvider, useStore] as const
}

export default createStoreContext
