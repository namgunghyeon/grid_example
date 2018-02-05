import { createSelector } from 'reselect';

/**
 * Direct selector to the form state domain
 */
const selectAnimationDomain = (state) => state.get('animation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Animation
 */

const makeSelectAnimation = () => createSelector(
  selectAnimationDomain,
  (substate) => substate.toJS()
);

export default makeSelectAnimation;
export {
  selectAnimationDomain,
};
