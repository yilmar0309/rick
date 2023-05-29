import {useEffect, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {useGetAllCharacter} from '@/api/graphQL/characters/characterApi';
import {CharactersEntity} from '@/api/graphQL/characters/entities/charactersEntity';
import useDebounce from '@/hooks/useDebounce';
import {RootStackRoutes} from '@/types/stackRoutes';
import {THomeScreenProps} from './HomeScreen';

interface ISectionList {
  title: string;
  data: CharactersEntity[];
}

export const useActionsHome = ({navigation: {navigate}}: THomeScreenProps) => {
  const {
    query: {loading, data: dataCharacterApi},
    setText,
    setSpecies,
  } = useGetAllCharacter();

  const [buttonCharacters, setButtonCharacters] = useState(0);
  const [buttonSpecies, setButtonSpecies] = useState(0);
  const [dataListCharacters, setDataListCharacters] = useState<ISectionList[]>(
    [],
  );

  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    if (dataCharacterApi?.characters?.results) {
      setDataListCharacters([
        {title: 'STARRED CHARACTERS', data: []},
        {
          title: 'CHARACTERS',
          data: dataCharacterApi?.characters?.results,
        },
      ]);
    }
  }, [dataCharacterApi]);

  const handleAddFavorite = (id: string) => {
    const character = dataListCharacters[1].data.find(
      (item: CharactersEntity) => item.id === id,
    );

    if (character) {
      const newDataCharacters = dataListCharacters[1].data.filter(
        (item: CharactersEntity) => item.id !== id,
      );
      const newDataCharactersFavorite =
        dataListCharacters[0].data.concat(character);

      setDataListCharacters([
        {
          ...dataListCharacters[0],
          data: newDataCharactersFavorite.sort((a, b) => {
            let fa = a.name.toLowerCase(),
              fb = b.name.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          }),
        },
        {...dataListCharacters[1], data: newDataCharacters},
      ]);
    }
  };

  const handleRemoveFavorite = (id: string) => {
    const character = dataListCharacters[0].data.find(
      (item: CharactersEntity) => item.id === id,
    );

    if (character) {
      const newDataCharactersFavorite = dataListCharacters[0].data.filter(
        (item: CharactersEntity) => item.id !== id,
      );
      const newDataCharacters = dataListCharacters[1].data.concat(character);

      setDataListCharacters([
        {...dataListCharacters[0], data: newDataCharactersFavorite},
        {
          ...dataListCharacters[1],
          data: newDataCharacters.sort((a, b) => {
            let fa = a.name.toLowerCase(),
              fb = b.name.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          }),
        },
      ]);
    }
  };

  const handleSearchText = useDebounce(async (text: string) => {
    setText(text);
  }, 1000);

  const goToDetail = (item: CharactersEntity) =>
    navigate(RootStackRoutes.Detail, {item});

  const handleOpenModal = () => modalizeRef?.current?.open();
  const handleGoBack = () => modalizeRef?.current?.close();

  const handleChangeButtonCharacters = (key: number) =>
    setButtonCharacters(key);

  const handleChangeButtonSpecies = (key: number) => {
    setButtonSpecies(key);
  };

  const handleApplyFilter = () => {
    modalizeRef?.current?.close();
    switch (buttonSpecies) {
      case 0:
        setSpecies('');
        break;
      case 1:
        setSpecies('Human');
        break;

      default:
        setSpecies('Alien');
        break;
    }
  };

  return {
    loading,
    dataListCharacters,
    handleSearchText,
    modalizeRef,
    buttonCharacters,
    buttonSpecies,
    handleGoBack,
    handleRemoveFavorite,
    handleAddFavorite,
    goToDetail,
    handleOpenModal,
    handleChangeButtonCharacters,
    handleChangeButtonSpecies,
    handleApplyFilter,
  };
};
