import { create } from "zustand";

interface ChatStore {
  questions: string[];
  setAskedQuestion: (question: string) => void;
  resetQuestions: () => void;
}

const useChatStore = create<ChatStore>((set) => ({
  questions: [],
  setAskedQuestion: (question: string) =>
    set((state) => ({ questions: [...state.questions, question] })),
  resetQuestions: () => set(() => ({ questions: [] })),
}));

export default useChatStore;
