/* eslint-disable react/no-unknown-property */
import PostsGrid from "./post-grid";


function AllPosts(props) {
  return(
    <section>
      <div class="min-h-screen">
        <div class = "px-2 md:px-20 lg:px-32 xl:px-60 2xl:px-80 pt-10 md:pt-14">
          <h1 class="font-bold font-primary text-3xl md:text-5xl lg:text-7xl uppercase">Posts.</h1>
        </div>
        <PostsGrid posts={props.posts} />
      </div>
    </section>
  );
}

export default AllPosts;