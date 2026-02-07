import { models } from "mongoose";
import connectDB from "../db/db";
import { Board, Column, jopApplication } from "../models";

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
    await connectDB();

    // Check if board already exists
    const existingBoard = await Board.findOne({
      userId,
      name: "Jop Hunt",
    });
    if (existingBoard) {
      return existingBoard;
    }

    // Create the board
    const board = await Board.create({
      name: "job Hunt",
      userId,
      columns: [],
    });

    // Create default columns
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jopApplication: [],
        }),
      ),
    );

    // Update the board with the new column IDs
    board.columns = columns.map((col)=> col._id);
    await board.save();
  } catch (error) {
    throw error;
  }
};
