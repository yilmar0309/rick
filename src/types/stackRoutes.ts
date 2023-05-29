import {CharactersEntity} from '@/api/graphQL/characters/entities/charactersEntity';

export enum RootStackRoutes {
  Home = 'Home',
  Detail = 'Detail',
}

export type RootStackParamList = {
  [RootStackRoutes.Home]: undefined;
  [RootStackRoutes.Detail]: {item: CharactersEntity};
};
