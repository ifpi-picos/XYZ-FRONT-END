import AlterarReceitaForm from "@/components/formularios/AlterarReceitaForm"
export default function AlterarReceita({params}){
    return(
        <AlterarReceitaForm id={params.id}/>
    )
}