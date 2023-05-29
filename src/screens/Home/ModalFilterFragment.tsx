/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {AppBar, Button, Text} from '@react-native-material/core';
import {Modalize} from 'react-native-modalize';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import {ArrowBackIcon} from '@/assets/svg/arrowBackIcon';
import {useCombinedRefs} from '@/hooks/useCombineRef';
import {useCustomTheme} from '@/types/Theme';

interface Props {
  buttonCharacters: number;
  buttonSpecies: number;
  handleGoBack: () => void;
  handleChangeButtonCharacters: (key: number) => void;
  handleChangeButtonSpecies: (key: number) => void;
  handleApplyFilter: () => void;
}

export const ModalFilterFragment = forwardRef(function ModalFilterFragment(
  {
    buttonCharacters,
    buttonSpecies,
    handleGoBack,
    handleChangeButtonCharacters,
    handleChangeButtonSpecies,
    handleApplyFilter,
  }: Props,
  ref,
) {
  const modalizeRef = useRef<Modalize>(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);
  const {appColors} = useCustomTheme();

  return (
    <Modalize
      ref={combinedRef}
      modalTopOffset={20}
      withHandle={false}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        stickyHeaderIndices: [0],
      }}>
      <View flex-1 paddingV-16 paddingH-16>
        <AppBar
          title="Filters"
          centerTitle={true}
          leading={() => (
            <TouchableOpacity onPress={handleGoBack}>
              <ArrowBackIcon />
            </TouchableOpacity>
          )}
          color="white"
          elevation={0}
          style={styles.appBar}
        />

        <Text variant="subtitle1">Characters</Text>
        <View row centerV spread height={80}>
          <Button
            style={styles.button}
            titleStyle={[
              styles.textButton,
              {
                color:
                  buttonCharacters === 0
                    ? appColors.primaryTextButtonsFilter
                    : '#000000',
              },
            ]}
            title="All"
            disableElevation
            uppercase={false}
            variant={buttonCharacters === 0 ? 'contained' : 'outlined'}
            color={
              buttonCharacters === 0
                ? appColors.primaryButtonsFilter
                : '#E5E7EB'
            }
            onPress={() => handleChangeButtonCharacters(0)}
          />
          <Button
            style={styles.button}
            titleStyle={[
              styles.textButton,
              {
                color:
                  buttonCharacters === 1
                    ? appColors.primaryTextButtonsFilter
                    : '#000000',
              },
            ]}
            title="Starred"
            disableElevation
            uppercase={false}
            variant={buttonCharacters === 1 ? 'contained' : 'outlined'}
            color={
              buttonCharacters === 1
                ? appColors.primaryButtonsFilter
                : '#E5E7EB'
            }
            onPress={() => handleChangeButtonCharacters(1)}
          />
          <Button
            style={styles.button}
            titleStyle={[
              styles.textButton,
              {
                color:
                  buttonCharacters === 2
                    ? appColors.primaryTextButtonsFilter
                    : '#000000',
              },
            ]}
            title="Others"
            disableElevation
            uppercase={false}
            variant={buttonCharacters === 2 ? 'contained' : 'outlined'}
            color={
              buttonCharacters === 2
                ? appColors.primaryButtonsFilter
                : '#E5E7EB'
            }
            onPress={() => handleChangeButtonCharacters(2)}
          />
        </View>

        <Text variant="subtitle1">Specie</Text>
        <View row centerV spread marginB-24 height={80}>
          <Button
            style={styles.button}
            titleStyle={[
              styles.textButton,
              {
                color:
                  buttonSpecies === 0
                    ? appColors.primaryTextButtonsFilter
                    : '#000000',
              },
            ]}
            title="All"
            disableElevation
            uppercase={false}
            variant={buttonSpecies === 0 ? 'contained' : 'outlined'}
            color={
              buttonSpecies === 0 ? appColors.primaryButtonsFilter : '#E5E7EB'
            }
            onPress={() => handleChangeButtonSpecies(0)}
          />
          <Button
            style={styles.button}
            titleStyle={[
              styles.textButton,
              {
                color:
                  buttonSpecies === 1
                    ? appColors.primaryTextButtonsFilter
                    : '#000000',
              },
            ]}
            title="Human"
            disableElevation
            uppercase={false}
            variant={buttonSpecies === 1 ? 'contained' : 'outlined'}
            color={
              buttonSpecies === 1 ? appColors.primaryButtonsFilter : '#E5E7EB'
            }
            onPress={() => handleChangeButtonSpecies(1)}
          />
          <Button
            style={styles.button}
            titleStyle={[
              styles.textButton,
              {
                color:
                  buttonSpecies === 2
                    ? appColors.primaryTextButtonsFilter
                    : '#000000',
              },
            ]}
            title="Alien"
            disableElevation
            uppercase={false}
            variant={buttonSpecies === 2 ? 'contained' : 'outlined'}
            color={
              buttonSpecies === 2 ? appColors.primaryButtonsFilter : '#E5E7EB'
            }
            onPress={() => handleChangeButtonSpecies(2)}
          />
        </View>
        <Button title="Filter" color="#8054C7" onPress={handleApplyFilter} />
      </View>
    </Modalize>
  );
});

const styles = StyleSheet.create({
  button: {
    width: 100,
  },
  textButton: {fontSize: 12},
  appBar: {marginBottom: 20},
});
