import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://mosaico.cdn.prismic.io/api/v2'
export const accessToken = 'MC5YXzNVbHhFQUFDSUFiLWdK.77-9GS7vv71ea0x7P--_ve-_vUN677-9Xe-_vSV7BGdF77-9MO-_vQQXXe-_ve-_vUJj77-9'

// Client method to query documents from the Prismic repo
const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export default Client 