import Article from "./article"

const api = 'https://jsonplaceholder.typicode.com/posts'

const loadDataFromServer = async ()=> {
    const response = await fetch(api)
    return response.json()
}

export default async () => {
    const articles = await loadDataFromServer()
    return (<>
        <h1>My blog</h1>
        {articles.map( p => <Article key={p.id} {...p}/>)}
    </>)
}