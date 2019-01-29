import * as React from 'react';
import { Flex, Image, Text } from 'rebass';

const ProfileSummary = () => (
  <Flex
    bg="ui.sidebar"
    p={2}
    mb={2}
    alignItems='center'
  >
    <Image
      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
      width={40}
      height={40}
    />
    <Flex flex="auto" flexDirection="column" justifyContent="center" ml={2}>
      <Text
        color='text.light.secondary'
        fontSize={1}
        mb={1}
      >
        Logged in as
      </Text>
      <Text
        fontSize={3}
        fontWeight='bold'
      >
        Chuck Dries
      </Text>
    </Flex>
  </Flex>
);

export default ProfileSummary;
