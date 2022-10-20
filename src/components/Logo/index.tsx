import { Text } from "@chakra-ui/react";
import '@fontsource/dancing-script/400.css'

export default function Logo() {
  return (
    <Text
    as={'h1'}
    fontFamily={'Dancing Script'}
    textAlign={'center'}
    lineHeight={1}
>
    <Text
        as={'span'}
        fontSize={34}
        color={'darkPink'}
        textShadow={'whiteShadow'} 
    >
        Ateliê
    </Text>
    <br/>
    <Text
        as={'span'}
        fontSize={42}
        color={'babyBlue'}
        textShadow={'whiteShadow'}
        
    >
        Ivani Viniebrun
    </Text>
    <br/>
    <Text
        as={'span'}     
        fontSize={18}  
        color={'darkPink'} 
        textShadow={'whiteShadow'}  
    >
        Biscuit. Amor em cada detalhe
    </Text>
</Text>
  )
}
