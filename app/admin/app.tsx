'use client';

import { Admin, Resource, radiantDarkTheme } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { CourseList } from './course/list';
import { CourseCreate } from './course/create';
import { CourseEdit } from './course/edit';
import { UnitList } from './unit/list';
import { UnitCreate } from './unit/create';
import { UnitEdit } from './unit/edit';

const dataProvider = simpleRestProvider('/api');

const App = () => {
  return (
    <Admin dataProvider={dataProvider} darkTheme={radiantDarkTheme}>
      <Resource
        name='courses'
        recordRepresentation='title'
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />
      <Resource
        name='units'
        recordRepresentation='title'
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
      />
    </Admin>
  );
};
export default App;
