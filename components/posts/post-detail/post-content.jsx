/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';

function PostContent(props) {
    const { post } = props;

    const customRenderers = {
        p(paragraph) {
            return ( 
                <p class = "leading-loose" > 
                    { paragraph.children } 
                </p>
            );
        },
    };

    return ( 
        <article class = "px-2 md:px-20 lg:px-48 xl:px-60 2xl:px-96 pt-10 md:pt-14 bg-white dark:bg-secondary mb-auto overflow-auto md:overflow-y-scroll" >
          <PostHeader 
            title = { post.title }
            author = { post.author }
          /> 
          <div class = "text-lg sm:text-xl md:text-2xl text-justify leading-loose font-secondary my-32 md:my-40" >
            <ReactMarkdown components = { customRenderers } > 
              {post.content} 
            </ReactMarkdown> 
          </div > 
        </article>
    );
}

export default PostContent;