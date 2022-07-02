const News = require('../model/news')
let count = 0;

class controller{
    async addNews(req,res){
        count++;
        await News.deleteMany({},(err)=>{
            if (err) {
                console.log(err);
            } else {
                console.log("DB cleared");
            }
        }).clone().catch(function(err){ console.log(err)});
        let news = new News(req.body);
        await news.save((err, news) => {
            if (err) {
              return res.status(500).send({message:"Unable to store the news"})
            }
            return res.status(200).json({
              id: news._id,
              message: "News added ",
            });
          });
    }
    async updateNews(req,res){
        count++;
        await News.findOneAndUpdate(
            {id:1},
            {
                $set: { news: req.body.newNews }
            },
            {new: true},
            (err, news) => {
                if (err) {
                  return res.status(404).send({message:"News not found"})
                } else {
                  return res.status(200).send({message: "Updated successfully"})
                }
            }
    ).clone().catch(function(err){ console.log(err)})
    };
    async count(req,res){
        return res.json({count: count});
    }
}

module.exports = new controller()