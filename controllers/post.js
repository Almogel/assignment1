const getAllposts = (req, res) => {
    console.log ("Posts get All service");
    res.send("Posts get All service");
};

const createPost = (req, res) => {
    console.log ("Posts create service");
    res.send("Posts create service");
};

module.exports = { getAllposts, createPost};
