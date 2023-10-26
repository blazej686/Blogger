import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

    async getBlogs() {

        const res = await api.get('api/blogs')
        logger.log('blogs', res.data)
        AppState.blogs = res.data.map((pojo) => new Blog(pojo))

    }

    async getBlogById(blogId) {
        AppState.activeBlog = null
        const res = await api.get(`api/blogs/${blogId}`)
        AppState.activeBlog = new Blog(res.data)


    }
}

export const blogsService = new BlogsService()