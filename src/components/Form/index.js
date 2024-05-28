import { useState } from "react";
import { categorias } from "../Category";
import styles from "./Form.module.css";

function Form() {

    const [ url,setUrl ] = useState('')
    const [ category, setCategory] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ errors, setErrors ] = useState('')

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)
        // guardar a url e a category
        const newVideo = { url, category }
        setVideos([...videos, newVideo])
        localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
        // limpar o form
        setUrl('')
        setCategory('')
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input 
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        value={category}
                        onChange={ e => setCategory(e.target.value) }
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categorias.map(item => {
                            return <option value={item}>{item}</option>
                        }) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </section>
    );
}

export default Form;