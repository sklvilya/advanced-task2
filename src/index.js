/* eslint-disable import/prefer-default-export */
export function toCaseSpecialAttack(obj) {
  if (Object.hasOwnProperty.call(obj, 'special')) {
    return obj.special.map((skill) => {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      } = skill;
      return {
        id,
        name,
        icon,
        description,
      };
    });
  }
  return false;
}
