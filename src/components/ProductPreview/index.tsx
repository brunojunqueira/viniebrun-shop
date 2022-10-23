import { Box, Image, Icon as ChakraIcon } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import useCartContext, { Product } from "../../contexts/CartContext";
import convertNumberToCurrency from "../../functions/convertNumberToCurrency";

type ProductPreviewProps = Omit<Product, "units" | "checked">;

export default function ProductPreview( props: ProductPreviewProps) {

    const { addItem } = useCartContext();
    return (
        <Box 
            w='xs'
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden'
            cursor={'pointer'}
            onClick={()=>addItem({...props, checked: false, units: 1})}
        >
            <Image 
                w={'100%'}
                h={'15rem'}
                objectFit={'cover'}
                src={props?.imgURL} 
                alt={props?.name} 
            />
            <Box 
                p='6'
            >
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {props?.name}
                </Box>

                <Box>
                    {convertNumberToCurrency(props?.price)}
                </Box>

                <Box 
                    display='flex' 
                    mt='2' 
                    alignItems='center'
                >
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                        <ChakraIcon
                            as={Icon}
                            key={i}
                            icon={'clarity:star-solid'}
                            color={i < props?.rating ? 'pink.500' : 'gray.300'}
                        />
                    ))}
                    <Box
                        as='span' 
                        ml='2' 
                        color='gray.600' 
                        fontSize='sm'
                        >
                        {props?.reviewCount}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
