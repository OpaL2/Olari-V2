import alt from 'flux/alt/alt';
import DataActions from 'flux/actions/DataActions.js';

import _ from 'lodash/collection';

class DataStore {

  constructor() {
    this.settings = {};
    this.menus = [];
    this.menuLocations = [];
    this.handoutPosts = [];
    this.error = null;

    this.bindListeners({
      handleSettingsFetch: DataActions.FETCH_SETTINGS,
      handleSettingsUpdate: DataActions.UPDATE_SETTINGS,
      handleMenusFetch: DataActions.FETCH_MENUS,
      handleMenusUpdate: DataActions.UPDATE_MENUS,
      handleMenuItemsUpdate: DataActions.UPDATE_MENU_ITEMS,
      handleMenuLocationsFetch: DataActions.FETCH_MENU_LOCATIONS,
      handleMenuLocationsUpdate: DataActions.UPDATE_MENU_LOCATIONS,
      handleHandoutPostFetch: DataActions.FETCH_HANDOUT_POSTS,
      handleHandoutPostUpdate: DataActions.UPDATE_HANDOUT_POSTS
    });
  }

  handleSettingsFetch() {
    this.settings = {};
  }

  handleSettingsUpdate(settings) {
    this.settings = settings;
  }

  handleMenusFetch() {
    this.menus = [];
  }

  handleMenusUpdate(menus) {
    this.menus = menus;
  }

  handleMenuItemsUpdate(data) {
    _.find(this.menus, {ID: data.ID}).items = data.items;
  }

  handleMenuLocationsFetch() {
    this.menuLocations = [];
  }

  handleMenuLocationsUpdate(locations) {
    this.menuLocations = locations;
  }

  handleHandoutPostFetch() {
    this.handoutPosts = [];
  }

  handleHandoutPostUpdate(posts) {
    this.handoutPosts = posts;
  }

  handleApiError(err) {
    this.error = err;
  }
}

export default alt.createStore(DataStore, 'DataStore');
