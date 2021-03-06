import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';

export const renderStory = (props) => {
  return (
    <Text wrapping={props.wrapping} renderWhitespace={props.renderWhitespace}>
      Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua.
      {'\n\n'}
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
    </Text>
  );
};
renderStory.storyName = 'Default';

export default {
  title: 'Components / Text',
  component: Text,
  args: {
    wrapping: true
  },
  argTypes: {
    children: {
      type: null
    },
    ref: {
      type: null
    }
  }
};
