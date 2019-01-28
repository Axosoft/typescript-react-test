import * as React from 'react';
import { Flex, Image, Text } from 'rebass';

const ProfileSummary = () => (
  <Flex
    bg="red"
  >
    <Image src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" />
    <Flex flex="auto" flexDirection="column" justifyContent="center" p={3}>
      <Text
        fontSize={0}
      >
        Logged in as
      </Text>
      <Text
        fontSize={2}
      >
        Chuck Dries
      </Text>
    </Flex>
  </Flex>
);

export default ProfileSummary;
