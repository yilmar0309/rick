import React from 'react';
import {Image, SectionList, StyleSheet, TextInput} from 'react-native';
import {ActivityIndicator, Text} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import {CharactersEntity} from '@/api/graphQL/characters/entities/charactersEntity';
import {FavoriteIcon} from '@/assets/svg/favoriteIcon';
import {FavoriteOutLineIcon} from '@/assets/svg/favoriteOutlineIcon';
import {FilterIcon} from '@/assets/svg/filterIcon';
import {SearchIcon} from '@/assets/svg/searchIcon';
import {SafeAreaViewComponent} from '@/components/SafeAreaViewComponent/SafeAreaViewComponent';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {ModalFilterFragment} from './ModalFilterFragment';
import {useActionsHome} from './useActions';

export type THomeScreenProps = StackScreenProps<
  RootStackParamList,
  RootStackRoutes.Home
>;

export const HomeScreen: React.FC<THomeScreenProps> = props => {
  const {
    loading,
    handleSearchText,
    dataListCharacters,
    modalizeRef,
    buttonCharacters,
    buttonSpecies,
    handleRemoveFavorite,
    handleAddFavorite,
    goToDetail,
    handleOpenModal,
    handleGoBack,
    handleChangeButtonCharacters,
    handleChangeButtonSpecies,
    handleApplyFilter,
  } = useActionsHome(props);

  const renderItem = ({
    item,
    index,
    section,
  }: {
    item: CharactersEntity;
    index: number;
    section: {
      title: string;
      data: CharactersEntity[];
    };
  }) => (
    <View
      row
      spread
      centerV
      paddingV-16
      key={index}
      style={styles.containerItem}>
      <TouchableOpacity
        row
        flex-1
        centerV
        onPress={() =>
          goToDetail({
            ...item,
            favorite: section.title === 'STARRED CHARACTERS',
          })
        }>
        <Image source={{uri: item.image}} style={styles.image} />
        <View marginL-16>
          <Text>{item.name}</Text>
          <Text>{item.species}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          section.title === 'STARRED CHARACTERS'
            ? handleRemoveFavorite(item.id)
            : handleAddFavorite(item.id)
        }>
        {section.title === 'STARRED CHARACTERS' ? (
          <FavoriteIcon />
        ) : (
          <FavoriteOutLineIcon />
        )}
      </TouchableOpacity>
    </View>
  );

  const getData = () => {
    switch (buttonCharacters) {
      case 1:
        return [dataListCharacters[0], {...dataListCharacters[1], data: []}];
      case 2:
        return [{...dataListCharacters[0], data: []}, dataListCharacters[1]];

      default:
        return dataListCharacters || [];
    }
  };

  return (
    <SafeAreaViewComponent backgroundColor="white">
      <ModalFilterFragment
        ref={modalizeRef}
        buttonCharacters={buttonCharacters}
        buttonSpecies={buttonSpecies}
        handleGoBack={handleGoBack}
        handleChangeButtonCharacters={handleChangeButtonCharacters}
        handleChangeButtonSpecies={handleChangeButtonSpecies}
        handleApplyFilter={handleApplyFilter}
      />
      <View flex-1 paddingH-16 paddingT-16>
        <Text variant="h6">Rick and Morty list</Text>
        <View
          row
          spread
          centerV
          backgroundColor="#F3F4F6"
          height={40}
          br20
          paddingH-16
          marginV-16>
          <SearchIcon />
          <TextInput
            style={styles.input}
            placeholder="Search or filter results"
            onChangeText={handleSearchText}
          />
          <TouchableOpacity onPress={handleOpenModal}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        {!loading ? (
          <SectionList
            sections={getData()}
            keyExtractor={(item, index) => `${item.id} + ${index}`}
            renderItem={renderItem}
            renderSectionHeader={({section: {title, data}}) => (
              <View backgroundColor="white">
                <Text variant="subtitle1" style={styles.title}>
                  {title} ({data.length})
                </Text>
              </View>
            )}
          />
        ) : (
          <ActivityIndicator
            color="black"
            style={styles.indicator}
            size="large"
          />
        )}
      </View>
    </SafeAreaViewComponent>
  );
};

const styles = StyleSheet.create({
  containerItem: {borderTopWidth: 1, borderColor: '#E5E7EB'},
  input: {
    flex: 1,
    marginLeft: 8,
  },
  image: {width: 50, height: 50, borderRadius: 100},
  title: {
    marginBottom: 16,
  },
  indicator: {
    marginTop: 24,
  },
});
