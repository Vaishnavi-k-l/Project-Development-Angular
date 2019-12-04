export class Employee {

    employeeId: number;
    firstName: string;
    lastName: string;
    middleName: string;
    username: string;
    password: string;
    userType: string;
    availability: boolean;
    eulAgreement: boolean;

    constructor(  employeeId?: number,
                  firstName?: string,
                  lastName?: string,
                  middleName?: string,
                  username?: string,
                  password?: string,
                  userType?: string,
                  availability?: boolean,
                  eulAgreement?: boolean){
            this.employeeId = employeeId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.middleName = middleName;
            this.username = username;
            this.password = password;
            this.userType = userType;
            this.availability = availability;
            this.eulAgreement = eulAgreement;
       }
}