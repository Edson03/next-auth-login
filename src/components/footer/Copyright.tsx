import { Text } from '@chakra-ui/layout'
import * as React from 'react'

const Copyright = (props: any) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} NextAuth.js custom login
  </Text>
)

export { Copyright }