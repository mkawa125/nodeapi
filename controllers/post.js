const getPosts = (req, res) =>
{
    res.json({
        posts: [
            {title: "First title"} ,  {title: "Second title"} ,
        ]
    });
}

module.exports = { getPosts }