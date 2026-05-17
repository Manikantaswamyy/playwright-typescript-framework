import dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    BASE_URL: process.env.BASE_URL!,

    FIRSTNAME: process.env.FIRSTNAME!,

    ADDRESS: process.env.ADDRESS!,

    STATE: process.env.STATE!,

    CITY: process.env.CITY!,

    EMAIL: process.env.EMAIL!,

    PINCODE: process.env.PINCODE!,

    PHONE: process.env.PHONE!
};