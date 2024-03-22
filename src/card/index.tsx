import { HomeAssistant } from 'custom-card-helpers'

import { useEffect } from 'preact/hooks'

import { Config } from '@types'

import { StoreProvider, useStore } from '@store'

import Card from '@components/Card'

interface StoreProps {
  hass: HomeAssistant
  config: Config
}

const StoreWrapper = ({ hass, config }: StoreProps) => {
  const store = useStore()
  const setHass = store((s) => s.setHass)
  const setConfig = store((s) => s.setConfig)

  useEffect(() => {
    setHass(hass)
  }, [hass])

  useEffect(() => {
    setConfig(config)
  }, [config])

  return <Card />
}

const StoreProviderWrapper = ({ hass, config }: StoreProps) => (
  <StoreProvider>
    <StoreWrapper
      hass={hass}
      config={config}
    />
  </StoreProvider>
)

export default StoreProviderWrapper
