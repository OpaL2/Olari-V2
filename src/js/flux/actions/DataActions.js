import alt from 'flux/alt/alt';

import axios from 'axios';

import _ from 'lodash/collection';

class DataActions {

  fetch() {
    return (dispatch) => {
      dispatch();
      this.fetchSettings();
    }
  }

  fetchSettings() {
    return (dispatch) => {
      dispatch();
      axios.get('/wp-json/olariv2/v1/settings')
      .then((response) => {
        this.updateSettings(response.data);
        this.fetchMenus();
        this.fetchMenuLocations();
        this.fetchCalendar();
        if(response.data.infoCategoryID) this.fetchHandoutPosts(response.data.infoCategoryID);
      })
      .catch((err) => {
        this.emitError(err);
      });
    }
  }

  updateSettings(settings) {
    return settings;
  }

  fetchMenus() {
    return (dispatch) => {
      dispatch();
      axios.get('/wp-json/wp-api-menus/v2/menus')
      .then((response) => {
        this.updateMenus(response.data);
        _.forEach(response.data, (menu) => {this.fetchMenuItems(menu.ID)});
      })
      .catch((err) => {
        this.emitError(err);
      });
    }
  }

  updateMenus(menus) {
    return menus;
  }

  fetchMenuItems(id) {
    return (dispatch) => {
      dispatch();
      axios.get('/wp-json/wp-api-menus/v2/menus/' + id)
      .then((response) => {
        this.updateMenuItems(response.data);
      })
      .catch((err) => {
        this.emitError(err);
      });
    }
  }

  updateMenuItems(item) {
    return item;
  }

  fetchMenuLocations() {
    return (dispatch) => {
      dispatch();
      axios.get('/wp-json/wp-api-menus/v2/menu-locations')
      .then((response) => {
        this.updateMenuLocations(response.data);
      })
      .catch((err) => {
        this.emitError(err);
      });
    }
  }

  updateMenuLocations(locations) {
    return locations;
  }

  fetchHandoutPosts(category) {
    return (dispatch) => {
      dispatch();
      axios.get('/wp-json/wp/v2/posts?per_page=5&categories=' + category)
      .then((response) => {
        this.updateHandoutPosts(response.data);
      })
      .catch((err) => {
        this.emitError(err);
      });
    }
  }

  updateHandoutPosts(posts) {
    return posts;
  }

  fetchCalendar() {
    return (dispatch) => {
      dispatch();
      axios.get('/?plugin=all-in-one-event-calendar&controller=ai1ec_exporter_controller&action=export_events&no_html=true')
      .then((response) => {
        this.updateCalendarICS(response.data);
      })
      .catch((err) => {
        this.emitError(err);
      });
    }
  }

  updateCalendarICS(ics) {
    return ics;
  }


  emitError(err) {
    return err;
  }

}

export default alt.createActions(DataActions);
