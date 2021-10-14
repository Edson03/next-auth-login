import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa'

const SocialMediaLinks = () => (
  <ButtonGroup variant="ghost" color="#FFF">
    <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaFacebookF fontSize="20px" />} />
    <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
    <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
  </ButtonGroup>
)

export { SocialMediaLinks }