const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    require: true,
  },
  courseDescription: {
    type: String,
    require: true,
  },
});

export const subItemModel = mongoose.model("Course", courseSchema);
