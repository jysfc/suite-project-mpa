const userSchema = [
   {
      id: string,
      email: string,
      password: string,
      createdAt: number,
      isActive: boolean,
      properties: [
         {
            name: string,
            id: string,
            website: string,
            address1: string,
            address2: string,
            city: string,
            state: string,
            zip: string,
            country: string,
            phoneCountryCode: string,
            phoneAreaCode: string,
            phoneNumber: string,

            selfParking: string,
            valetParking: string,
            hasOutdoorPool: boolean,
            hasSpa: boolean,
            isSmokeFree: boolean,
            suite: [
               {
                  suiteId: string,
                  title: string,
                  image: string,
                  isActive: boolean,
               },
            ],
         },
      ],
   },
];
