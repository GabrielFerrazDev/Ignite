import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {Comment} from './comment'
import {Avatar} from "./avatar"
import {ChangeEvent, FormEvent, InvalidEvent, useState} from 'react'
// Em caso de duvida, reassistir a aula 3 do modulo 1 de react do ignite, revisão de useState
import styles from "./post.module.css";


interface Author{
    name: string;
    role: string;
    avatarUrl: string;

}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content:Content[];
}

interface PostProps {
    post: PostType
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}



export function Post({post}:PostProps) {

    const [comments, setComments] = useState<string[]>([])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLL 'às' HH:mm'h'",{locale: ptBR,})

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    


    const isNewCommentEmpty = newCommentText.length === 0
    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault() 
   
        setComments([...comments, newCommentText]); setNewCommentText('');
    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const updatedCommentList = comments.filter(comment => {return comment !== commentToDelete;})
        setComments(updatedCommentList);
    }

    return (
        <article className={styles.post}>
        <header>
        <div className={styles.author}>
        <Avatar hasBorder={true} src={post.author.avatarUrl}/>
        
        <div className={styles.authorInfo}>
        <strong>{post.author.name}</strong>{` `}
        <span>{post.author.role}</span>
        </div>
        </div>
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>    

        <div className={styles.content}>
            {post.content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                    } else if (line.type ==='link') {
                        return <p key={line.content}><a href="#">{line.content}</a>
                    </p>; }

            })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
        
        <textarea 
        name='input'
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required 
        />
        <footer>
            <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
        </form>

        <div className={styles.commentList}>
        {comments.map((comment) => {
           return (
           <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}/>
        )
        }
        )}
        
        </div>

        </article>
    )
}
//As chaves javascript com uma string + espaço dentro são a unica maneira de adicionar um espaço entre lags ou elementos de mesmo linha dentro do react. A outra maneira seriam aplicando css (margin/gap)