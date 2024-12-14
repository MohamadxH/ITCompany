import { getSlug } from "./slugify"

export async function getPosts() {
    try {
        const postsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
        const posts = await postsFetch.json();
        return posts;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}


export async function getPost(name) {
    try {
        // const postsFetch = await fetch("https://jsonplaceholder.typicode.com/users");
        // const posts = await postsFetch.json();

        const posts = await getPosts()
        const post = posts.find(item => getSlug(name) === getSlug(item.name));

        return post;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
}