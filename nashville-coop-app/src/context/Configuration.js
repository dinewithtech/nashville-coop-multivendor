import React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

import { getConfiguration } from '../apollo/queries'

const GETCONFIGURATION = gql`
  ${getConfiguration}
`

const ConfigurationContext = React.createContext({})

export const ConfigurationProvider = props => {
  const { loading, data, error } = useQuery(GETCONFIGURATION)

  const WEB_CLIENT_ID = '709101306942-a0ln13c4mnmc9pcb90qajm0joh177qr9.apps.googleusercontent.com';
  const ANDROID_CLIENT_ID = '709101306942-9fhrtlql0nr2tnlclskhs8qdomq9p45q.apps.googleusercontent.com';
  const IOS_CLIENT_ID = '709101306942-f02dcd6f5bnk1hsrrif7a9u4q71qrqur.apps.googleusercontent.com';

  const configuration =
    loading || error || !data?.configuration
      ? {
          currency: '',
          currencySymbol: '',
          deliveryRate: 10,
          costType: 'perKM',
          expoClientID: WEB_CLIENT_ID,
          androidClientID:ANDROID_CLIENT_ID,
          iOSClientID:IOS_CLIENT_ID
        }
      : data?.configuration
  
  return (
    <ConfigurationContext.Provider value={configuration}>
      {props?.children}
    </ConfigurationContext.Provider>
  )
}
export const ConfigurationConsumer = ConfigurationContext.Consumer
export default ConfigurationContext
