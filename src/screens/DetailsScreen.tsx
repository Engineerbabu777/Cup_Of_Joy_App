import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING
} from '../theme/theme'
import { StatusBar } from 'expo-status-bar'
import ImageBackgroundInfo from '../components/ImageBackgroundInfo'

const DetailsScreen = ({ navigation, route }: any) => {
  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList
  )[route.params.index]

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  const BackHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} style='inverted'/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={() => {BackHandler()}}
          ToggleFavourite={ToggleFavourite}
        />
      </ScrollView>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  FooterInfoArea: {
    padding: SPACING.space_20
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium
  }
})
