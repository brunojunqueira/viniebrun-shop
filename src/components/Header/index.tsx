import { Flex, Text } from "@chakra-ui/react";
import HeaderItem from "./HeaderItem";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import redirectTo from "../../functions/redirectTo";
import useCartContext from "../../contexts/CartContext";

export default function Header() {

    const { items } = useCartContext();

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
                <Flex
                    align={'center'}
                >
                    <HeaderItem
                        iconName={'akar-icons:facebook-fill'}
                        label={'Facebook'}
                        onClick={ () => redirectTo('https://www.facebook.com/viniebrun', true) }
                    />
                    <HeaderItem
                        iconName={'akar-icons:instagram-fill'}
                        label={'Instagram'}
                        onClick={ () => redirectTo('https://www.instagram.com/ivaniviniebrun/', true) }
                    />
                </Flex>
                
                <SearchBar/>

                <Flex
                    align={'center'}
                >
                    <HeaderItem 
                        iconName={'bi:cart'} 
                        label={'Carrinho'}
                        onClick={ ()=>redirectTo('/carrinho') }
                        badgeCounter={items.length}
                    />
                    <HeaderItem
                        iconName={'bi:headset'}
                        label={'Atendimento'}
                        onClick={ ()=> redirectTo('/atendimento') }
                    />
                </Flex>
            </Flex>
            
        </Flex>
    )
}
