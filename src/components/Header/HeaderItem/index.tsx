import { Avatar, Badge, Flex, Text, Tooltip } from "@chakra-ui/react"
import { Icon } from "@iconify/react"

export interface HeaderItemProps {
  iconName: string,
  label: string,
  onClick: () => any,
  badgeCounter?: number
}

export default function HeaderItem({iconName, label, onClick, badgeCounter, ...rest}: HeaderItemProps) {
  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      cursor={'pointer'}
      color={'white'}
      onClick={onClick}
      {...rest}
    >
      <Tooltip
        label={label}
        bg={'transparent'}
      >
        <Flex
          position={'relative'}
          align={'center'}
          justify={'center'}
          w={'3rem'}
        >
          <Icon
            icon={iconName}
            fontSize={30}
          />
          { badgeCounter || badgeCounter !== 0 &&
            <Badge
              position={'absolute'}
              top={0}
              right={0}
              bg={'lightPink'}
              fontSize={10}
            >
              {badgeCounter}
            </Badge>
          }
        </Flex>
      </Tooltip>
    </Flex>
  )
}
