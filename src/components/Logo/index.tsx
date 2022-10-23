import { Image, ImgProps, Text } from "@chakra-ui/react";
import '@fontsource/dancing-script/400.css'
import redirectTo from "../../functions/redirectTo";

interface LogoProps extends ImgProps {}

export default function Logo({...rest} : LogoProps) {
  return (
    <Image
        src={'/logo.png'}
        w={'15rem'}
        cursor={'pointer'}
        onClick={()=>redirectTo('/')}
        {...rest}
    />
  )
}

/* OLD LOGO
<Text
    as={'h1'}
    fontFamily={'Dancing Script'}
    textAlign={'center'}
    lineHeight={1}
    userSelect={'none'}
    cursor={'pointer'}
    onClick={ () => redirectTo('/') }
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
*/