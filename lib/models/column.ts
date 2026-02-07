import mongoose, { Schema, Document } from "mongoose";

export interface IColumn extends Document {
  name: string;
  boardId: mongoose.Types.ObjectId;
  order:number;
  jopApplications:mongoose.Types.ObjectId[]
  createdAt: Date;
  updatedAt: Date;
}

// Board -> Columns -> jopApplications

const ColumnSchema = new Schema<IColumn>({
  name: {
    type: String,
    required:true,
  },
  boardId:{
    type:Schema.Types.ObjectId,
    ref:"Board",
    required:true,
    index:true
  },
  order: {
    type:Number,
    required:true,
    default:0,
  },
  jopApplications:[
    {
        type:Schema.Types.ObjectId,
        ref:"JopApplication"
    }
  ]
   
},{
    timestamps:true,
});

export default mongoose.models.Board || mongoose.model<IColumn>("Column", ColumnSchema)
