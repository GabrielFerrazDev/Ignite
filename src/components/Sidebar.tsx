import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'
import {Avatar} from './avatar'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

            <div className={styles.profile}>
            <Avatar hasBorder={true} src='https://avatars.githubusercontent.com/u/116670024?v=4' />
                <strong>Gabriel Ferraz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )    
}