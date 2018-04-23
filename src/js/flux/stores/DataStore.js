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
      handleSettingsFetch: DataActions.fetchSettings,
      handleSettingsUpdate: DataActions.updateSettings,
      handleMenusFetch: DataActions.fetchMenus,
      handleMenusUpdate: DataActions.updateMenus,
      handleMenuItemsUpdate: DataActions.UpdateMenuItems,
      handleMenuLocationsFetch: DataActions.fetchMenuLocations,
      handleMenuLocationsUpdate: DataActions.updateMenuLocations,
      handleHandoutPostFetch: DataActions.fetchHandoutPosts,
      handleHandoutPostUpdate: DataActions.updateHandoutPosts
    });
  }

  handleSettingsFetch() {
    this.settings = {};
  }

  handleSettingsUpdate(settings) {
    this.setting = settings;
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
