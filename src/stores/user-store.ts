import { defineStore } from 'pinia';
import { ref } from 'vue';

type User = {
  userType: string;
  email: string;
  password: string;
  fullname?: string;
  contactNumber?: string;
  applicationId?: string;
  organization?: string;
  yearsOfExperience?: number;
  registrationNumber?: string;
  employeeNumber?: string;
  department?: string;
};

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>();

  const addUser = (user: User): string | undefined => {
    // Check if the email already exists
    const existingUser = users.value?.find((u) => u.email === user.email);
    if (existingUser) {
      return 'User already exists';
    }

    // If the email does not exist, add the user
    users.value?.push(user);
  };

  return { users, addUser };
});
