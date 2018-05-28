import alt from 'flux/alt/alt';
import DataActions from 'flux/actions/DataActions.js';

import _ from 'lodash/collection';
import ical2json from 'ical2json';
import moment from 'moment';
moment.locale('fi');

class DataStore {

  constructor() {
    this.settings = {};
    this.menus = [];
    this.menuLocations = [];
    this.handoutPosts = [];
    this.calendar = undefined;
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
      handleHandoutPostUpdate: DataActions.UPDATE_HANDOUT_POSTS,
      handleICSFetch: DataActions.FETCH_CALENDAR,
      handleICSUpdate: DataActions.UPDATE_CALENDAR_ICS
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

  handleICSFetch() {
    this.calendar = undefined;
  }

  handleICSUpdate(ics) {

    function getPropertyByRegex(obj,propName) {
      var re = new RegExp("^" + propName + ".*$"),
        key;
      for (key in obj)
        if (re.test(key))
          return obj[key];
      return null;
    }

    function parseStart(event) {
      return moment(getPropertyByRegex(event, "DTSTART"));
    }

    function parseEnd(event) {
      return moment(getPropertyByRegex(event, "DTEND"));
    }

    const events = _.map(ical2json.convert(ics).VCALENDAR[0].VEVENT, (event) => {
      return {
        key: event.UID,
        title: event.SUMMARY,
        content: event.DESCRIPTION,
        link: event.URL,
        url: parseStart(event).format('/YYYY/MM/DD/') + event.UID,
        start: parseStart(event),
        end: parseEnd(event),
        allDay: event["DTSTART;VALUE=DATE"] ? true : false
      }
    });
    this.calendar = events;
  }
}

export default alt.createStore(DataStore, 'DataStore');
