import Post from "./post"

const api = 'https://jsonplaceholder.typicode.com/posts'

const loadDataFromServer = async ()=> {
    const response = await fetch(api)
    return response.json()
}

export default async () => {
    const posts = await loadDataFromServer()
    return (<>
        <h1>My blog</h1>
        {posts.map( p => <Post key={p.id} {...p}/>)}
    </>)
}