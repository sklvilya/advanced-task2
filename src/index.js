export default function toCaseSpecialAttack(obj) {
  const { special } = obj;
  const arr = [];
  special.forEach((el) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = el;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
