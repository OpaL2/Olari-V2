import React from 'react';

import container from 'components/containers/Container';

import find from 'lodash/fp/find';

const PageSubmenu = (props) => {
  const menus = props.data.menus ? props.data.menus : null;
  const locations = props.data.menuLocations ? props.data.menuLocations : null;
  const location = locations && locations['primary'] ? locations['primary'] : null;
  const menu = location && menus ? find({ID: location.ID})(menus) : null;
  const item = menu && menu.items ? find({object_slug: props.match.params.page})(menu.items) : null;

  const currentPage = props.match.params.subpage ? props.match.params.subpage : props.match.params.page;
  const items = item ? item.children : null;

  return items ? (
    <div>
      <PageSubmenuList
        items={items}
        currentPage={currentPage}
      />
    </div>
  ) : null;
}

export default container(PageSubmenu);

const PageSubmenuList = (props) => {
  
  const Items = props.items.map( (item) => {
    return(
      <PageSubmenuItem
        key={item.id}
        active={item.object_slug === props.currentPage}
        item={item}
      />
    );
  });

  return(
    <ul className="nav">
      {Items}
    </ul>
  )
}

const PageSubmenuItem = (props) => {

  return(
    <li className="nav-item">
      <a className={props.active ? "nav-link disabled" : "nav-link"} href={props.item.url}>{props.item.title}</a>
    </li>
  );
}