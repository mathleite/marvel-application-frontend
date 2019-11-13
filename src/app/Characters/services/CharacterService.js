import httpClient from '../../AxiosHttpClient';

const CHARACTERS_ROUTE = 'characters';

export default class CharacterService {
  static async getCharacters() {
    const GET_ALL_CHARACTERS_ROUTE = `${CHARACTERS_ROUTE}/get-all`;
    const { data } = await httpClient.get(GET_ALL_CHARACTERS_ROUTE);

    return data;
  }
}
