/* eslint-disable class-methods-use-this */

/* eslint-disable react/jsx-no-constructed-context-values */

/* eslint-disable no-underscore-dangle */
import { HomeAssistant } from 'custom-card-helpers'
import { render } from 'preact'
import { StyleSheetManager } from 'styled-components'

import { Config } from 'types'

import Card from './card'

// TODO:
// * Switch to Tailwind or Twind

class BoilerplateCard extends HTMLElement {
  private _hass: HomeAssistant | undefined

  private _config: Config

  set hass(hass: HomeAssistant | undefined) {
    this._hass = hass
    this._render()
  }

  setConfig(config: any) {
    this._config = config
    this._render()
  }

  private _render = () => {
    render(
      <StyleSheetManager target={this}>
        {/* @ts-ignore */}
        <ha-card>
          <Card
            hass={this._hass}
            config={this._config}
          />
          {/* @ts-ignore */}
        </ha-card>
      </StyleSheetManager>,
      this
    )
  }

  getCardSize() {
    return 1
  }
}

customElements.define('boilerplate-card', BoilerplateCard)

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    customCards?: any[]
  }
}

window.customCards = window.customCards || []
window.customCards.push({
  type: 'boilerplate-card',
  name: 'Boilerplate Card',
  preview: false,
  description: 'Boilerplate Card x React',
})
