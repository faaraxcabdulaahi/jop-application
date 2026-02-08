import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db/db";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getSession();
  if (!session?.user) {
    redirect("/sign-in");
  }

  await connectDB();
  const board = await Board.findOne({
    userId: session.user.id,
    name: "jop Hunt",
  });
  console.log(board);

  return <div>Dashboard</div>;
};

export default Dashboard;
