'use client';

import { Admin, Resource, radiantDarkTheme } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { CourseList } from './course/list';
import { CourseCreate } from './course/create';
import { CourseEdit } from './course/edit';

import { UnitList } from './unit/list';
import { UnitCreate } from './unit/create';
import { UnitEdit } from './unit/edit';

import { LessonList } from './lesson/list';
import { LessonCreate } from './lesson/create';
import { LessonEdit } from './lesson/edit';

import { ChallengeList } from './challenge/list';
import { ChallengeCreate } from './challenge/create';
import { ChallengeEdit } from './challenge/edit';

import { ChallengeOptionsList } from './challengeOption/list';
import { ChallengeOptionsCreate } from './challengeOption/create';
import { ChallengeOptionsEdit } from './challengeOption/edit';

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
      <Resource
        name='lessons'
        recordRepresentation='title'
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
      />
      <Resource
        name='challenges'
        recordRepresentation='title'
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
      />
      <Resource
        name='challengeOptions'
        recordRepresentation='title'
        list={ChallengeOptionsList}
        create={ChallengeOptionsCreate}
        edit={ChallengeOptionsEdit}
        options={{ label: 'Challenge Options' }}
      />
    </Admin>
  );
};
export default App;
