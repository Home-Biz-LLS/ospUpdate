import { Skola24Child, TimetableEntry } from '../../../../libs/api/lib'

export const timetable = (child: Skola24Child): TimetableEntry[] => {
  if (!child.personGuid || !child.unitGuid) {
    return []
  }
  return [
    {
      id: 'N2FjMDc1NjYtZmM2Yy0wZDQyLTY3M2YtZWI5NGNiZDA3ZGU4',
      code: 'Lunch',
      name: 'Lunch',
      category: '',
      blockName: '',
      dayOfWeek: 1,
      location: 'Ö5',
      teacher: '',
      timeEnd: '12:05:00',
      timeStart: '11:40:00',
      dateStart: '2021-04-12T11:40:00.000+02:00',
      dateEnd: '2021-04-12T12:05:00.000+02:00',
    },
    {
      id: 'ZTQ1NWE0N2EtNzAwOS0wZTAzLTQ1ZDYtNTA1NWI4Y2JhNDYw',
      code: 'BL',
      name: 'Bild',
      category: '',
      blockName: '',
      dayOfWeek: 1,
      location: '221',
      teacher: 'CTe',
      timeEnd: '11:35:00',
      timeStart: '09:40:00',
      dateStart: '2021-04-12T09:40:00.000+02:00',
      dateEnd: '2021-04-12T11:35:00.000+02:00',
    },
    {
      id: 'YjAxODRmY2QtNTJjZS0wMDJlLTYxOGItYmFlNTVlNDgzZmVk',
      code: 'NO',
      name: 'Naturorienterande ämnen',
      category: '',
      comment: 'a)',
      blockName: '',
      dayOfWeek: 1,
      location: '307',
      teacher: 'TBo',
      timeEnd: '13:30:00',
      timeStart: '12:30:00',
      dateStart: '2021-04-12T12:30:00.000+02:00',
      dateEnd: '2021-04-12T13:30:00.000+02:00',
    },
    {
      id: 'MWRiZGI1NzgtYWIzNy0wYzMwLTVkMmEtMWFjNWRkMTRmOTdh',
      code: 'IDH',
      name: 'Idrott & hälsa',
      category: '',
      blockName: '',
      dayOfWeek: 1,
      location: '215',
      teacher: 'ATe, GTe',
      timeEnd: '15:45:00',
      timeStart: '14:40:00',
      dateStart: '2021-04-12T14:40:00.000+02:00',
      dateEnd: '2021-04-12T15:45:00.000+02:00',
    },
    {
      id: 'MmZkZTZiMzMtMjdjMS0wZGIzLTUzYWYtZTg0Zjc1NDRlNzQw',
      code: 'M2FR',
      name: 'Franska',
      category: 'Moderna språk, språkval',
      blockName: '',
      dayOfWeek: 1,
      location: '304',
      teacher: 'CTe,ATe',
      timeEnd: '14:25:00',
      timeStart: '13:40:00',
      dateStart: '2021-04-12T13:40:00.000+02:00',
      dateEnd: '2021-04-12T14:25:00.000+02:00',
    },
    {
      id: 'MzAxMzU3MWItZGM1Ny0wOGVhLTVkZjUtOGFkMGIyYTY2OTAx',
      code: 'SO',
      name: 'Samhällsorienterande ämnen',
      category: '',
      blockName: '',
      dayOfWeek: 1,
      location: '303',
      teacher: 'HRr',
      timeEnd: '09:25:00',
      timeStart: '08:15:00',
      dateStart: '2021-04-12T08:15:00.000+02:00',
      dateEnd: '2021-04-12T09:25:00.000+02:00',
    },
    {
      id: 'NDY3MDY1MmYtOTIzYi0wZmQ0LTVlZGEtNGVhZDRkOTExNTgz',
      code: 'M2FR',
      name: 'Franska',
      category: 'Moderna språk, språkval',
      blockName: '',
      dayOfWeek: 2,
      location: '302,Fjärr asd asdasd asdad aasdds',
      teacher: 'DNi',
      timeEnd: '09:50:00',
      timeStart: '09:05:00',
      dateStart: '2021-04-13T09:05:00.000+02:00',
      dateEnd: '2021-04-13T09:50:00.000+02:00',
    },
    {
      id: 'NmE4OTU1NmItYzM0ZS0wYTI1LTYzM2QtYzBiN2M4OTVmYTQ3',
      code: 'EN',
      name: 'Engelska',
      category: '',
      blockName: '',
      dayOfWeek: 2,
      location: 'Fjärr',
      teacher: 'TPe',
      timeEnd: '13:15:00',
      timeStart: '12:30:00',
      dateStart: '2021-04-13T12:30:00.000+02:00',
      dateEnd: '2021-04-13T13:15:00.000+02:00',
    },
    {
      id: 'NDAxODRjOTctMmE5ZC0wMzdjLTY2NDMtODhlODEzOTQ3YTJh',
      code: 'Lunch',
      name: 'Lunch',
      category: '',
      blockName: '',
      dayOfWeek: 2,
      location: 'Fjärr',
      teacher: '',
      timeEnd: '12:05:00',
      timeStart: '11:40:00',
      dateStart: '2021-04-13T11:40:00.000+02:00',
      dateEnd: '2021-04-13T12:05:00.000+02:00',
    },
    {
      id: 'ZTc4YTcyZTUtMDc0NS0wNDE0LTVjODctYjY0MzQ2MGM3MDll',
      code: 'MA',
      name: 'Matematik',
      category: '',
      blockName: '',
      dayOfWeek: 2,
      location: 'Fjärr',
      teacher: 'CBr',
      timeEnd: '11:20:00',
      timeStart: '10:00:00',
      dateStart: '2021-04-13T10:00:00.000+02:00',
      dateEnd: '2021-04-13T11:20:00.000+02:00',
    },
    {
      id: 'MjRkMWE4YTItYTk5ZC0wYTFmLTVhMDgtMThiMmNhZDc1ZDUz',
      code: 'MU',
      name: 'Musik',
      category: '',
      blockName: '',
      dayOfWeek: 2,
      location: 'Fjärr',
      teacher: 'KBj',
      timeEnd: '14:15:00',
      timeStart: '13:30:00',
      dateStart: '2021-04-13T13:30:00.000+02:00',
      dateEnd: '2021-04-13T14:15:00.000+02:00',
    },
    {
      id: 'NTU4ZTc4ZTctNDQyMy0wMjVkLTRiYzktZGUwYmFmYzk2YTlj',
      code: 'EN',
      name: 'Engelska',
      category: '',
      blockName: '',
      dayOfWeek: 3,
      location: '303',
      teacher: 'TPe',
      timeEnd: '09:55:00',
      timeStart: '09:10:00',
      dateStart: '2021-04-14T09:10:00.000+02:00',
      dateEnd: '2021-04-14T09:55:00.000+02:00',
    },
    {
      id: 'NDUyNjIxODItYzFiOC0wOTFjLTYwODYtZDllZjZjN2QyYzA3',
      code: 'SV',
      name: 'Svenska',
      category: '',
      comment: 'a)',
      blockName: '',
      dayOfWeek: 3,
      location: '303',
      teacher: 'JCa',
      timeEnd: '14:45:00',
      timeStart: '14:00:00',
      dateStart: '2021-04-14T14:00:00.000+02:00',
      dateEnd: '2021-04-14T14:45:00.000+02:00',
    },
    {
      id: 'NDdkMGI0ZjItMjkxMC0wYWI1LTQ0YWMtNDY3NTdkZTE2Njg3',
      code: 'SO',
      name: 'Engelska',
      category: 'Samhällsorienterande ämnen',
      blockName: '',
      dayOfWeek: 3,
      location: '303',
      teacher: 'HRr',
      timeEnd: '11:00:00',
      timeStart: '10:05:00',
      dateStart: '2021-04-14T10:05:00.000+02:00',
      dateEnd: '2021-04-14T11:00:00.000+02:00',
    },
    {
      id: 'ZTI2ZDgyNWUtM2ZlOS0wZDVmLTY5NTctNGYzZThjMTMxOTdh',
      code: 'NO',
      name: 'Naturorienterande ämnen',
      category: '',
      comment: 'a)',
      blockName: '',
      dayOfWeek: 3,
      location: '307',
      teacher: 'TBo',
      timeEnd: '13:50:00',
      timeStart: '12:50:00',
      dateStart: '2021-04-14T12:50:00.000+02:00',
      dateEnd: '2021-04-14T13:50:00.000+02:00',
    },
    {
      id: 'NzMxNjczNGMtMmZmZi0wM2YzLTU0ZjMtODdjOTAwYzIwNTUw',
      code: 'Lunch',
      name: 'Lunch',
      category: '',
      blockName: '',
      dayOfWeek: 3,
      location: 'Ö5',
      teacher: '',
      timeEnd: '12:40:00',
      timeStart: '12:15:00',
      dateStart: '2021-04-14T12:15:00.000+02:00',
      dateEnd: '2021-04-14T12:40:00.000+02:00',
    },
    {
      id: 'MWRkZjhlZTktNTBmMC0wZjNhLTQ1OTgtMWJkOWM3MjI2NWQ4',
      code: 'SV',
      name: 'Svenska',
      category: '',
      blockName: '',
      dayOfWeek: 3,
      location: '303',
      teacher: 'JCa',
      timeEnd: '12:05:00',
      timeStart: '11:20:00',
      dateStart: '2021-04-14T11:20:00.000+02:00',
      dateEnd: '2021-04-14T12:05:00.000+02:00',
    },
    {
      id: 'NzM2Mjc2ZTYtY2JlYy0wOTc1LTU1ZGYtNjMwZjhjZWVjNjgy',
      code: 'MA',
      name: 'Matematik',
      category: '',
      comment: 'a)',
      blockName: '',
      dayOfWeek: 3,
      location: '307',
      teacher: 'CBr',
      timeEnd: '15:45:00',
      timeStart: '15:00:00',
      dateStart: '2021-04-14T15:00:00.000+02:00',
      dateEnd: '2021-04-14T15:45:00.000+02:00',
    },
    {
      id: 'YWNlZmEzZjYtM2EwNC0wYWY3LTU1N2MtMDBlMTA4MDQzMzRl',
      code: 'MU',
      name: 'Musik',
      category: '',
      blockName: '',
      dayOfWeek: 3,
      location: '504',
      teacher: 'KBj',
      timeEnd: '09:00:00',
      timeStart: '08:15:00',
      dateStart: '2021-04-14T08:15:00.000+02:00',
      dateEnd: '2021-04-14T09:00:00.000+02:00',
    },
    {
      id: 'NDc4MThmMDYtYmYxYi0wZDBkLTdhNmItZGVjMjY3OWY3MmYz',
      code: 'IDH',
      name: 'Idrott & Hälsa',
      category: '',
      blockName: '',
      dayOfWeek: 4,
      location: 'Fjärr',
      teacher: 'AKö,CSv,HAl',
      timeEnd: '15:45:00',
      timeStart: '14:35:00',
      dateStart: '2021-04-15T14:35:00.000+02:00',
      dateEnd: '2021-04-15T15:45:00.000+02:00',
    },
    {
      id: 'ZjQyZjNkOWItYWMzZi0wYWRhLTQ3YzItNTZiNTJkOTRmY2Iy',
      code: 'M2FR',
      name: 'Franska',
      category: 'Moderna språk, språkval',
      blockName: '',
      dayOfWeek: 4,
      location: 'Fjärr',
      teacher: 'DNi',
      timeEnd: '11:55:00',
      timeStart: '11:10:00',
      dateStart: '2021-04-15T11:10:00.000+02:00',
      dateEnd: '2021-04-15T11:55:00.000+02:00',
    },
    {
      id: 'YzQ2NWZlOWMtYzM3ZC0wYzBlLTQzNTQtODMyYmU3ODcxMDQ3',
      code: 'MTID',
      name: 'Mentorstid',
      category: 'Diverse',
      comment: 'Arbetslagsråd 6C',
      blockName: '',
      dayOfWeek: 4,
      location: 'Fjärr',
      teacher: 'JCa,CBr',
      timeEnd: '10:00:00',
      timeStart: '09:15:00',
      dateStart: '2021-04-15T09:15:00.000+02:00',
      dateEnd: '2021-04-15T10:00:00.000+02:00',
    },
    {
      id: 'YzMwMGY0YzAtNjhjNi0wYzY0LTU1MjctODg2MWQ4ZTRmZTI2',
      code: 'MU',
      name: 'Musik',
      category: '',
      blockName: '',
      dayOfWeek: 4,
      location: 'Fjärr',
      teacher: 'KBj',
      timeEnd: '10:55:00',
      timeStart: '10:10:00',
      dateStart: '2021-04-15T10:10:00.000+02:00',
      dateEnd: '2021-04-15T10:55:00.000+02:00',
    },
    {
      id: 'ZDNlNTFhMGUtYWFlYy0wOGI0LTVlMGItOTc0MzFiZmIwODcx',
      code: 'Lunch',
      name: 'Lunch',
      category: 'Diverse',
      blockName: '',
      dayOfWeek: 4,
      location: 'Fjärr',
      teacher: '',
      timeEnd: '12:25:00',
      timeStart: '12:00:00',
      dateStart: '2021-04-15T12:00:00.000+02:00',
      dateEnd: '2021-04-15T12:25:00.000+02:00',
    },
    {
      id: 'MDRiZWMyODMtNjEwZC0wZDYwLTRlOWItYTY1MjAwZTc0YTZm',
      code: 'SO',
      name: 'Samhällsorienterande ämnen',
      category: '',
      blockName: '',
      dayOfWeek: 4,
      location: 'Fjärr',
      teacher: 'HRr',
      timeEnd: '13:10:00',
      timeStart: '12:35:00',
      dateStart: '2021-04-15T12:35:00.000+02:00',
      dateEnd: '2021-04-15T13:10:00.000+02:00',
    },
    {
      id: 'YTA0ZTA2NTktYTU5MS0wMTFmLTVlYWYtNWM1MTgxNDJlMDcy',
      code: 'EN',
      name: 'Engelska',
      category: '',
      comment: 'a)',
      blockName: '',
      dayOfWeek: 4,
      location: 'Fjärr',
      teacher: 'TPe',
      timeEnd: '14:20:00',
      timeStart: '13:35:00',
      dateStart: '2021-04-15T13:35:00.000+02:00',
      dateEnd: '2021-04-15T14:20:00.000+02:00',
    },
    {
      id: 'OGJhN2MxYTYtMDQ4NS0wNWNhLTUwZWEtZDQ5YzQyMzFhYzc5',
      code: 'Lunch',
      name: 'Lunch',
      category: 'Diverse',
      blockName: '',
      dayOfWeek: 5,
      location: 'Ö5',
      teacher: '',
      timeEnd: '12:05:00',
      timeStart: '11:40:00',
      dateStart: '2021-04-16T11:40:00.000+02:00',
      dateEnd: '2021-04-16T12:05:00.000+02:00',
    },
    {
      id: 'ZmUwMGEwM2QtNTExMy0wODliLTY1ZGEtODM0YmRjNjc1NDIw',
      code: 'MA',
      name: 'Matematik',
      category: '',
      comment: 'a)',
      blockName: '',
      dayOfWeek: 5,
      location: '303',
      teacher: 'CBr',
      timeEnd: '14:00:00',
      timeStart: '13:15:00',
      dateStart: '2021-04-16T13:15:00.000+02:00',
      dateEnd: '2021-04-16T14:00:00.000+02:00',
    },
    {
      id: 'Y2IwYjYzZDEtODAxYi0wMTNjLTRjNDMtMDFlODgzMmY4MWEy',
      code: 'MU',
      name: 'Musik',
      category: '',
      comment: 'a)',
      blockName: '',
      dayOfWeek: 5,
      location: '510',
      teacher: 'KBj',
      timeEnd: '13:05:00',
      timeStart: '12:20:00',
      dateStart: '2021-04-16T12:20:00.000+02:00',
      dateEnd: '2021-04-16T13:05:00.000+02:00',
    },
    {
      id: 'N2JkMGFiOTYtMjI5OC0wMjZiLTc3OGEtN2JkN2Q4MDZkNTEy',
      code: 'SL',
      name: 'Slöjd',
      category: '',
      comment: 'tmtx)',
      blockName: '',
      dayOfWeek: 5,
      location: '860',
      teacher: 'EAl',
      timeEnd: '15:10:00',
      timeStart: '14:10:00',
      dateStart: '2021-04-16T14:10:00.000+02:00',
      dateEnd: '2021-04-16T15:10:00.000+02:00',
    },
    {
      id: 'NzkxMjE3MDctMWExNS0wN2RmLTQwMzQtNTEyZTczZjQyZTUw',
      code: 'SV',
      name: 'Svenska',
      category: '',
      blockName: '',
      dayOfWeek: 5,
      location: '303',
      teacher: 'JCa',
      timeEnd: '10:35:00',
      timeStart: '09:20:00',
      dateStart: '2021-04-16T09:20:00.000+02:00',
      dateEnd: '2021-04-16T10:35:00.000+02:00',
    },
    {
      id: 'ZTU1ZDQxNzQtN2Q3Yy0wMDMxLTY2ZmYtZmIyNGM5MjM3ZTRj',
      code: 'MA',
      name: 'Matematik',
      category: '',
      blockName: '',
      dayOfWeek: 5,
      location: '303',
      teacher: 'CBr',
      timeEnd: '11:35:00',
      timeStart: '10:40:00',
      dateStart: '2021-04-16T10:40:00.000+02:00',
      dateEnd: '2021-04-16T11:35:00.000+02:00',
    },
  ]
}
