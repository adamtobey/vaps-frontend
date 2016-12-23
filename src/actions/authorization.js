export const AUTH_REVOKE = 'AUTH_REVOKE';
export function authRevoke() {
  return {
    type: AUTH_REVOKE
  };
};

export const AUTH_CREATE = 'AUTH_CREATE';
export function authCreate(privileges) {
  return {
    type: AUTH_CREATE,
    privileges: privileges
  }
};
