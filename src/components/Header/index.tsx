import { Flex, Text } from "@chakra-ui/react";
import HeaderItem from "../HeaderItem";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <Flex
        h={250}
        w={'100%'}
        bgGradient={"linear(to-b, lightPink, darkPink)"}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        px={10}
        gap={10}
    >
        <Logo/>
        <Flex
            align={'center'}
            gap={5}
        >   
            <HeaderItem
                iconName={'akar-icons:facebook-fill'}
                label={'Facebook'}
                onClick={ () => window.open('https://www.facebook.com/viniebrun', '_blank') }
            />
            <HeaderItem
                iconName={'akar-icons:instagram-fill'}
                label={'Instagram'}
                onClick={ () => window.open('https://www.instagram.com/ivaniviniebrun/', '_blank') }
            />
            <SearchBar/>
            <HeaderItem 
                iconName={'bi:cart'} 
                label={'Carrinho'}
                onClick={()=>{}}
                badgeCounter={0}
            />
            <HeaderItem
                iconName={'bi:headset'}
                label={'Atendimento'}
                onClick={()=>{}}
            />
        </Flex>
        
    </Flex>
  )
}
