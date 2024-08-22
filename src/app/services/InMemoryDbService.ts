import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1, firstName: 'Anant', lastName: 'Patil', mobileNumber: '7020327030', email: 'ant41107@gmail.com' },
      { id: 2, firstName: 'Ajinkya', lastName: 'Patil', mobileNumber: '0987654321', email: 'abc@gmail.com' }
    ];
    return { students };
  }
}