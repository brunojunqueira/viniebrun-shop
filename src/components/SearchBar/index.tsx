import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Icon } from '@iconify/react'

export default function SearchBar() {
  return (
    <InputGroup>
        <Input 
            w={500}
            bg={'white'}
            color={'darkPink'}
            placeholder='Procurando alguma coisa especial?'
            focusBorderColor={'none'}
        />
        <InputRightElement 
          children={
            <Icon 
              color={'darkPink'}
              icon="ant-design:search-outlined" 
            />
          } 
        />
    </InputGroup>
  )
}
