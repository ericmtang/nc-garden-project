import React from 'react';

const BlogPara = ({body}) => {

    const blogParas = body.map(blogParas => {
        return (
            <p>{blogParas}</p>
        );
    })

    return (
        <div>
            {blogParas}
        </div>
    )
}

export default BlogPara;