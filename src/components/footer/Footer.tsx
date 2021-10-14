import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { SocialMediaLinks } from './SocialMediaLinks'

const Footer = () => (
  <Box w='100%' bg="#02689D" position='absolute' left={0} bottom={0}>
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="6"
      bg="#02689D"
      color="#FFF"
      px={{
        base: '4',
        md: '8',
      }}
    >
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Copyright
            alignSelf={{
              base: 'center',
              sm: 'start',
            }}
          />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  </Box>
)

export default Footer