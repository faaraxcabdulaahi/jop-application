import connectDB from "../db/db";
import { Board, Column } from "../models"; // Removed jopApplication if not used

const DEFAULT_COLUMNS = [
  {
    name: "Wish List",
    order: 0,
  },
  {
    name: "Applied",
    order: 1,
  },
  {
    name: "Interviewing",
    order: 2,
  },
  {
    name: "Offer",
    order: 3,
  },
  {
    name: "Rejected",
    order: 4,
  },
];

export const initializedUserBoard = async (userId: string) => {
  try {
    // Validate userId
    if (!userId || typeof userId !== "string") {
      throw new Error(`Invalid userId: ${userId}`);
    }
    
    await connectDB();

    // Check if board already exists - FIXED NAME
    const existingBoard = await Board.findOne({
      userId,
      name: "Job Hunt",  // Fixed spelling
    });
    
    if (existingBoard) {
      console.log("Board already exists for user:", userId);
      return existingBoard;
    }

    // Create the board - FIXED NAME
    const board = await Board.create({
      name: "Job Hunt",  // Fixed spelling
      userId: userId,
      columns: [],
    });

    console.log("Created board for user:", userId, "Board ID:", board._id);

    // Create default columns
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jopApplications: [],  // Note: plural if it's an array
        })
      )
    );

    // Update the board with the new column IDs
    board.columns = columns.map((col) => col._id);
    await board.save();

    console.log("Created columns for board:", board._id, "Columns:", columns.length);
    
    return board;
  } catch (error) {
    console.error("Error initializing user board for userId:", userId, error);
    throw error;
  }
};