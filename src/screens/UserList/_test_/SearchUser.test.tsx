import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {create} from 'react-test-renderer';

import SearchUser from '@src/screens/UserList/SearchUser';

jest.useFakeTimers();

describe('Test Radio Button Screen', () => {
  const onChangeUser = () => jest.fn();
  const SearchUserComponent = (
    <SearchUser searchText="" onChangeSearchText={onChangeUser} />
  );

  const tree = create(SearchUserComponent).toJSON();

  //SnapShot testing
  it('SnapShot Testing', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Test Radio Button is Selected', async () => {
    const {getByTestId} = render(SearchUserComponent);

    const text = getByTestId('search_user');
    expect(text.props.children).toBe('');
  });

  test('Test Radio Button On click functionality', async () => {
    const {getByTestId} = render(SearchUserComponent);

    fireEvent.changeText(getByTestId('search_user'), 'input');
  });
});
