import { Box, Flex } from "@chakra-ui/react";
import ProductPreview from "../../components/ProductPreview";

import items from '../../tests/items.json';

export default function Home() {
  return (
    <Flex
      p={10}
      gap={5}
    >
        {items.map((item, key)=>(
          <ProductPreview
            key={key}
            {...item}
          />
        ))}
    </Flex>
  )
}
