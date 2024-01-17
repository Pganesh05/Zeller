import {fetchUserByRoleName, fetchUserByRoleVariable} from '../userServices';

it('test fetchUserByRoleName ', () => {
  expect(fetchUserByRoleName('name')).toEqual({
    variables: {
      filter: {
        name: {
          contains: 'name',
        },
      },
    },
  });
});

it('test fetchUserByRoleVariable', () => {
  expect(fetchUserByRoleVariable('Admin')).toEqual({
    variables: {
      filter: {
        role: {
          eq: 'Admin',
        },
      },
    },
  });
});
