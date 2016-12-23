/**
  Updates with Object.assign the obejct at state.key if present or else sets to
  given default before updating. Useful for maps from supply ID to supply, to
  update ensuring that no mutations or shared references have been introduced.
*/
export default function(state, key, diff, def) {
  let supply = state[key] || def;
  supply = Object.assign({}, supply, diff);
  return Object.assign({}, state, {
    [key]: supply
  });
}
