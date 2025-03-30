import {Borrowing} from './borrowing'

export interface Member {
    id: number;
    memberId: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    borrowing: Borrowing[];
    createdAt: Date;
    updatedAt: Date;
}

const members = [
    {
      id: 1,
      memberId: 1001,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: 1234567890,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      memberId: 1002,
      firstName: 'Jane',
      lastName: 'Smith',
      phoneNumber: 9876543210,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      memberId: 1003,
      firstName: 'Alice',
      lastName: 'Johnson',
      phoneNumber: 1122334455,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      memberId: 1004,
      firstName: 'Bob',
      lastName: 'Brown',
      phoneNumber: 6677889900,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      memberId: 1005,
      firstName: 'Charlie',
      lastName: 'Davis',
      phoneNumber: 5566778899,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  export {members}