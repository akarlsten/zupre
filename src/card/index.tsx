import { FunctionComponent } from 'preact'
import styled from 'styled-components'

import { useConfig, useEntity, useHass, useUser } from 'hooks'

const Card: FunctionComponent = () => {
  const sun = useEntity('sun.sun')
  const me = useEntity('person.adam_karlsten')
  const config = useConfig()

  return (
    <Root>
      <Text>
        <b>Hi, {me?.attributes?.friendly_name}!</b>
      </Text>
      <Text>
        <b>{sun?.attributes.friendly_name}</b>
      </Text>
      <Text>{sun?.state}</Text>
      <pre>{JSON.stringify(config || {}, null, 2)}</pre>
    </Root>
  )
}

export default Card

const Text = styled.p`
  & > b {
    color: var(--primary-color);
    font-weight: bold;
  }
`

const Root = styled.div`
  padding: 1rem;
`
