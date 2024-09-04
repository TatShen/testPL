import debounce from "@/Utils/debounce";
import { create } from "zustand";

interface IRequestStore {
  value: string;
  setValue: (data: string) => void;
  isActive: boolean;
  isPromo: boolean;
  setIsActive: (isActive: boolean) => void;
  setIsPromo: (isPromo: boolean) => void;
}

const RequestStore = create<IRequestStore>((set) => {
  const debouncedSetValue = debounce((value: string) => {
    set({ value });
  }, 500);

  return {
    value: "",
    setValue: (value: string) => {
      debouncedSetValue(value);
    },
    isActive: false,
    isPromo: false,
    setIsActive: (isActive: boolean) => {
      set(() => ({ isActive }));
    },
    setIsPromo: (isPromo: boolean) => {
      set(() => ({ isPromo }));
    },
  };
});

export default RequestStore;
