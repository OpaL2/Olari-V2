Olari V2 Wordpress Theme
========================

Build instructions
------------------

You MUST have yarn installed.

1. `yarn install` for installing dependencies

2. `yarn run dev` for developement build

3. `yarn run build` for production build, generates two zip files: olariv2.zip and olariv2-ai1ec.zip

You MUST NOT use developement build in production. Always use production build.

Running developement server
---------------------------

You MUST have docker engine and docker compose installed and running.

First build developement version with command: `yarn run dev`

Run `docker-compose up -d` to start developement server and navigate to <http://localhost:8000/>

Complete wordpress core install and install required plugins and theme.


Required plugins
----------------

For this theme to function propely following plugins MUST be installed

* All in one event calendar <https://wordpress.org/plugins/all-in-one-event-calendar/>
* WP REST-API V2 Menus <https://wordpress.org/plugins/wp-rest-api-v2-menus/>

The All in one event calendar (ai1ec) plugin MUST use provided Olari V2 ai1ec calendar theme.

In addition to required plugins following plugins SHOULD be installed:

* WP Super Cache <https://wordpress.org/plugins/wp-super-cache/>

Installing theme
----------------

Unpack olariv2.zip file to your theme directory.
Unpack olariv2-ai1ec.zip to All in one event calendar theme directory.

From Wordpress admin area activate both theme and All in one event calendar theme.

Use theme Customizer to set different aspects of your theme.

LICENSE
-------

Olari V2 wordpress theme
Copyright (C) 2018 Oskari Palojärvi

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/gpl-3.0.txt>