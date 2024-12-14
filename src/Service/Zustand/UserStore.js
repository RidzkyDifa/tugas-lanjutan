/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { getData, registerUser } from "../API";

const useUserStore = create((set) => ({
  users: [],
  isLoading: false,
  error: null,
  currentUser: null,

  fetchUsers: async () => {
    try {
      set({ isLoading: true, error: null });
      const users = await getData();
      set({ users, isLoading: false });
    } catch (error) {
      set({ error: "Failed", isLoading: false });
    }
  },

  addUser: async (newUser) => {
    try {
      set({ isLoading: true, error: null });
      const addedUser = await registerUser(newUser);
      set((state) => ({
        users: [...state.users, addedUser],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: "Failed Added Data", isLoading: false });
    }
  },

  loginUser: (username, password) => {
    set((state) => {
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        return { currentUser: user, error: null };
      } else {
        return { currentUser: null, error: "Invalid credentials" };
      }
    });
  },

  logoutUser: () => {
    set({ currentUser: null });
  },
}));

export default useUserStore;
