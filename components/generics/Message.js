import React from 'react';

const CustomTouchableOpacity = ({ iconUrl, copy, ctaText }) => (
    <View>
      <Centered>
        <Icon src={iconUrl} />
        <MessageText> {copy} </MessageText>
        {ctaText}
      </Centered>
      {` `}
    </View>
  );
  export default Message;