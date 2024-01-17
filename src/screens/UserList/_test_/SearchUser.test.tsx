import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {create} from 'react-test-renderer';

import SearchUser from '@src/screens/UserList/SearchUser';

jest.useFakeTimers();

describe('Search Screen Rendering test', () => {
  const onChangeUser = () => jest.fn();
  const SearchUserComponent = (
    <SearchUser searchText="test" onChangeSearchText={onChangeUser} />
  );

  const tree = create(SearchUserComponent).toJSON();

  //SnapShot testing
  it('SnapShot Testing', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Test Search Text Component functionality', async () => {
    const {getByTestId} = render(
      <SearchUser searchText="test" onChangeSearchText={onChangeUser} />,
    );

    const text = getByTestId('search_user_test_id');
    expect(text.props.children).toBe(undefined);
  });

  test('Test Search Text on change functionality', async () => {
    const {getByTestId} = render(SearchUserComponent);

    fireEvent.changeText(getByTestId('search_user_test_id'), 'input');
  });
});
