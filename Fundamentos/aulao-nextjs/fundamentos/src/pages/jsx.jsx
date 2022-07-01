export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return(
        <div>
            {titulo}
            {subtitulo}
            <h2>{"muito legal".toUpperCase()}</h2>
            <p>
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
        </div>
    )
}