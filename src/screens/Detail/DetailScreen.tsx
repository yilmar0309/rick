import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Text} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import {ArrowBackIcon} from '@/assets/svg/arrowBackIcon';
import {FavoriteIcon} from '@/assets/svg/favoriteIcon';
import {SafeAreaViewComponent} from '@/components/SafeAreaViewComponent/SafeAreaViewComponent';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';

export type TDetailScreenProps = StackScreenProps<
  RootStackParamList,
  RootStackRoutes.Detail
>;

const DetailScreen: React.FC<TDetailScreenProps> = ({
  route: {
    params: {item},
  },
  navigation: {goBack},
}) => {
  return (
    <SafeAreaViewComponent backgroundColor="white">
      <View paddingH-16 paddingV-8>
        <TouchableOpacity onPress={goBack}>
          <ArrowBackIcon />
        </TouchableOpacity>
      </View>
      <View flex-1 paddingH-16 marginT-16>
        <View height={64} width={64} marginB-8>
          <Avatar image={{uri: item.image}} size={64} />
          {item.favorite && (
            <View
              width={28}
              height={28}
              br50
              center
              style={styles.containerIcon}>
              <FavoriteIcon />
            </View>
          )}
        </View>
        <Text
          variant="h5"
          style={styles.title}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {item.name}
        </Text>

        <View style={styles.containerText} paddingV-16>
          <Text variant="body1" style={styles.textTitle}>
            Specie
          </Text>
          <Text variant="body2">{item.species}</Text>
        </View>
        <View style={styles.containerText} paddingV-16>
          <Text variant="body1" style={styles.textTitle}>
            Status
          </Text>
          <Text variant="body2">{item.status}</Text>
        </View>
        <View style={styles.containerText} paddingV-16>
          <Text variant="body1" style={styles.textTitle}>
            Occupation
          </Text>
          <Text variant="body2">To Do</Text>
        </View>
      </View>
    </SafeAreaViewComponent>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerIcon: {
    position: 'absolute',
    bottom: 0,
    right: -8,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  containerText: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  textTitle: {
    fontWeight: 'bold',
  },
});
