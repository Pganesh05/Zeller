export function fetchUserByRoleVariable(selectedRole: string) {
  return {
    variables: {
      filter: {
        role: {
          eq: selectedRole,
        },
      },
    },
  };
}

export function fetchUserByRoleName(name: string) {
  return {
    variables: {
      filter: {
        name: {
          contains: name,
        },
      },
    },
  };
}
