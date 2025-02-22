import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpdatation,
  syncUserDeletion,
  createUserOrder,
} from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdatation,
    syncUserDeletion,
    createUserOrder,
  ],
});
