/* eslint-disable react/no-unknown-property */
import PostsGrid from "./post-grid";


function AllPosts(props) {
  return (
    <section>
      <div class="min-h-screen bg-white dark:bg-secondary">
        <div class="px-2 md:px-20 lg:px-48 xl:px-60 2xl:px-96 pt-10 md:pt-14">
          <h1 class="font-bold font-DMSans text-2xl md:text-4xl lg:text-6xl uppercase">
            Posts.
          </h1>
        </div>
        <PostsGrid posts={props.posts} />
      </div>
    </section>
  );
}

export default AllPosts;