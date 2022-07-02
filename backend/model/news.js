const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            default: 1,
        },
        news:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("News", newsSchema);

