import React from 'react';
import {UserRoles} from '@src/Constant';
import RadioButtonWithLabel from '@src/components/RadioButtonWithLabel';
import Title from '@src/components/Title';
import Separator from '@src/components/Separator';
import {UserRolePropType} from './types';

function UserRole({selectedRole, onSelectUserRole}: UserRolePropType) {
  return (
    <>
      <Title title="User Role" />
      {Array.from(Object.values(UserRoles), function (role: UserRoles) {
        return (
          <RadioButtonWithLabel
            label={role.toString()}
            isSelected={selectedRole === role}
            onSelect={onSelectUserRole}
            key={role.toString()}
          />
        );
      })}
      <Separator />
    </>
  );
}

export default React.memo(UserRole);
