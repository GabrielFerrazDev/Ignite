import {Post, PostType} from "./components/post"
import { Header } from './components/header'
import {Sidebar} from './components/Sidebar'

//ao importar css global, bastar usar import, nao sendo necessário nomear. No entanto, ao importar scoped css (module) para um componenete, se faz necessário nomear. 
import './global.css'
import styles from "./App.module.css"


const posts: PostType[] = [
  {
    id:1,
    author:
     { avatarUrl: "https://avatars.githubusercontent.com/u/116670024?v=4",
      name:"Gabriel",
      role:"Front End Developer"},
      content:[ 
        {type:'paragraph' , content: 'E ai, galera?'},
        {type:'paragraph' , content: 'Acabei de subir mais um projeto no meu portfolio. É um layout que fiz na NLW spacetime.'},
        {type:'link' , content:'Link do projeto'}],
        publishedAt: new Date('2022-12-03 14:31'),
  }, 
  {
    id:2,
    author:
     { avatarUrl: "https://avatars.githubusercontent.com/u/60308994?v=4",
      name:"Lucas",
      role:"Back End Developer"},
      content:[ 
        {type:'paragraph' , content: ''},
        {type:'paragraph' , content: 'Fiz uma calculadora simples com javascript, querem ver?'},
        {type:'link' , content: 'Link do projeto'}],
        publishedAt: new Date('2022-05-07 21:57'),
  },
]

export function App() {


  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
    
    
    <aside>
    <Sidebar />
    </aside>

    <main>
    {posts.map(post => {
      return (
      <Post 
      key={post.id}
      post={post}/>)
    /* Nessa função, usamos o método map como estrutura de repetiçaõ. Conceitualmente, ele é muito similar ao "forEach", no entanto, diferente do forEach, o map pode retornar conteudo (forEach sempre retorna "void"). Assim como o "forEach" o map irá mostrar e acessar o dado solicitado para cada uma das vezes que esse dado solicitado aparecer no objeto que ele for aplicado. Como aqui só temos 2 objetos, ele repete 2 vezes, criando 2 posts, se tivessemos 10 objetos diferentes, ele criaria 10.
    Além de importar o Post, determinamos o valor de determinadas variáveis que queremos utilizar como argumento da função recebica (post.author, post.content e etc (Desestrututação)*/ 
    })}

    </main>
    </div>
    </div>
  )
}


