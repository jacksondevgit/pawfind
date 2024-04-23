import { defineStore } from 'pinia';
import { ref } from 'vue';

export type User = {
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
  const users = ref<User[]>([]);
  const isAuthorized = ref<boolean>(false);
  const currentUser = ref<User>();

  const register = (user: User): string | undefined => {
    // Check if the email already exists
    const existingUser = users.value?.find((u) => u.email === user.email);

    if (existingUser) {
      return 'User already exists';
    }

    // If the email does not exist, add the user
    users.value?.push(user);
  };

  const login = (email: string, password: string): boolean => {
    const user = users.value?.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      isAuthorized.value = true;
      currentUser.value = user;
      return true;
    } else {
      isAuthorized.value = false;
      return false;
    }
  };

  return { users, register, isAuthorized, currentUser, login };
});
