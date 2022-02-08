// import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {

    // useFetch returned 3 things in these 3 variables (declaring data = blogs for this component only)
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div>Loading...</div> }

            { /*if the 'blogs' is false, the line doesn't executes. If it's true, then the right side executes. '&&' works like async await*/ }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
}


export default Home;