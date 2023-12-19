export default function getSelectedNames(arr) {
  return arr.reduce((selectedNames, obj) => {
    if (obj.solved) {
      selectedNames.push(obj.name);
    }
    return selectedNames;
  }, []);
}
