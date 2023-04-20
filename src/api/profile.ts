import { GET,POST,DELETE } from './config';

/**
 * get user profile
 */
export const getProfile = ( username : string ) => GET(`/profiles/${username}`)

/**
 * follow user profile
 */
export const followProfile = ( username : string ) => POST(`/profiles/${username}/follow`)

/**
 * unfollow user profile
 */
export const unfollowProfile = ( username : string ) => DELETE(`/profiles/${username}/follow`)