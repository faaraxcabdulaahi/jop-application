import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { initializedUserBoard } from "../utils/initUserBoard";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          console.log("User created hook triggered:", {
            userId: user.id,
            email: user.email,
          });
         
          if (user.id) {
            try {
              await initializedUserBoard(user.id);
              console.log("Board initialized successfully for user:", user.id);
            } catch (error) {
              console.error("Failed to initialize board for user:", user.id, error);
              // Don't throw here - let user creation succeed even if board fails
              // You might want to retry later or handle this differently
            }
          } else {
            console.error("User ID is undefined in after hook");
          }
        },
      },
    },
  },
});

export const getSession = async () => {
  const result = await auth.api.getSession({
    headers: await headers(),
  });
  return result;
};

export const signOut = async () => {
  const result = await auth.api.signOut({
    headers: await headers(),
  });
  if (result) {
    redirect("/sign-out");
  }
};
