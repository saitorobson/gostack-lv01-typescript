interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;

  //When an array has more than one type, eg.: string, object
  techs: Array<string | TechObject>;

  //When an array has only one type, eg.: string
  //techs: string[];
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
