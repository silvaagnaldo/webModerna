interface EntradaProps {
    texto: string
}

export default function Formulario(props: EntradaProps) {
    return(
        <div>
            <label>
                {props.texto}
            </label>
        </div>
    )
}