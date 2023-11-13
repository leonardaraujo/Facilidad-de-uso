import ROLS from '../constants/rols.js';
const { SELLER, MANAGER, BOSS, ADMIN } = ROLS;
const permissionTree = (permission) => {
  if (permission == SELLER) {
    return [SELLER];
  } else if (permission == MANAGER) {
    return [SELLER, MANAGER];
  } else if (permission == BOSS) {
    return [SELLER, MANAGER, BOSS];
  } else if (permission == ADMIN) {
    return [SELLER, MANAGER, BOSS, ADMIN];
  } else {
    return [];
  }
};

const verifyRol = (rol, rolToVerified) => {
  if (permissionTree(rol).includes(rolToVerified)) {
    return true;
  } else {
    return false;
  }
};
export default verifyRol;
