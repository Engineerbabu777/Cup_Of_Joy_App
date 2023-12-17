import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import VectorIcon from './CustomIcon';

interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
  type: string
}

const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor,type}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: BGColor}]}>
      <VectorIcon name={name} color={color} size={size} type={type} />
    </View>
  );
};

const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});

export default BGIcon;