
export class User {

    email: string;

    name: string;

    mobile: string;

    uid: string;

    provider: string;
    image: string;


    constructor(email: string,
        name: string,
        mobile: string,
        uid: string,
        image: string, provider: string) {

        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.uid = uid;
        this.image = image;
        this.provider = provider;
    }
}
