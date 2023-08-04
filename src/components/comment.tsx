import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from "./avatar";
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }
    return(
        <div className={styles.comment}>
                <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/116670024?v=4'/>

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                    <header>
                        <div  className={styles.authorAndTime}>
                        <strong>Gabriel Ferraz</strong>
                        <time title="31 de Maio as 08:13h"dateTime='2023-05-11 08:13:38'>Cerca de 1h atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                        
                    </header>
                    <p>{content}</p>
                    </div>
                    <footer>
                        <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>

        </div>
    )
}