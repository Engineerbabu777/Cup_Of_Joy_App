

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import VectorIcon from './CustomIcon';

interface GradientBGIconProps {
  name: string;
  color: string;
  size: number;
  type: string
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({name, color, size,type}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradientBG}>
        <VectorIcon name={name} color={color} size={size} type={"Feather"} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GradientBGIcon;